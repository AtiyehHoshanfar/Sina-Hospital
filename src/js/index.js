// ? TYPE WRITER
// !Selector
const title = document.querySelector(".title");

let typewriter = new Typewriter(title, {
  loop: false,
});

typewriter
  .typeString("به وبسایت مرکز تحقیقات ام اس دانشگاه ")
  .typeString('<span class=" text-Teal-500">علوم پزشکی تهران </span>')
  .typeString("خوش آمدید")
  .start();

// ? HAMBURGER MENU
// !Selector
const hamburgerButton = document.querySelector("#hamburger-button");
const sidebar = document.querySelector("#sidebar");
// ! Event Listener
document.addEventListener("click", (e) => {
  if (e.target.id === hamburgerButton.id) sidebar.classList.toggle("isOpen");
  else if (
    e.target.parentElement.id === sidebar.id ||
    e.target.parentElement.parentElement.id === sidebar.id
  )
    sidebar.classList.add("isOpen");
  else if (e.target.id !== sidebar.id) sidebar.classList.remove("isOpen");
});
