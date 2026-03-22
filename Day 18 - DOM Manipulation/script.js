// Todaysssss tasssskkk.....

// Creating Elements
{
    const pElem = document.createElement("p");
    pElem.innerText = "This is a text added dynamically"
    document.body.appendChild(pElem);
    // console.log(pElem);
}
// Inserting Elements
{
    const span = document.createElement("span");
    span.innerText = "This is a span added dynamically"
    const hElem = document.querySelector("h1");
    const pElem = hElem.nextElementSibling;
    document.body.insertBefore(span, pElem)

    // inserting After a element
    console.log(hElem.nextElementSibling)
}    
// Modifying Content
{
    const hElem = document.querySelector("h1");
    const pElem = document.querySelector("p");
    hElem.innerText = "This text is modify using Javascript";
    pElem.innerHTML = "This is a <strong>strong</strong> text added dynamically"
}
// Removing Elements
{
    const listElem = document.getElementById("myList");
    const itemToRemove = listElem.children[0];
    listElem.removeChild(itemToRemove);

    // listElem.innerHTML = "";
    listElem.replaceChildren()
}
// Read, Write, and Remove Attributes

    const imgElem = document.querySelector("img");
    console.log(imgElem.getAttribute("src"))
    imgElem.setAttribute("src", "banner.png");
    imgElem.setAttribute("alt", "New Banner Image")
    console.log(imgElem.hasAttribute("height"))

// Traversing/Navigating DOM
{
    // parentElement and parentNode

    const textElem = document.getElementById("text");
    console.log("Parent Element: ", textElem.parentElement)
    console.log("Paren Node: ", textElem.parentNode)

    // childElement and childNodes
    console.log("Child Element: ", textElem.children)
    console.log("Child Nodes: ", textElem.childNodes)

    const mainElem = document.getElementById("mainId");

    console.log("First Child: ", mainElem.firstChild)
    console.log("First Element Child: ", mainElem.firstElementChild)    
}
// Manipulating Styles
{
    const pElem = document.getElementById("para");
    console.log(pElem.getAttribute("style"));
    pElem.style.backgroundColor = "Blue"
}
// Manipulating Classes
{
    const mainElem = document.getElementById("mainId");
    // console.log(mainElem.className)
    // mainElem.className = "secondary-class"

    const mainElemClassList = mainElem.classList;
    mainElemClassList.replace("main-class", "secondary-class");
    
}
// Controlling Visibilities
{
    const mainDivElem = document.getElementById("mainId");
    // mainDivElem.style.display = "none";
    mainDivElem.style.margin = "20px 0";
    mainDivElem.style.display = "flex";
}
// Build Project(s)
// Tasks
