const header = elementFromTemplate(`
    <header class="header" id="header">
        <div class="logo">Cheesy pizza</div>
        <nav class="nav-bar" id="navBar">
            <div class="home-nav" id="homeBtn">
                Home
            </div>
            <div class="menu-nav" id="menuBtn">
                Menu
            </div>
            <div class="contact-us-nav" id="contactUsBtn">
                Contact us
            </div>
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
}

export {elementFromTemplate, loadInitialPage}