import {elementFromTemplate, loadInitialPage} from "./initial-load";
import switchPages from "./switch-pages";
import "./styles/general-styles.css"
import homeImg from "./assets/images/freshly-baked-pizza.jpg"

import "./styles/header.css"
import "./styles/home.css"

loadInitialPage()
switchPages(elementFromTemplate(`
    <div class="presentation-container" id="presentationContainerEl">
        Try the pizza of your life!
    </div>
`), "home")
