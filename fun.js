const home = document.getElementById("uno")
const destination = document.getElementById("dos")
const crew = document.getElementById("tres")
const technology = document.getElementById("cuatro")

const botonH = document.getElementById("home")
const botonD = document.getElementById("destination")
const botonC = document.getElementById("crew")
const botonT = document.getElementById("technology")

window.addEventListener("load", function(){
    home.style.display = "flex"
    destination.style.display = "none"
    crew.style.display = "none"
    technology.style.display = "none"
})

botonH.addEventListener("click", function() {
    home.style.display = "flex"
    destination.style.display = "none"
    crew.style.display = "none"
    technology.style.display = "none"
})

botonD.addEventListener("click", function() {
    home.style.display = "none"
    destination.style.display = "flex"
    crew.style.display = "none"
    technology.style.display = "none"

    moon.style.display = "flex"
    mars.style.display = "none"
    europa.style.display = "none"
    titan.style.display = "none"
})

botonC.addEventListener("click", function() {
    home.style.display = "none"
    destination.style.display = "none"
    crew.style.display = "flex"
    technology.style.display = "none"
})

botonT.addEventListener("click", function() {
    home.style.display = "none"
    destination.style.display = "none"
    crew.style.display = "none"
    technology.style.display = "flex"

    terminology.style.display = "flex"
    capsule.style.display = "none"
    port.style.display = "none"
})

const moon = document.getElementById("dos_M")
const mars = document.getElementById("dos_Ma")
const europa = document.getElementById("dos_E")
const titan = document.getElementById("dos_T")


const botonMo = document.getElementById("moon")
const botonMa = document.getElementById("mars")
const botonEu = document.getElementById("europa")
const botonTi = document.getElementById("titan")

botonMo.addEventListener("click", function() {
    moon.style.display = "flex"
    mars.style.display = "none"
    europa.style.display = "none"
    titan.style.display = "none"
})

botonMa.addEventListener("click", function() {
    moon.style.display = "none"
    mars.style.display = "flex"
    europa.style.display = "none"
    titan.style.display = "none"
})

botonEu.addEventListener("click", function() {
    moon.style.display = "none"
    mars.style.display = "none"
    europa.style.display = "flex"
    titan.style.display = "none"
})

botonTi.addEventListener("click", function() {
    moon.style.display = "none"
    mars.style.display = "none"
    europa.style.display = "none"
    titan.style.display = "flex"
})

const terminology = document.getElementById("terminology")
const capsule = document.getElementById("capsule")
const port = document.getElementById("port")

const boton1 = document.getElementById("bnt-1")
const boton2 = document.getElementById("bnt-2")
const boton3 = document.getElementById("bnt-3")

boton1.addEventListener("click", function(){
    terminology.style.display = "flex"
    capsule.style.display = "none"
    port.style.display = "none"
})

boton2.addEventListener("click", function(){
    terminology.style.display = "none"
    capsule.style.display = "flex"
    port.style.display = "none"
})

boton3.addEventListener("click", function(){
    terminology.style.display = "none"
    capsule.style.display = "none"
    port.style.display = "flex"
})