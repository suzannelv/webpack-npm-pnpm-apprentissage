import "../css/div_style.css"
import "../css/title_style.less"
import "../css/bg_style.css"

// import images, on peut donner soi-même le nom de ce module importé
import avatarImg from "../img/avatar1.png"

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

// créer image élément

const imgEl = document.createElement("img")
imgEl.src = avatarImg
document.body.append(imgEl)

// 创建div元素，设置背景
const divBgEl = document.createElement("div")
divBgEl.classList.add("img-bg")
document.body.append(divBgEl)

