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
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/im;

    if (!number) {
        alert("please provide a phone number")
    } else if (regex.test(number)) {
        resultsDiv.innerHTML = `Valid US number: ${number}`
    } else {
        resultsDiv.innerHTML = `Invalid US number: ${number}`
    }
}   

function clearInput() {
    userInput.value = "";
    resultsDiv.innerHTML = "";
}
