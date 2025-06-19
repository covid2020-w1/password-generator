const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//ok, so we want

let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")

function genPass(){
    pass1.textContent = "";
    pass2.textContent = "";
    for(let i=0; i < 15; i++){
        pass1.textContent += characters[ranNumInRange()]
        pass2.textContent += characters[ranNumInRange()]
        }
}

function ranNumInRange(){
    return Math.floor(Math.random()*characters.length)
}


//maybe 

//ok now i want it to spit out a string of 15 characters. i guess i can write a for loop with step size of 15. it would cycle through a random item in the array (meaning i need to make a random num function) and append it to the array, either with += or push method. im still missing something tho... not push bc i would need to create a new array and that seems to o complex

