// Clock functionality

let hr = document.querySelector("section .hr");
let min = document.querySelector("section .min");
let sec = document.querySelector("section #sec");

setInterval(() => {
    hr.style.transform = `rotateZ(${new Date().getHours() * 30}deg)`
    min.style.transform = `rotateZ(${new Date().getMinutes() * 6}deg)`
    sec.style.transform = `rotateZ(${new Date().getSeconds() * 6}deg)`
}, 1000)


// Mobile menu functionality

function toggleMenu() {
    document.querySelector("aside").classList.toggle("active")
}


// Classlist changes selector
const remove = (el, option) => {
    el.classList.remove(option)
}
const add = (el, option) => {
    el.classList.add(option)
}


// Color theme functionality

let colormode = localStorage.getItem("colormode")
let colorButtons = document.querySelectorAll("section aside ul.themes li")

for(let i=0; i<colorButtons.length; i++) {
    colorButtons[i].addEventListener("click", () => {
        if(i === 0) {
            remove(colorButtons[1], "active")
            localStorage.setItem("colormode", "light")
            remove(document.body, "dark")
        }
        else {
            remove(colorButtons[0], "active")
            localStorage.setItem("colormode", "dark")
            add(document.body, "dark")
        }
        colorButtons[i].classList.add("active")
    })
}
if(colormode === "dark") {
    add(document.body, "dark")
    remove(colorButtons[0], "active")
    add(colorButtons[1], "active")
}



// Skins functionality

let skin = localStorage.getItem("skin")
let skinButtons = document.querySelectorAll("section aside ul.skins li")
let skinContainer = document.querySelector("section article")

for(let i=0; i<skinButtons.length; i++) {
    skinButtons[i].addEventListener("click", () => {
        for(let j=0; j<skinButtons.length; j++) {
            remove(skinButtons[j], "active")
        }
        add(skinButtons[i], "active")
        skinContainer.setAttribute("data-skin", skinButtons[i].getAttribute("data-skin"))
        localStorage.setItem("skin", skinButtons[i].getAttribute("data-skin"))
    })
}

skinContainer.setAttribute("data-skin", skin)
for(let i=0; i<skinButtons.length; i++) {
    remove(skinButtons[i], "active")
    if(skinButtons[i].getAttribute("data-skin") === skin) {
        add(skinButtons[i], "active")
    }
}