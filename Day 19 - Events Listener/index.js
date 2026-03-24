// What is Event (Browers)?
    // -> An event is just a signal that something happend in the browser.

    function handleClick(greetings) {
        console.log(greetings);
    }

// Event Listener
const btnElem2 = document.getElementById("myBtn2");
btnElem2.onclick = function() {
    console.log("Button 2 clicked")
}

btnElem2.onclick = () => handleClick("Hola");

let counter = 0;
const handleCount = function() {
    ++counter;
    console.log(`Count: ${counter}`);
}
const greetMe = function() {
    console.log("Thank You!");
}
const countBtnElem = document.getElementById("countBtn");
countBtnElem.addEventListener("click", handleCount);
countBtnElem.addEventListener("click", greetMe);

countBtnElem.removeEventListener("click", handleCount);
// countBtnElem.removeEventListener("click", greetMe);

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Content Loaded");
});

// Event Object
const searchInputElem = document.getElementById("searchId");
function handleChange(event) {
    console.log(event);
    console.log("Event Target:", event.target);
    console.log("Event Type:", event.type);
    console.log("Event Current Target:", event.currentTarget);
    console.log("Event Bubbling:", event.bubbles);
    console.log("Event Cancelable:", event.cancelable);
    console.log("Event Default Prevented:", event.defaultPrevented);
}
searchInputElem.addEventListener("change", handleChange);


// Event Bubbling, Capturing and Delegation

// Bubbling
    const grandparentElem = document.getElementById("grandparent");
    const parentElem = document.getElementById("parent");
    const childElem = document.getElementById("child");

    childElem.addEventListener("click", function() {
        console.log("Child clicked");
    });
    parentElem.addEventListener("click", function() {
        console.log("Parent clicked");
    });
    grandparentElem.addEventListener("click", function() {
        console.log("Grandparent clicked");
    });


// Capturing
    childElem.addEventListener("click", function() {
        console.log("Captured -> Child clicked");
    }, true); // Capture Phase

    parentElem.addEventListener("click", function() {
        console.log("Captured -> Parent clicked");
    }, true); // Capture Phase

    grandparentElem.addEventListener("click", function() {
        console.log("Captured -> Grandparent clicked");
    }, true); // Capture Phase


// Event Delegation
    const itemListElem = document.getElementById("itemList");
    itemListElem.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            console.log(`You have clicked on ${event.target.textContent}`);
        }
    });

// Stop Bubbling -> Stop Propagation
    const fatherElem = document.getElementById("father");
    const sonElem = document.getElementById("son");

    fatherElem.addEventListener("click", function() {
        console.log("Father clicked");
    });

    sonElem.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log("Son clicked");
    });