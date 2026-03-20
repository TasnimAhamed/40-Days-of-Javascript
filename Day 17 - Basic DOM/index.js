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


// Mini Project - HightLight a Text
function HighLightText() {
    console.log("Highlight a Text");
    const allParaElems = document.querySelectorAll(".info");
    
    allParaElems.forEach((paraElem) => {
        paraElem.style.backgroundColor = "black";
        paraElem.style.color = "white";
    })
}

// Mini Project -  2
function filterList() {
    let inputElem = document.getElementById("searchInput");
    let inputValue = inputElem.value;
    
    let listItems = document.querySelectorAll("#itemList li");
    console.log(listItems);

    listItems.forEach((listItem) => {
        if (listItem.textContent.toLowerCase().includes(inputValue.toLowerCase())) {
            listItem.style.display = "block";
        } else {
            listItem.style.display = "none";
        }
    })
}

// 1. Find the Most Frequent Word in a Paragram
const paraElem = document.getElementById("text");
const paraElemContent = paraElem.innerText;
console.log(paraElemContent);
const words = paraElemContent.split(" ");
console.log(words);   

const wordCount = {};
words.forEach((word) => {
    word = word.toLowerCase().replace(/\.+$/, '');;
    if (wordCount[word]) {
        wordCount[word]++;
    } 
    else {
        wordCount[word] = 1;
    }
})
console.log(wordCount);
let mxCount = 0;
let mxWord = "";
for (const key in wordCount) {
    if (wordCount[key] > mxCount) {
        mxCount = wordCount[key];
        mxWord = key;
    }
}
console.log(mxWord, mxCount);

const resultElem = document.getElementById("result");
resultElem.innerText = `${mxWord} - ${mxCount}`;

// 2. Zebra Pattern
const carsListItems = document.querySelectorAll("#cars li");
carsListItems.forEach((listItem, index) => {
    if (index % 2 === 0) {
        listItem.style.backgroundColor = "black";
        listItem.style.color = "white";
    } else {
        listItem.style.backgroundColor = "yellow";
        listItem.style.color = "black";
    }
})

// 3. Write different ways we can access DOM and what they returns
//     - getElementsByClassName, getElementsByTagName - return HTMLCollection
//     - querySelector, querySelectorAll - return NodeList

// 4. Find and Replace a Text
let findText = document.getElementById("findText");
let replaceText = document.getElementById("replaceText");
let textNotFound = document.getElementById("textNotFound");

function findAndReplace() {
    let findTextValue = findText.value;
    let replaceTextValue = replaceText.value;
    let paraElem = document.getElementById("text");
    if (paraElem.innerText.includes(findTextValue)) {
        // Learn RegExp
        const regex = new RegExp(findTextValue, "gi");
        paraElem.innerText = paraElem.innerText.replace(regex, replaceTextValue);
    } 
    else {
        textNotFound.innerText = "Text Not Found";
    }
}

// 5. Extract and Count Unique Links from a Page
const links = document.querySelectorAll("a");
// Learn Set
const linkCount = new Set();
links.forEach((link) => {
    linkCount.add(link.href);
})
console.log(linkCount.size);