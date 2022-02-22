let smallValue = document.getElementById("num1");
let bigValue = document.getElementById("num2");
let buttonPal = document.getElementById("palindrome");
let buttonPer = document.getElementById("perfect");
let resultPal = document.getElementById("result_pal");
let resultPer = document.getElementById("result_per");

buttonPal.addEventListener("click", () => {
    
    for (let index = smallValue.value; index < bigValue.value; index++) {

        // if (index.toString() == index.toString().split("").reverse().join("")){
        if (String(index) == index.toString().split("").reverse().join("")){     //use of string(index) = index.toString()
            resultPal.value += index + "\n"
        }    
    }
    
})

buttonPer.addEventListener("click", () => {
    for (let indexx = smallValue.value; indexx < bigValue.value; indexx++){
        let myValue = 0
        for (let i = 1; i < indexx; i++){
            if (indexx%i == 0) myValue+=i    
        }
        if (myValue == indexx) resultPer.value += indexx + "\n"
        
    }
})

