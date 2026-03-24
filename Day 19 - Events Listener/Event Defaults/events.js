console.log("Event Defaults")

const googleLink = document.getElementById("googleLink");

googleLink.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Default action prevented");
});

// Form handling
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Form submitted");
        console.log("Username:", usernameInput.value);
        console.log("Password:", passwordInput.value);
        usernameInput.value = "";
        passwordInput.value = "";
    });

