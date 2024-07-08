const egitimEkle = document.querySelector("#egitim .baslik button");
const dillerEkle = document.querySelector("#diller .baslik button");
const araclarEkle = document.querySelector("#araclar .baslik button");
const linklerEkle = document.querySelector("#linkler .baslik button");
const yeteneklerEkle = document.querySelector("#yetenekler .baslik button");
const isdeneyimlerEkle = document.querySelector("#isdeneyimler .baslik button");

const egitimSatirlar = document.querySelector("#egitim .satirlar");
const dillerSatirlar = document.querySelector("#diller .satirlar");
const araclarSatirlar = document.querySelector("#araclar .satirlar");
const linklerSatirlar = document.querySelector("#linkler .satirlar");
const yeteneklerSatirlar = document.querySelector("#yetenekler .satirlar");
const isdeneyimlerSatirlar = document.querySelector("#isdeneyimler .satirlar");

linklerEkle.addEventListener("click", createLink);
araclarEkle.addEventListener("click", createArac);
dillerEkle.addEventListener("click", createDil);
yeteneklerEkle.addEventListener("click", createYetenek);
egitimEkle.addEventListener("click", createEgitim);
isdeneyimlerEkle.addEventListener("click", createIsdeneyim);

function createLink() {
    const satir = document.createElement("div");
    satir.classList.add("satir");

    const inputBox1 = document.createElement("div");
    inputBox1.classList.add("input-box");

    const inputBox2 = document.createElement("div");
    inputBox2.classList.add("input-box");
    
    const inputBox3 = document.createElement("div");
    inputBox3.classList.add("input-box");

    const label1 = document.createElement("label");
    label1.textContent = "Ad:"

    const label2 = document.createElement("label");
    label2.textContent = "Link:"

    const input1 = document.createElement("input");
    input1.type = "text";
    
    const input2 = document.createElement("input");
    input1.type = "text";

    const a = document.createElement("a");
    a.href = "";
    a.textContent = "sil";
    a.addEventListener("click", e => {
        e.preventDefault();
        linklerSatirlar.removeChild(satir);
    });

    inputBox3.appendChild(a);
    inputBox2.appendChild(label2);
    inputBox2.appendChild(input2);
    inputBox1.appendChild(label1);
    inputBox1.appendChild(input1);
    satir.appendChild(inputBox1);
    satir.appendChild(inputBox2);
    satir.appendChild(inputBox3);
    linklerSatirlar.appendChild(satir);
}

function createArac() {
    const satir = document.createElement("div");
    satir.classList.add("satir");

    const inputBox1 = document.createElement("div");
    inputBox1.classList.add("input-box");

    const inputBox2 = document.createElement("div");
    inputBox2.classList.add("input-box");
    
    const inputBox3 = document.createElement("div");
    inputBox3.classList.add("input-box");

    const label1 = document.createElement("label");
    label1.textContent = "Araç:"

    const label2 = document.createElement("label");
    label2.textContent = "Seviye:"

    const input1 = document.createElement("input");
    input1.type = "text";
    
    const input2 = document.createElement("input");
    input1.type = "text";

    const a = document.createElement("a");
    a.href = "";
    a.textContent = "sil";
    a.addEventListener("click", e => {
        e.preventDefault();
        araclarSatirlar.removeChild(satir);
    });

    inputBox3.appendChild(a);
    inputBox2.appendChild(label2);
    inputBox2.appendChild(input2);
    inputBox1.appendChild(label1);
    inputBox1.appendChild(input1);
    satir.appendChild(inputBox1);
    satir.appendChild(inputBox2);
    satir.appendChild(inputBox3);
    araclarSatirlar.appendChild(satir);
}

function createDil() {
    const satir = document.createElement("div");
    satir.classList.add("satir");

    const inputBox1 = document.createElement("div");
    inputBox1.classList.add("input-box");

    const inputBox2 = document.createElement("div");
    inputBox2.classList.add("input-box");
    
    const inputBox3 = document.createElement("div");
    inputBox3.classList.add("input-box");

    const label1 = document.createElement("label");
    label1.textContent = "Dil:"

    const label2 = document.createElement("label");
    label2.textContent = "Seviye:"

    const input1 = document.createElement("input");
    input1.type = "text";
    
    const input2 = document.createElement("input");
    input1.type = "text";

    const a = document.createElement("a");
    a.href = "";
    a.textContent = "sil";
    a.addEventListener("click", e => {
        e.preventDefault();
        dillerSatirlar.removeChild(satir);
    });

    inputBox3.appendChild(a);
    inputBox2.appendChild(label2);
    inputBox2.appendChild(input2);
    inputBox1.appendChild(label1);
    inputBox1.appendChild(input1);
    satir.appendChild(inputBox1);
    satir.appendChild(inputBox2);
    satir.appendChild(inputBox3);
    dillerSatirlar.appendChild(satir);
}

