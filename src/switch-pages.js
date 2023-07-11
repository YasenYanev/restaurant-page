import {elementFromTemplate} from "./initial-load";
import homePizza from "./assets/images/freshly-baked-pizza.jpg"
import ovenPizza from "./assets/images/chef-putting-pizzain-oven.jpg"

export default function(mainEl, page) {
    mainEl.innerHTML = ""


    if (page === "home") {
        mainEl.append(elementFromTemplate(`
        <div id="presentationContainerEl" class="presentation-container">
            <div class="presentation-content-wrapper" >
                <div class="presentation-content" >
                    <div class="presentation-content-txt">The Best Pizza in Town!</div>
                    <button id="exploreMenuBtn" class="explore-menu-btn">Explore menu</button>
                </div>
            </div>
        </div>
        `))
        mainEl.append(elementFromTemplate(`
            <div id="aboutContainerEl" class="about-container"> 
                <div id="aboutContent" class="about-content">
                    <div>
                        The best pizza in town is waiting for you. 
                        With new interesting flavours and good prices 
                        this is the only place where you can have a combination 
                        of good flavour and price!
                    </div>
                </div>
            </div>
        `))

        const homePizzaImg = new Image()
        homePizzaImg.src = homePizza
        homePizzaImg.className = "homeImgPizza"
        mainEl.children[0].append(homePizzaImg)

        const aboutImage = new Image()
        aboutImage.src = ovenPizza
        aboutImage.className = "ovenPizza"
        mainEl.children[1].children[0].append(aboutImage)

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