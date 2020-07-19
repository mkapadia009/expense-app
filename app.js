let num = [];
let dispData = document.getElementById('balance');
const reducer = (accumulator, currentValue) => accumulator + currentValue;




function getData() {

    // Get the values from the form   

    let description = document.getElementById('description-item').value;
    let amount = document.getElementById('amount').value;
    let incomeType = document.getElementById('expensetype').value;



    // document.querySelector('form-submit').addEventListener('submit', function(event){
    // event.preventDefault();
    // })

    if (description === null || description === "") return;
    if (amount <= 0) return;



    let numAmount = parseInt(amount);

    if (incomeType == "Expense") {
        num.push(-numAmount);
    } else {
        num.push(numAmount);
    }


    // Show the balance

    dispData.innerHTML = `Balance is: ${num.reduce(reducer)}`

    // Displaying Data

    var row = ""
    row = `${row}<tr><td>${description}</td><td>${incomeType}</td><td id="values">${amount}</td><td><button onclick="deleteValue()">Delete</button></td></tr>`;
    document.getElementById('table-list').innerHTML += row;

}

function deleteValue() {
    // THIS LINE OF CODE IS USED TO TARGET THE PARENT NODE IN WHICH THE CHILD NODE EVENT IS TAKING PLACE

    var td = event.target.parentNode;
    var removeAmount = parseInt(td.previousSibling.innerHTML);
    var typeoFIncome = (td.previousSibling.previousSibling.innerHTML);
    var table = document.getElementById('table-list');

    if (typeoFIncome === "Expense") {
        dispData.innerHTML = `Balance is: ${num.reduce(reducer)+removeAmount}`
    } else {
        dispData.innerHTML = `Balance is: ${num.reduce(reducer)-removeAmount}`
    }

    if (table.rows.length === 1) {
        dispData.innerHTML = `Balance is: ${num = []}`
    } else {
        console.log("Keep Working it!")
    }



    // THIS LINE OF CODE IS USED TO GET THE TABLE ROW AS THE PARENT OF TD IS TR
    var tr = td.parentNode; // the row to be removed

    // THIS LINE OF CODE PICKS THE PARENT NODE OF THE TR WHICH IS THE TBODY AND THEN PICKS THE CHILD WHICH IS TR AND REMOVES IT.
    tr.parentNode.removeChild(tr);

}