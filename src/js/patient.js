// !Selector
const patientItems=document.querySelectorAll(".patient-item")
// ! Event Listener
patientItems.forEach(patientItem=>patientItem.addEventListener("click",(event)=>{
    event.preventDefault()
    patientItems.forEach(patientItem=>patientItem.classList.remove("active"))
    patientItem.classList.add("active")
}))
