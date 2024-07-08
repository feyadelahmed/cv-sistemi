const crypto = require('crypto');
const express = require("express");
const dbConnect = require("../db");



const router = express.Router();
router.get("/kayit", (req, res) => {
    if (req.session.user_id) {
        return res.redirect("/dashboard");
    }
    res.render("kayit", {msg: "", username:"", password:""});
});

router.post("/kayit", async (req, res) => {
    if (req.session.user_id) {
        return res.redirect("/dashboard");
    }

    const username = req.body.username.trim();
    const password = req.body.password.trim();

    if (username == "" || password == "") {
        return res.render("kayit", {msg: "kullanıcıadı ve şifre boş olmamalı", username:username, password:password});
    }

    if (/\s/.test(username)) {
        return res.render("kayit", {msg: "kullanıcıadı tek kelime olmalı", username:username, password:password});
    }

    try {
        const db = await dbConnect();
        const kullanicilarColl = await db.collection("kullanicilar");
        
        const existingUser = await kullanicilarColl.findOne({username: username});
        if (existingUser) {
            return res.render("kayit", {msg: "kullanıcıadı sistemde kayıtlı.", username:username, password:password});
        }
        
        const hashedPassword = crypto.createHash("sha256").update(password).digest("base64");
        const user = {
            ad: "",
            soyad: "",
            email: "",
            img: "",
            username: username,
            password: hashedPassword,
        };
        await kullanicilarColl.insertOne(user);
    } catch(e) {
        return res.render("kayit", {msg: "bilinmeyen bir hata oluştu. tekrar deneyiniz.", username:username, password:password});
    }

    res.redirect("/auth/giris");
});

router.get("/giris", (req, res) => {
    if (req.session.user_id) {
        return res.redirect("/dashboard");
    }
    res.render("giris", {msg: "", username:"", password:""});
});

router.post("/giris", async (req, res) => {
    if (req.session.user_id) {
        return res.redirect("/dashboard");
    }

    const username = req.body.username.trim();
    const password = req.body.password.trim();

    if (username == "" || password == "") {
        return res.render("giris", {msg: "kullanıcıadı ve şifre boş olmamalı", username:username, password:password});
    }

    if (/\s/.test(username)) {
        return res.render("giris", {msg: "kullanıcıadı tek kelime olmalı", username:username, password:password});
    }

    try {
        const db = await dbConnect();
        const kullanicilarColl = await db.collection("kullanicilar");
        
        const hashedPassword = crypto.createHash("sha256").update(password).digest("base64");
        const existingUser = await kullanicilarColl.findOne({username: username});
        if (!existingUser || existingUser.password != hashedPassword) {
            return res.render("giris", {msg: "kullanıcıadı veya şifre yanlıştır", username:username, password:password});
        }
        
        req.session.user_id = existingUser._id.toString();
    } catch(e) {
        return res.render("giris", {msg: "bilinmeyen bir hata oluştu. tekrar deneyiniz.", username:username, password:password});
    }

    res.redirect("/dashboard");
});

router.get("/cikis", (req, res) => {
    req.session.destroy()
    return res.redirect("/auth/giris");
});


module.exports = router;
