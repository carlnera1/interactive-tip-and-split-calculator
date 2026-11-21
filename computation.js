//Grabbing Elements

let billInput = document.getElementById('bill');
let tipInput = document.getElementById('tip');
let peopleInput = document.getElementById('people');
let calcBtn = document.getElementById('calc-btn');
let resultDisplay = document.getElementById('result');

calcBtn.addEventListener('click', function(){
    let bill = Number(billInput.value);
    let tipPercent = Number(tipInput.value);
    let people = Number(peopleInput.value);

    if(bill <= 0 || people <= 0){
        resultDisplay.textContent = "invalid input";
        return
    }

    let tipAmount = bill * (tipPercent / 100);
    let totalPerPerson = (bill + tipAmount) / people;

    resultDisplay.textContent = totalPerPerson.toFixed(2);
});