let imgInput = document.querySelector("#img");
let img = document.querySelector("#profil-img");

imgInput.addEventListener("change", e => {
    let reader = new FileReader();
    reader.readAsDataURL(imgInput.files[0]);
    reader.onload = function(e) {
        img.src = e.target.result;
    }
})