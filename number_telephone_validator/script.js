const checkBtn = document.getElementById("check-btn");  
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", checkNumber);    
clearBtn.addEventListener("click", clearInput);
userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkNumber();
    }
})  


function checkNumber() {
    const number = userInput.value;
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (!number) {
        alert("Please provide a phone number");
        return;
    }

    if (regex.test(number)) {   
        resultsDiv.innerHTML = `Valid US number: ${number}`;
    } else {
        resultsDiv.innerHTML = `Invalid US number: ${number}`;
    }
}   

function clearInput() {
    userInput.value = "";
    resultsDiv.innerHTML = "";
}
