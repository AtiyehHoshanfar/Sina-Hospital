
const accordion={
    openId:null
}
const tabs=document.querySelectorAll(".tab")
tabs.forEach(tab=>tab.addEventListener("click",(e)=>{
    accordion.openId=tab.dataset.id

    tabs.forEach(tab=>{
        console.log(tab)
        if(tab.dataset.id===accordion.openId){
            tab.classList.remove("close")
            tab.classList.add("open")       
        }
        else{
            tab.classList.remove("open")
            tab.classList.add("close")

        }
    }

    )
}))

