const header = elementFromTemplate(`
    <header class="header" id="header">
        <div class="logo">Cheesy pizza</div>
        <nav class="nav-bar" id="navBar">
            <div class="home" id="homeBtn">
                Home
            </div>
            <div class="menu" id="menuBtn">
                Menu
            </div>
            <div class="contact-us" id="contactUsBtn">
                Contact us
            </div>
        </nav>
    </header>
`)
const main = elementFromTemplate(`
    <main class="main">
        <div class="presentation-container" id="presentationContainerEl"></div>
        <img src="" alt="">
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

export default function() {
    document.body.append(header, main, footer)
}