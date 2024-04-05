// !Selector
const hamburgerButton = document.querySelector("#hamburger-button");
const sidebar = document.querySelector("#sidebar");
// ! Event Listener
document.addEventListener("click", (e) => {
  if (e.target.id === hamburgerButton.id) sidebar.classList.toggle("isOpen");
  else if (
    e.target.parentElement.parentElement.id === sidebar.id ||
    e.target.parentElement.parentElement.parentElement.id === sidebar.id
  )
    sidebar.classList.add("isOpen");
  else if (e.target.id !== sidebar.id) sidebar.classList.remove("isOpen");
});
