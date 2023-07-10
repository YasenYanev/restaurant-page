import {elementFromTemplate} from "./initial-load";
import homePizza from "./assets/images/freshly-baked-pizza.jpg"

export default function(mainEl, page) {
    mainEl.innerHTML = ""


    if (page === "home") {
        mainEl.append(elementFromTemplate(`
        <div class="presentation-container" id="presentationContainerEl">
            Try the pizza of your life!
        </div>
        `))

        const homePizzaImg = new Image()
        homePizzaImg.src = homePizza
        homePizzaImg.className = "homeImgPizza"
        mainEl.append(homePizzaImg)

        mainEl.className = ""
        mainEl.className = page
    } else if(page === "menu") {
        for(let i = 1; i < 5; i++) {
            mainEl.append(elementFromTemplate(`
            <div class="Item ${i}"> </div>
            `))
        }

        mainEl.className = ""
        mainEl.className = page
    }else if (page === "contact") {
        mainEl.append(elementFromTemplate(`
        <div class="contact-us" id="contactUs">
            Contact us!
        </div>
        `))

        mainEl.className = ""
        mainEl.className = page
    }  
}