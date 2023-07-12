import {elementFromTemplate} from "./initial-load";
import homePizza from "./assets/images/freshly-baked-pizza.jpg"
import ovenPizza from "./assets/images/chef-putting-pizzain-oven.jpg"
import itemImgOne from "./assets/images/item-0-img.png"
import itemImgTwo from "./assets/images/item-1-img.png"
import itemImgThree from "./assets/images/item-2-img.png"
import itemImgFour from "./assets/images/item-3-img.png"

const menuImages = [ImageFactory(itemImgOne, `item-img-0`), ImageFactory(itemImgTwo, `item-img-1`), ImageFactory(itemImgThree, `item-img-2`), ImageFactory(itemImgFour, `item-img-3`)]
const menuPizzaNames = ["Sausage Extra Cheesy Pizza", "Juicy Ham Pizza", "Classic Tomato Pizza", "Tomato and Cheese Pizza"]

function ImageFactory(src, className) {
    const img = new Image()
    img.src = src
    img.className = className

    return img
}


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
                    <div class="about-sec1">
                        <div class="about-content-txt">
                        With new interesting flavours and good prices 
                        that is the only place where you can have a combination 
                        of good flavour and price!
                        </div>
                    </div>
                </div>
            </div>
        `))

        mainEl.children[0].append(ImageFactory(homePizza, "homeImgPizza"))
        mainEl.children[1].children[0].append(ImageFactory(ovenPizza, "ovenPizza"))


        mainEl.className = page
    } else if(page === "menu") {
        for(let i = 0; i < 4; i++) {
            mainEl.append(elementFromTemplate(`
            <div class=" item-${i}"></div>
            `))
            mainEl.children[i].append(elementFromTemplate(`
            <div class="item-${i}-txt">
                ${menuPizzaNames[i]}
            </div>
            `))
            mainEl.children[i].append(menuImages[i])
        }

        mainEl.className = ""
        mainEl.className = page
    }else if (page === "contact") {
        mainEl.append(elementFromTemplate(`
        <div>
            Contact Us
        </div>
        `))

        mainEl.append(elementFromTemplate(`
        <div>
            Phone number: 345890374
        </div>
        `))

        mainEl.className = ""
        mainEl.className = page
    }  
}