const faqItemWrapperElem = document.querySelector(".faq-item__wrapper");
console.log(faqItemWrapperElem);

faqItemWrapperElem.addEventListener("click", (e) => {
    const curr = e.target.closest(".faq-item");
    const isOpen = curr.classList.contains("is-open");
    
    document.querySelectorAll(".faq-item").forEach((item)=>{
        item.classList.remove("is-open");
    });

    if(!isOpen){
        curr.classList.add("is-open");
    }
})
