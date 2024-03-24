// !Selector
const title=document.querySelector(".title")
// ! TypeWriter
let typewriter = new Typewriter(title, {
    loop: false
});

typewriter.typeString('به وبسایت مرکز تحقیقات ام اس دانشگاه ')
.typeString('<span class=" text-Teal-500">علوم پزشکی تهران </span>')
.typeString('خوش آمدید')
    .start();
// !Functions

// !Event Listener

