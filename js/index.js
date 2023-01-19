const red = document.querySelector(".red")
const yellow = document.querySelector(".yellow")
const green = document.querySelector(".green")

const redId = document.getElementById("red")
const yellowId = document.getElementById("yellow")
const greenId = document.getElementById("green")

function wait(delay){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, delay * 1000);
    })
}

function trafficLight() {
    console.clear()
    console.log("red");
    red.style.opacity = "0"
    green.style.opacity = "1"
    yellow.style.opacity = "1"

    redId.style.opacity = "0"
    greenId.style.opacity = "1"
    yellowId.style.opacity = "1"
    wait(8)
    .then(()=>{
        console.clear()
        console.log("red");
        red.style.opacity = "0"
        green.style.opacity = "1"
        yellow.style.opacity = "1"
        
        redId.style.opacity = "0"
        greenId.style.opacity = "1"
        yellowId.style.opacity = "1"
    wait(3)
    })
    .then(()=>{
        console.log("yellow");
        red.style.opacity = "0"
        yellow.style.opacity = "0"

        redId.style.opacity = "0"
        yellowId.style.opacity = "0"
        return wait(1.5)
    })
    .then(()=>{
        console.log("green");
        yellow.style.opacity = "1"
        green.style.opacity = "0"
        red.style.opacity = "1"

        yellowId.style.opacity = "1"
        greenId.style.opacity = "0"
        redId.style.opacity = "1"
        return wait(8)
    })
    .then(()=>{
        console.log("yellow");
        yellow.style.opacity = "0"
        green.style.opacity = "1"

        yellowId.style.opacity = "0"
        greenId.style.opacity = "1"
        return wait(2)
    })
    .then(()=>{
        console.log("red");
        red.style.opacity = "1"
        yellow.style.opacity = "0"

        redId.style.opacity = "1"
        yellowId.style.opacity = "0"
        trafficLight()
    })
}

trafficLight()
