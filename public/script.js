
const menu_btn = document.querySelector("#menu-btn")
const menu = document.querySelector("#menu")

menu_btn.addEventListener("click", () =>{
    menu_btn.classList.toggle("open")
    menu.classList.toggle("flex")
    menu.classList.toggle("hidden")
})