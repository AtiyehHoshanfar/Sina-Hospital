// ? SHOW/HIDE PASSWORD
// !Selector
const showPassword = document.querySelector("#show-password");
const password = document.querySelector("#password");
const form =document.querySelector("form")
// ! Event Listener
showPassword.addEventListener("click", togglePassword);
// ! Function
function togglePassword() {
  showPassword.innerHTML = "";
  if (password.type === "password") {
    password.type = "text";
    showPassword.innerHTML =
      '<i class="fa-solid fa-eye-slash md:text-xl text-Teal-500"></i>';
  } else {
    password.type = "password";
    showPassword.innerHTML =
      '<i class="fa-solid fa-eye md:text-xl text-Teal-500"></i>';
  }
}

form.addEventListener("submit",(e)=>{
e.preventDefault()
})