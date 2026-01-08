// DOM Types
    console.log(document);
    console.log(document.body);
    console.log(document.head);


// Accessing DOM: Element(tag, attribute, ID, Class)

// ID Selector
let headingElem = document.getElementById("heading");
console.log(headingElem);

// Class Selector
let infoElems = document.getElementsByClassName("info");
console.log(infoElems);
console.log(infoElems[0], infoElems[1]);

[...infoElems].forEach((elem, index) => {
    console.log(index, elem);
})

// Tag Selector
let tagElems = document.getElementsByTagName("p");
console.log(tagElems);

// Query Selector
let querySelector = document.querySelector(".info");
console.log(querySelector);

let querySelectorAll = document.querySelectorAll(".info");
console.log(querySelectorAll);

// Heading using querySelector
let hElem = document.querySelector("#heading");
console.log(hElem);
