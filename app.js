let num = [];

function getData(){

// Get the values from the form   

let description = document.getElementById('description-item').value;
let incomeType = document.getElementById('expensetype').value;
let amount = document.getElementById('amount').value;
let dispData = document.getElementById('balance');
// document.querySelector('form-submit').addEventListener('submit', function(event){
// event.preventDefault();
// })

let numAmount = parseInt(amount);

if(incomeType == "Expense"){
    num.push(-numAmount);
} else {
    num.push(numAmount);
}


// Show the balance

const reducer = (accumulator, currentValue) => accumulator + currentValue;
dispData.innerHTML = `Balance is: ${num.reduce(reducer)}`

// Displaying Data

var row = ""
row = `${row}<tr><td>${description}</td><td>${incomeType}</td><td>${amount}</td></tr>`;
document.getElementById('table-list').innerHTML += row;



}

