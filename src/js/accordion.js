const accordionHeaders= document.querySelector(".header");
const accordionContents = document.querySelector(".content");

accordionHeaders.forEach(accordionHeader => {
    accordionHeader.addEvenListener("click",()=>{
        
    })
});

function closeAllTab(){
    accordionContents.forEach(accordionContent=>{
        accordionContent.classList.add("closeAccordion")
    })
}