function createYetenek() {
    const satir = document.createElement("div");
    satir.classList.add("satir");

    const inputBox1 = document.createElement("div");
    inputBox1.classList.add("input-box");

    const inputBox2 = document.createElement("div");
    inputBox2.classList.add("input-box");

    const label1 = document.createElement("label");
    label1.textContent = "Yetenek:"

    const input1 = document.createElement("input");
    input1.type = "text";
    
    const a = document.createElement("a");
    a.href = "";
    a.textContent = "sil";
    a.addEventListener("click", e => {
        e.preventDefault();
        yeteneklerSatirlar.removeChild(satir);
    });

    inputBox2.appendChild(a);
    inputBox1.appendChild(label1);
    inputBox1.appendChild(input1);
    satir.appendChild(inputBox1);
    satir.appendChild(inputBox2);
    yeteneklerSatirlar.appendChild(satir);
}

function createEgitim() {
    const satir = document.createElement("div");
    satir.classList.add("satir");

    const bilgiler = document.createElement("div");
    bilgiler.classList.add("bilgiler");
    
    const adBolum = document.createElement("div");
    adBolum.classList.add("ad-bolum");

    const inputBoxKurumAdi = document.createElement("div");
    inputBoxKurumAdi.classList.add("input-box");

    const inputBoxBolum = document.createElement("div");
    inputBoxBolum.classList.add("input-box");

    const labelKurumAdi = document.createElement("label");
    labelKurumAdi.textContent = "Kurum Adı:";

    const inputKurumAdi = document.createElement("input");
    inputKurumAdi.type = "text";

    const labelBolum = document.createElement("label");
    labelBolum.textContent = "Bölüm:";

    const inputBolum = document.createElement("input");
    inputBolum.type = "text";

    inputBoxKurumAdi.appendChild(labelKurumAdi);
    inputBoxKurumAdi.appendChild(inputKurumAdi);
    inputBoxBolum.appendChild(labelBolum);
    inputBoxBolum.appendChild(inputBolum);

    
    const yilKonum = document.createElement("div");
    yilKonum.classList.add("yil-konum");

    const inputBoxYil = document.createElement("div");
    inputBoxYil.classList.add("input-box");
    inputBoxYil.classList.add("yil");

    const inputBoxIl = document.createElement("div");
    inputBoxIl.classList.add("input-box");

    const inputBoxUlke = document.createElement("div");
    inputBoxUlke.classList.add("input-box");

    const labelYil = document.createElement("label");
    labelYil.textContent = "Yıl Aralğı:";

    const labelIl = document.createElement("label");
    labelIl.textContent = "İl:";

    const labelUlke = document.createElement("label");
    labelUlke.textContent = "Ülke:";

    const inputYil1 = document.createElement("input");
    inputYil1.type = "text";
    inputYil1.placeholder = "yıl";

    const inputYil2 = document.createElement("input");
    inputYil2.type = "text";
    inputYil2.placeholder = "yıl";

    const dashText = document.createTextNode("-");

    const inputIl = document.createElement("input");
    inputIl.type = "text";

    const inputUlke = document.createElement("input");
    inputUlke.type = "text";

    inputBoxYil.appendChild(labelYil);
    inputBoxYil.appendChild(inputYil1);
    inputBoxYil.appendChild(dashText);
    inputBoxYil.appendChild(inputYil2);
    
    inputBoxIl.appendChild(labelIl);
    inputBoxIl.appendChild(inputIl);

    inputBoxUlke.appendChild(labelUlke);
    inputBoxUlke.appendChild(inputUlke);

    adBolum.appendChild(inputBoxKurumAdi);
    adBolum.appendChild(inputBoxBolum);
    yilKonum.appendChild(inputBoxYil);
    yilKonum.appendChild(inputBoxIl);
    yilKonum.appendChild(inputBoxUlke);

    bilgiler.appendChild(adBolum);
    bilgiler.appendChild(yilKonum);


    const inputBoxSil = document.createElement("div");
    inputBoxSil.classList.add("input-box");

    const a = document.createElement("a");
    a.href = "";
    a.textContent = "sil";
    a.addEventListener("click", e => {
        e.preventDefault();
        egitimSatirlar.removeChild(satir);
    });

    inputBoxSil.appendChild(a);

    satir.appendChild(bilgiler);
    satir.appendChild(inputBoxSil);
    egitimSatirlar.appendChild(satir);
}

