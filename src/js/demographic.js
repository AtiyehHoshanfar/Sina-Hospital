// ?Modal
// ! Selectors
const backdrop = document.querySelector("#backdrop");
const closeModalBtn = document.querySelector("#close-modal");
const submitDemographicInformation = document.querySelector("#submit-demographic-information");
const modal = document.querySelector("#modal");

// !Functions
function closeModal() {
  modal.classList.add("invisible");
}
function openModal() {
  modal.classList.remove("invisible");
}
// ! Event Listener
submitDemographicInformation.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

// ? Calendar
jalaliDatepicker.startWatch({
    minDate: "attr",
    maxDate: "attr"
  }); 
