import switchPages from "./switch-pages";

const header = elementFromTemplate(`
    <header class="header" id="header">
        <div id="logo" class="logo">Cheesy pizza</div>
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
        <div class="page-info"></div>
    </footer>
`)

function elementFromTemplate(html) {
    const template = document.createElement("template")

    template.innerHTML = html.trim()

    return template.content.firstElementChild
}

function loadInitialPage() {
    document.body.append(header, main, footer)

    switchPages(main, "home")
}

export {elementFromTemplate, loadInitialPage}