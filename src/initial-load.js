import switchPages from "./switch-pages";
import gitLogo from "./assets/icons/github-mark-white.png"

const header = elementFromTemplate(`
    <header class="header" id="header">
        <div id="logo" class="logo">Pepi Pizza</div>
        <nav class="nav-bar" id="navBar">
            <button class="home-nav" id="homeBtn">
                Home
            </button>
            <button class="menu-nav" id="menuBtn">
                Menu
            </button>
            <button class="contact-us-nav" id="contactUsBtn">
                Contact us
            </button>
        </nav>
    </header>
`)
const main = elementFromTemplate(`
    <main id="mainSection">
    
    </main>
`)
const footer = elementFromTemplate(`
    <footer class="footer" id="footer">
        <div class="footer-info">
            <div class="footer-txt">Developed by YasenYanev</div> 
            <a href="https://github.com/YasenYanev"></a>
        </div>
    </footer>
`)

const footerImg = new Image()
footerImg.src = gitLogo
footerImg.className = "gitLogo"

function elementFromTemplate(html) {
    const template = document.createElement("template")

    template.innerHTML = html.trim()

    return template.content.firstElementChild
}

function loadInitialPage() {
    document.body.append(header, main, footer)

    switchPages(main, "home")

    footer.children[0].children[1].append(footerImg)
}

export {elementFromTemplate, loadInitialPage}