function createIsdeneyim() {
    const satir = document.createElement("div");
    satir.classList.add("satir");

    const bilgiler = document.createElement("div");
    bilgiler.classList.add("bilgiler");
    
    const adUnvan = document.createElement("div");
    adUnvan.classList.add("ad-unvan");

    const inputBoxKurumAdi = document.createElement("div");
    inputBoxKurumAdi.classList.add("input-box");

    const inputBoxUnvan = document.createElement("div");
    inputBoxUnvan.classList.add("input-box");

    const labelKurumAdi = document.createElement("label");
    labelKurumAdi.textContent = "Kurum Adı:";

    const inputKurumAdi = document.createElement("input");
    inputKurumAdi.type = "text";

    const labelUnvan = document.createElement("label");
    labelUnvan.textContent = "Unvan:";

    const inputUnvan = document.createElement("input");
    inputUnvan.type = "text";

    inputBoxKurumAdi.appendChild(labelKurumAdi);
    inputBoxKurumAdi.appendChild(inputKurumAdi);
    inputBoxUnvan.appendChild(labelUnvan);
    inputBoxUnvan.appendChild(inputUnvan);

    const ayYil = document.createElement("div");
    ayYil.classList.add("ay-yil");

    const inputBoxYil = document.createElement("div");
    inputBoxYil.classList.add("input-box");
    inputBoxYil.classList.add("yil");

    const labelYil = document.createElement("label");
    labelYil.textContent = "Tarih Aralğı:";

    const inputYil1 = document.createElement("input");
    inputYil1.type = "text";
    inputYil1.placeholder = "yıl";

    const inputYil2 = document.createElement("input");
    inputYil2.type = "text";
    inputYil2.placeholder = "yıl";

    const inputAy1 = document.createElement("input");
    inputAy1.type = "text";
    inputAy1.placeholder = "ay";

    const inputAy2 = document.createElement("input");
    inputAy2.type = "text";
    inputAy2.placeholder = "ay";

    const dashText = document.createTextNode("-");

    inputBoxYil.appendChild(labelYil);
    inputBoxYil.appendChild(inputAy1);
    inputBoxYil.appendChild(inputYil1);
    inputBoxYil.appendChild(dashText);
    inputBoxYil.appendChild(inputAy2);
    inputBoxYil.appendChild(inputYil2);

    adUnvan.appendChild(inputBoxKurumAdi);
    adUnvan.appendChild(inputBoxUnvan);
    ayYil.appendChild(inputBoxYil);

    const ozet = document.createElement("div");
    ozet.classList.add("ozet");

    const labelOzet = document.createElement("label");
    labelOzet.textContent = "Özet:";

    const inputOzet = document.createElement("textarea");

    const inputBoxOzet = document.createElement("div");
    inputBoxOzet.classList.add("input-box");

    inputBoxOzet.appendChild(labelOzet);
    inputBoxOzet.appendChild(inputOzet);
    ozet.appendChild(inputBoxOzet);

    bilgiler.appendChild(adUnvan);
    bilgiler.appendChild(ayYil);
    bilgiler.appendChild(ozet);


    const inputBoxSil = document.createElement("div");
    inputBoxSil.classList.add("input-box");

    const a = document.createElement("a");
    a.href = "";
    a.textContent = "sil";
    a.addEventListener("click", e => {
        e.preventDefault();
        isdeneyimlerSatirlar.removeChild(satir);
    });

    inputBoxSil.appendChild(a);

    satir.appendChild(bilgiler);
    satir.appendChild(inputBoxSil);
    isdeneyimlerSatirlar.appendChild(satir);
}

const silButtonlar = Array.from(document.querySelectorAll("section a"));
silButtonlar.forEach(btn => {
    btn.addEventListener("click", e => {
        e.preventDefault();
        btn.parentElement.parentElement.remove();
    });
});

