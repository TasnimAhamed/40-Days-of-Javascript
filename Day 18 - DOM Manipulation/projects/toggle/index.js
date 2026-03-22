const toggleBtn = document.getElementById("toggleBtn");
const info = document.getElementById("myPara");

toggleBtn.addEventListener("click", function () {
    if (info.style.display === "none") {
        info.style.display = "block";
        toggleBtn.textContent = "Hide Paragraph";
    } else {
        info.style.display = "none";
        toggleBtn.textContent = "Show Paragraph";
    }
})

// We can do this using toggle class too.