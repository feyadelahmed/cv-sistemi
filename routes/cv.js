const express = require("express");
const { ObjectId } = require("mongodb");
const dbConnect = require("../db");
const multer = require("multer");
const axios = require("axios");
const path = require("path");
require('dotenv').config()
let ejs = require('ejs');

const router = express.Router();
const upload = multer();


router.get("/:cvid/duzenle", async (req, res) => {
    if (!req.session.user_id) {
        return res.redirect("/auth/giris");
    };
    
    try {
        const db = await dbConnect();
        const ozgecmislerColl = await db.collection("ozgecmisler");
        let cv = await ozgecmislerColl.findOne({_id: new ObjectId(req.params.cvid)});
        cv.id = cv._id.toString();
        return res.render("cvduzenle", {cv: cv});
    } catch(e) {
        return res.render("cvduzenle", {cv: {}});
    }
});

router.post("/:cvid/duzenle", async (req, res) => {
    if (!req.session.user_id) {
        return res.redirect("/auth/giris");
    };
    let cvdatastr = req.body.cvdata;
    let cvdata = JSON.parse(cvdatastr);
    cvdata.user_id = req.session.user_id;

    try {
        const db = await dbConnect();
        const ozgecmislerColl = await db.collection("ozgecmisler");
        let oldcv = await ozgecmislerColl.findOne({_id: new ObjectId(req.params.cvid)});
        cvdata.img = oldcv.img;
        await ozgecmislerColl.replaceOne({_id: new ObjectId(req.params.cvid)}, cvdata);
        return res.redirect(`/cv/${req.params.cvid}/duzenle`)
    } catch(e) {
        return res.redirect(`/cv/${req.params.cvid}/duzenle`)
    }
});

router.get("/:cvid/sil", async (req, res) => {
    if (!req.session.user_id) {
        return res.redirect("/auth/giris");
    };

    try {
        const db = await dbConnect();
        const ozgecmislerColl = await db.collection("ozgecmisler");
        let cv = await ozgecmislerColl.findOne({_id: new ObjectId(req.params.cvid)});

        if (cv.user_id != req.session.user_id) {
            return res.redirect("/dashboard");
        };

        const onay = req.query.onay;
        if (onay === "0") {
            return res.redirect("/dashboard");
        }

        if (onay == "1") {
            ozgecmislerColl.deleteOne({_id: new ObjectId(req.params.cvid)});
            return res.redirect("/dashboard");
        }
        
        cv.id = cv._id.toString();
        return res.render("cvsil", {cv: cv});
    } catch(e) {
        return res.redirect("/dashboard");
    }
});

router.get("/:cvid/paylas", async (req, res) => {
    if (!req.session.user_id) {
        return res.redirect("/auth/giris");
    };

    try {
        const db = await dbConnect();
        const ozgecmislerColl = await db.collection("ozgecmisler");
        let cv = await ozgecmislerColl.findOne({_id: new ObjectId(req.params.cvid)});
        if (cv.user_id != req.session.user_id) {
            return res.redirect("/dashboard");
        };

        let updated = {};
        const paylas = req.query.paylas;
        if (paylas === "0") updated.paylasma = false;
        else if (paylas == "1") updated.paylasma = true;
        await ozgecmislerColl.updateOne({_id: new ObjectId(req.params.cvid)}, {$set: updated})
        return res.redirect("/dashboard");
    } catch(e) {
        return res.redirect("/dashboard");
    }
});

router.get("/:cvid/", async (req, res) => {
    try {
        const db = await dbConnect();
        const ozgecmislerColl = await db.collection("ozgecmisler");
        let cv = await ozgecmislerColl.findOne({_id: new ObjectId(req.params.cvid)});
        if (!cv.paylasma) {
            return res.redirect("/dashboard");
        };
        return res.render("cvgoster", {cv: cv});
    } catch(e) {
        return res.redirect("/dashboard");
    }
});

router.get("/:cvid/indir", async (req, res) => {
    if (!req.session.user_id) {
        return res.redirect("/auth/giris");
    };
    
    try {
        const db = await dbConnect();
        const ozgecmislerColl = await db.collection("ozgecmisler");
        let cv = await ozgecmislerColl.findOne({_id: new ObjectId(req.params.cvid)});
        if (cv.user_id != req.session.user_id) {
            return res.redirect("/dashboard");
        };
        const ejsFile = path.join(__dirname, "..", "views", "cvindir.ejs");
        let html = await ejs.renderFile(ejsFile, {cv: cv});
        
        pdfshift(process.env.PDF_API_KEY, { source: html })
            .then(function (response) {
                res.setHeader('Content-Disposition', 'attachment; filename=' + `${cv.ad}_${cv.soyad}.pdf`);
                return res.send(response.data);
            })
            .catch(function({message, code, response, errors = null}) {})
    } catch(e) {
        return res.redirect("/dashboard");
    }
});

function pdfshift(api_key, data) {
    return new Promise((resolve, reject) => {
        let asJson = false
        if ('filename' in data || 'webhook' in data) {
            asJson  = true
        }
  
        axios.request({
            method: 'post',
            url: 'https://api.pdfshift.io/v3/convert/pdf',
            responseType: (asJson ? 'json' : 'arraybuffer'),
            data: data,
            auth: { username: 'api', password: api_key }
        }).then(resolve).catch(response => {
            reject(response)
        })
    })
  }

module.exports = router;