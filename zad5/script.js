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


const form = document.getElementById("contactForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    // очистка помилок
    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    // ім'я (без цифр)
    if (firstName.value.trim() === "" || /\d/.test(firstName.value)) {
        firstNameError.textContent = "Niepoprawne imię";
        isValid = false;
    }

    // прізвище
    if (lastName.value.trim() === "" || /\d/.test(lastName.value)) {
        lastNameError.textContent = "Niepoprawne nazwisko";
        isValid = false;
    }

    // email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Niepoprawny email";
        isValid = false;
    }

    // повідомлення
    if (message.value.trim() === "") {
        messageError.textContent = "Wiadomość jest wymagana";
        isValid = false;
    }

    if (isValid) {
        alert("Formularz wysłany poprawnie!");
        form.reset();
    }
});
