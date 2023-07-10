import {loadInitialPage} from "./initial-load";
import switchPages from "./switch-pages";

import "./styles/general-styles.css"
import "./styles/header.css"
import "./styles/home.css"

// First page load
loadInitialPage()
switchPages(document.getElementById("mainSection"), "home")

// Constants
const mainSection = document.getElementById("mainSection")
const homeNavBtn = document.getElementById("homeBtn")
const menuNavBtn = document.getElementById("menuBtn")
const contactNavBtn = document.getElementById("contactUsBtn")

// Event listeners
homeNavBtn.addEventListener("click", () => {
    switchPages(mainSection, "home")
})
menuNavBtn.addEventListener("click", () => {
    switchPages(mainSection, "menu")
})
contactNavBtn.addEventListener("click", () => {
    switchPages(mainSection, "contact")
})