// const inputDatas=document.querySelectorAll("input")
const userInputs = document.querySelectorAll(".user-input");
const userInputFirstname = document.querySelector("#user-input-firstname");
const userInputLastname = document.querySelector("#user-input-lastname");
const userInputFathersname = document.querySelector("#user-input-fathersname");
const userInputId = document.querySelector("#user-input-id");
const userInputMobile=document.querySelector("#user-input-mobile")
const userInputPhone=document.querySelector("#user-input-phone")
function checkValidationText(userInput, type) {
  let inputElem = userInput.querySelector("input");
  let message = userInput.querySelector("span");
  inputElem.addEventListener("input", (e) => {
    const pattern = /^[\u0600-\u06CC\s]{3,24}$/g;
    const ENpattern = /^[A-Za-z0-9]{3,24}$/g;
    if (ENpattern.test(inputElem.value)) {
      message.innerHTML = "لطفا از حروف الفبای فارسی استفاده کنید";
    } else if (pattern.test(inputElem.value)) {
      userInput.classList.remove("invalid-data");
    } else if (!pattern.test(inputElem.value)) {
      userInput.classList.add("invalid-data");
      message.innerHTML = `لطفا ${type}  خود را به درستی وارد کنید`;
    }
  });
}

function checkValidationNumber(userInput) {
  let inputElem = userInput.querySelector("input");
  let message = userInput.querySelector("span");
  inputElem.addEventListener("input", (e) => {
    if ( inputElem.value.length>inputElem.maxlength) {
        console.log("test")
      message.innerHTML = "تعداد کاراکتر بیش از حد مجاز است";
      userInput.classList.add("invalid-data");
    } else if (inputElem.value.length < 10) {
      message.innerHTML = "تعداد کاراکتر کمتر از حد مجاز است";
      userInput.classList.add("invalid-data");
    } else {
      userInput.classList.remove("invalid-data");
    }
  });
}

checkValidationText(userInputFirstname, "نام");
checkValidationText(userInputLastname, "نام خانوادگی");
checkValidationText(userInputFathersname, "نام پدر");
checkValidationNumber(userInputId);
checkValidationNumber(userInputMobile);
checkValidationNumber(userInputPhone);

