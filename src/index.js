import {loadInitialPage} from "./initial-load"
import switchPages from "./switch-pages"

import "./styles/general-styles.css"
import "./styles/header.css"
import "./styles/home.css"
import "./styles/menu.css"
import "./styles/contact-us.css"
import "./styles/footer.css"
// First page load
loadInitialPage()


// Variables
const homeNavBtn = document.getElementById("homeBtn")
const menuNavBtn = document.getElementById("menuBtn")
const contactNavBtn = document.getElementById("contactUsBtn")
const mainSection = document.getElementById("mainSection")
let exploreMenuBtn = document.getElementById("exploreMenuBtn")

// Event listeners

homeNavBtn.addEventListener("click", () => {
    switchPages(mainSection, "home")

    exploreMenuBtn = document.getElementById("exploreMenuBtn")
    exploreMenuBtn.addEventListener("click", () => {
        switchPages(mainSection, "menu")
    })
})

menuNavBtn.addEventListener("click", () => {
    switchPages(mainSection, "menu")
})
exploreMenuBtn.addEventListener("click", () => {
    switchPages(mainSection, "menu")
    console.log(exploreMenuBtn)
})

contactNavBtn.addEventListener("click", () => {
    switchPages(mainSection, "contact")
})