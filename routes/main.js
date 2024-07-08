const express = require("express");
const { ObjectId } = require("mongodb");
const dbConnect = require("../db");
const multer = require("multer");
const axios = require("axios");
const path = require("path");
require('dotenv').config()

const router = express.Router();
const upload = multer();


router.get("/", (req, res) => {
    res.redirect("/dashboard");
});

router.get("/profil", async (req, res) => {
    if (!req.session.user_id) {
        return res.redirect("/auth/giris");
    }

    try {
        const db = await dbConnect();
        const kullanicilarColl = await db.collection("kullanicilar");
        let user = await kullanicilarColl.findOne({_id: new ObjectId(req.session.user_id)})
        return res.render("profil", {user: user, hesabsilmsg: "", sifredegistirmsg: ""});
    } catch(e) {
        return res.render("profil", {user: {}, hesabsilmsg: "", sifredegistirmsg: ""});
    }
});

router.post("/profil", upload.single('img'), async (req, res) => {
    if (!req.session.user_id) {
        return res.redirect("/auth/giris");
    }

    if (req.body.deletepassword != undefined) {
        try {
            let password = req.body.deletepassword.trim();
            const db = await dbConnect();
            const kullanicilarColl = await db.collection("kullanicilar");
            let user = await kullanicilarColl.findOne({_id: new ObjectId(req.session.user_id)})
            
            if (user.password == password) {
                kullanicilarColl.deleteOne({username: user.username});
                return res.redirect("/auth/cikis");
            } else {
                return res.render("profil", {user: user, hesabsilmsg: "girdiğiniz şifre yanlıştır", sifredegistirmsg: ""});
            }
        } catch(e) {
            return res.render("profil", {user: user, hesabsilmsg: "", sifredegistirmsg: ""});
        }
    }

    if (req.body.password != undefined) {
        try {
            let pass1 = req.body.password.trim();
            let pass2 = req.body.password2.trim();
            const db = await dbConnect();
            const kullanicilarColl = await db.collection("kullanicilar");
            let user = await kullanicilarColl.findOne({_id: new ObjectId(req.session.user_id)})
            
            if (!pass1 || !pass2) {
                return res.render("profil", {user: user, hesabsilmsg: "", sifredegistirmsg: "Şifre boş olmamalı"});
            }

            if (pass1 != pass2) {
                return res.render("profil", {user: user, hesabsilmsg: "", sifredegistirmsg: "Şifreler aynı değil"})
            } else {
                let updatedUser = {
                    $set: { 
                        password: pass1,
                    }
                }
                await kullanicilarColl.updateOne({_id: new ObjectId(req.session.user_id)}, updatedUser)
                return res.render("profil", {user: user, hesabsilmsg: "", sifredegistirmsg: "Şifre Değiştirildi"});
            }
           
        } catch(e) {
            return res.render("profil", {user: user, hesabsilmsg: "", sifredegistirmsg: ""});
        }
    }

    let ad = req.body.ad.trim();
    let soyad = req.body.soyad.trim();
    let email = req.body.email.trim();
    let img = req.file;

    try {
        const db = await dbConnect();
        const kullanicilarColl = await db.collection("kullanicilar");
        let updateData = { 
            ad: ad,
            soyad: soyad,
            email: email,
        };


        if (img) {
            let formData = new FormData();
            formData.append("key", process.env.IMGBB_KEY);
            formData.append("image", img.buffer.toString("base64"));
            let resp = await axios.post("https://api.imgbb.com/1/upload", formData);
            updateData.img = resp.data.data.display_url;
        }
        let updatedUser = {
            $set: updateData,
        }
        await kullanicilarColl.updateOne({_id: new ObjectId(req.session.user_id)}, updatedUser)
        
        let user = await kullanicilarColl.findOne({_id: new ObjectId(req.session.user_id)})
        res.render("profil", {user: user, hesabsilmsg: "", sifredegistirmsg: ""});
        
    } catch(e) {
        res.render("profil", {user: {}, hesabsilmsg: "", sifredegistirmsg: ""});
    }
});

router.get("/dashboard", async (req, res) => {
    if (!req.session.user_id) {
        return res.redirect("/auth/giris");
    }

    try {
        const db = await dbConnect();
        const ozgecmislerColl = await db.collection("ozgecmisler");
        const kullanicilarColl = await db.collection("kullanicilar");

        if (req.query.yenicv === "1") {
            let user = await kullanicilarColl.findOne({_id: new ObjectId(req.session.user_id)});
            await ozgecmislerColl.insertOne({
                user_id: req.session.user_id,
                ad: user.ad,
                soyad: user.soyad,
                img: user.img,
                email: user.email,
                paylasma: false,
                adres: "",
                tel: "",
                aciklama: "yeni cv",
                ozet: "",
                egitim: [],
                isdeneyimler: [],
                araclar: [],
                linkler: [],
                diller: [],
                yetenekler: [],
            });
            return res.redirect("/dashboard");
        }

        let cvs = await ozgecmislerColl.find({user_id: req.session.user_id}).toArray();
        cvs.forEach(cv => {
            cv.id = cv._id.toString();
            if (cv.paylasma) {
                cv.paylasma_komut = "Paylaşmayı Durdur";
                cv.paylasma_param = "0";
            } else {
                cv.paylasma_komut = "Paylaş";
                cv.paylasma_param = "1";
            } 
        });
        return res.render("dashboard", {cvs: cvs});
    } catch(e) {
        return res.render("dashboard", {cvs: []});
    }
});

module.exports = router;