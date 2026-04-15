// zmiana motywu
const themeBtn = document.getElementById("themeBtn");
let isRed = true;

themeBtn.addEventListener("click", function () {
    const link = document.querySelector("link[rel='stylesheet']");
    
    if (isRed) {
        link.href = "green.css";
    } else {
        link.href = "red.css";
    }

    isRed = !isRed;
});


// ukrywanie sekcji
const toggleBtn = document.getElementById("toggleBtn");
const projekty = document.getElementById("projekty");

toggleBtn.addEventListener("click", function () {
    if (projekty.style.display === "none") {
        projekty.style.display = "block";
    } else {
        projekty.style.display = "none";
    }
});