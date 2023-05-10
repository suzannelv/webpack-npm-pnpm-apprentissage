import "../css/div_style.css"
import "../css/title_style.less"

// créer un élément div
const divEl = document.createElement("div")
divEl.textContent = "Hello World"
divEl.classList.add("content")

document.body.append(divEl)

// créer h2 
const titleEl = document.createElement("h2")
titleEl.textContent = "bonjour"
titleEl.classList.add("title")
document.body.append(titleEl)