// ! Selector
const showPasswordButtons = document.querySelectorAll(".show-password");
const passwordInputs = document.querySelectorAll(".check-password");
const form = document.querySelector("form");

// !Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
showPasswordButtons.forEach((showPasswordButton) => {
  showPasswordButton.addEventListener("click", () =>
    togglePassword(showPasswordButton.id, showPasswordButton)
  );
});

// ! Function
function togglePassword(id, showPasswordButton) {
  passwordInputs.forEach((showPassword) => {
    if (showPassword.id === `${id}-password`) {

      if (showPassword.type === "password") {
        showPassword.type = "text";
        showPasswordButton.innerHTML =
          '<i class="fa-solid fa-eye-slash md:text-xl text-Teal-500"></i>';
      } else {
        showPassword.type = "password";
        showPasswordButton.innerHTML =
          '<i class="fa-solid fa-eye md:text-xl text-Teal-500"></i>';
      }
    }
  });
}

