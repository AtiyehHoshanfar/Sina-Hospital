const contents=document.querySelectorAll(".content")
const tabs=document.querySelectorAll(".tab")
tabs.forEach(tab=>tab.addEventListener("click",(e)=>{
    closeAllTabs()
    const content=tab.querySelector(".content")
            tab.classList.remove("close")
            tab.classList.add("open")    
    content.style.height=content.scrollHeight+"px"
}))


function closeAllTabs(){
contents.forEach(content=>{
    content.style.height="0px"})
    tabs.forEach(tab=>{
            tab.classList.remove("open")
            tab.classList.add("close")
    })
    
}