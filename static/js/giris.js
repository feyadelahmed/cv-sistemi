const form = document.querySelector("#kayit-form");
const msg = document.querySelector("#msg");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let usernameInput = username.value.trim();
    let passwordInput = password.value.trim();
    if (usernameInput == "" || passwordInput == "") {
        msg.textContent = "kullanıcıadı ve şifre boş olmamalı";
        msg.classList.remove("hidden");
        return;
    }

    if (/\s/.test(usernameInput)) {
        msg.textContent = "kullanıcıadı tek kelime olmalı";
        msg.classList.remove("hidden");
        return;
    }

    form.submit();
});