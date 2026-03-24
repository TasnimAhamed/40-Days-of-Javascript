console.log("Custom Events");

// 1. Create the Custom Events
const myEvent = new CustomEvent("userLoggedIn", {
    detail: {
        name: "John Doe",
        email: "[EMAIL_ADDRESS]",
        role: "Admin"
    }
});

// 2. Listen to the Custom Events
document.addEventListener("userLoggedIn", (e) => {
    console.log(e.detail);
});

// 3. Dispatch the Custom Events
document.dispatchEvent(myEvent);

// Loggin User
function loginUser(name) {
    const event = new CustomEvent("userLoggedIn", {
        detail: {
            name
        }
    });
    document.dispatchEvent(event);
}

document.addEventListener("userLoggedIn", (e) => {
    document.getElementById("welcome").innerText = `Welcome, ${e.detail.name}`;
})