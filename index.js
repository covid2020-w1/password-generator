/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//so what we want to do is grab the value from the input field when th ebutton is pressed and have the value appear in some template literals and some mutated version of the value as the conversion. in addition, you have to either create the title-description element where the conversion will appear with createElement or change the textContent

let cardDescriptionEls = document.querySelectorAll(".card-description")
const input = document.getElementById("input");
const btn = document.getElementById("btn");


function meters2feet(quant){
    return (quant * 3.281).toFixed(2)
}

function feet2meters(quant){
    return (quant / 3.281).toFixed(2)
}

function liters2gallons(quant){
    return (quant * 0.264).toFixed(2)
}

function gallons2liters(quant){
    return (quant / 0.264).toFixed(2)
}

function kg2lbs(quant){
    return (quant * 2.204).toFixed(2)
}

function lbs2kg(quant){
    return (quant / 2.204).toFixed(2)
}

btn.addEventListener("click", function (){
    
    const btn = document.getElementById("btn");
    const cardDescriptions = [
    `${input.value} meters = ${meters2feet(input.value)} feet | ${input.value} feet = ${feet2meters(input.value)} meters`, 
    `${input.value} liters = ${liters2gallons(input.value)} gallons | ${input.value} gallons = ${gallons2liters(input.value)} liters`,
    `${input.value} kilos = ${kg2lbs(input.value)} pounds | ${input.value} pounds = ${lbs2kg(input.value)} kilos`
]
    for(let i=0; i<cardDescriptionEls.length; i++){
        cardDescriptionEls[i].textContent = cardDescriptions[i]
    }
    
})

console.log(descList)