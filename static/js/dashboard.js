const cvLinks = Array.from(document.querySelectorAll(".link a"));
cvLinks.forEach(link => {
    link.textContent = `${link.href}`;
});