function errorHighlight() {
    let error = false;
    const inputs = Array.from(document.querySelectorAll("input:not([type=hidden]), textarea"));
    inputs.forEach(input => {
        if (!input.value.trim()) {
            if (!error) {
                console.log(input);
                input.focus();
                input.scrollIntoView();
            }
            error = true;
            input.classList.add("error-highlight");
        }
    })
    return error;
}

function removeAllErrorHighlights() {
    const inputs = Array.from(document.querySelectorAll("input, textarea"));
    inputs.forEach(input => {
        input.classList.remove("error-highlight");
    })
}

function getProfilData() {
    const inputs = Array.from(document.querySelectorAll("#profil input, #profil textarea"));
    return {
        aciklama: inputs[0].value.trim(),
        ad: inputs[1].value.trim(),
        soyad: inputs[2].value.trim(),
        email: inputs[3].value.trim(),
        tel: inputs[4].value.trim(),
        adres: inputs[5].value.trim(),
        ozet: inputs[6].value.trim(),
    }
}

function getLinklerData() {
    const inputs = Array.from(document.querySelectorAll("#linkler input"));
    const data = [];
    for(let i = 0; i < inputs.length/2; i++) {
        data.push({
            ad: inputs[2*i].value.trim(),
            link: inputs[2*i+1].value.trim(),
        });
    }
    return data;
}

function getAraclarData() {
    const inputs = Array.from(document.querySelectorAll("#araclar input"));
    const data = [];
    for(let i = 0; i < inputs.length/2; i++) {
        data.push({
            arac: inputs[2*i].value.trim(),
            seviye: inputs[2*i+1].value.trim(),
        });
    }
    return data;
}

function getDillerData() {
    const inputs = Array.from(document.querySelectorAll("#diller input"));
    const data = [];
    for(let i = 0; i < inputs.length/2; i++) {
        data.push({
            dil: inputs[2*i].value.trim(),
            seviye: inputs[2*i+1].value.trim(),
        });
    }
    return data;
}

function getYeteneklerData() {
    const inputs = Array.from(document.querySelectorAll("#yetenekler input"));
    const data = [];
    for(let i = 0; i < inputs.length; i++) {
        data.push(inputs[i].value.trim());
    }
    return data;
}

function getEgitimData() {
    const inputs = Array.from(document.querySelectorAll("#egitim input"));
    const data = [];
    for(let i = 0; i < inputs.length/6; i++) {
        data.push({
            kurum: inputs[i*6].value.trim(),
            bolum: inputs[i*6+1].value.trim(),
            yilBaslangic: inputs[i*6+2].value.trim(),
            yilBitis: inputs[i*6+3].value.trim(),
            il: inputs[i*6+4].value.trim(),
            ulke: inputs[i*6+5].value.trim(),
        });
    }
    return data;
}

function getIsdeneyimlerData() {
    const inputs = Array.from(document.querySelectorAll("#isdeneyimler input, #isdeneyimler textarea"));
    const data = [];
    for(let i = 0; i < inputs.length/7; i++) {
        data.push({
            kurum: inputs[i*7].value.trim(),
            unvan: inputs[i*7+1].value.trim(),
            ayBaslangic: inputs[i*7+2].value.trim(),
            yilBaslangic: inputs[i*7+3].value.trim(),
            ayBitis: inputs[i*7+4].value.trim(),
            yilBitis: inputs[i*7+5].value.trim(),
            ozet: inputs[i*7+6].value.trim(),
        });
    }
    return data;
}

function getData() {
    let error = errorHighlight();
    if (error) return;
    const data = getProfilData();
    data.egitim = getEgitimData();
    data.isdeneyimler = getIsdeneyimlerData();
    data.araclar = getAraclarData();
    data.linkler = getLinklerData();
    data.diller = getDillerData();
    data.yetenekler = getYeteneklerData();
    return data;
}


const kaydetDataInput = document.querySelector("#kaydet input");
const kaydetForm = document.querySelector("#kaydet");
kaydetForm.addEventListener("submit", e => e.preventDefault());

const kaydetBtn = document.querySelector("#kaydetBtn");
kaydetBtn.addEventListener("click", e => {
    e.preventDefault();
    const data = getData();
    if (data) {
        kaydetDataInput.value = JSON.stringify(data);
        kaydetForm.submit();
    }
});