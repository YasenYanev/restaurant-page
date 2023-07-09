import homePizza from "./assets/images/freshly-baked-pizza.jpg"

const mainSection = document.getElementById("mainSection")

export default function(html, page) {
    mainSection.innerHTML = html
    mainSection.className = ""
    mainSection.className = page
    if (page == "home") {
        const homePizzaImg = new Image()
        homePizzaImg.src = homePizza
        mainSection.append(homePizzaImg)
    }
    console.log(mainSection)
}