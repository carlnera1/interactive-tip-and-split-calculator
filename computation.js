//Grabbing Elements

let billInput = document.getElementById('bill');
let tipInput = document.getElementById('tip');
let peopleInput = document.getElementById('people');
let calcBtn = document.getElementById('calc-btn');
let resultDisplay = document.getElementById('result');

let btn10pInput = document.getElementById('btn10p');
let btn15pInput = document.getElementById('btn15p');
let btn20pInput = document.getElementById('btn20p');

function tipCalculator(percent){
    let bill2 = Number(billInput.value);
    tipInput.value = bill2 * percent;
};

btn10p.addEventListener('click', function(){
    tipCalculator(0.1);
});

btn15p.addEventListener('click', function(){
    tipCalculator(0.15);
});

btn20p.addEventListener('click', function(){
    tipCalculator(0.2);
});

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