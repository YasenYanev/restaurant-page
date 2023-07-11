import {loadInitialPage} from "./initial-load"
import switchPages from "./switch-pages"

import "./styles/general-styles.css"
import "./styles/header.css"
import "./styles/home.css"
import "./styles/footer.css"
// First page load
loadInitialPage()


// Constants
const logo = document.getElementById("logo")
const homeNavBtn = document.getElementById("homeBtn")
const menuNavBtn = document.getElementById("menuBtn")
const contactNavBtn = document.getElementById("contactUsBtn")
const mainSection = document.getElementById("mainSection")
const secondSectionContent = document.getElementById("aboutContainerEl")
const exploreMenuBtn = document.getElementById("exploreMenuBtn")
// Event listeners

//Buttons leading to homepage
logo.addEventListener("click", () => {
    switchPages(mainSection, "home")
})
homeNavBtn.addEventListener("click", () => {
    switchPages(mainSection, "home")
})

//Buttons leading to menu page
menuNavBtn.addEventListener("click", () => {
    switchPages(mainSection, "menu")
})
exploreMenuBtn.addEventListener("click", () => {
    switchPages(mainSection, "menu")
    console.log(exploreMenuBtn)
})

//Buttons leading to contact us page
contactNavBtn.addEventListener("click", () => {
    switchPages(mainSection, "contact")
})