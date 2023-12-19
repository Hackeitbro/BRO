
function addRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(table.rows.length);

    for (var i = 0; i < 9; i++) {
      var cell = row.insertCell(i);
      var span = document.createElement("span");
      span.id = "cell-" + table.rows.length + "-" + i;
      span.contentEditable = true;
      cell.appendChild(span);
    }
  }

  function myfun(paravalue){
    var backup = document.body.innerHTML;
     var divcontent = document.getElementById(paravalue).innerHTML;
    document.body.innerHTML = divcontent;
     window.print();
     document.body.innerHTML= backup;
        }

        
// simple calculator
function add() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (!isNaN(num1) && !isNaN(num2)) {
      var result = num1 + num2;
      document.getElementById('result').innerText = 'Total Payment:  ' + result;
    } else {
      document.getElementById('result').innerText = 'Please enter valid numbers';
    }
  }

  function showNumber() {
      var inputElement = document.getElementById('numberInput');
      var resultElement = document.getElementById('result');

      var enteredNumber = inputElement.value;

      if (enteredNumber.trim() !== '') {
        resultElement.textContent = 'Total: ' + enteredNumber;
      } else {
        resultElement.textContent = '';
      }
    }


 function myfun(paravalue){
    var backup = document.body.innerHTML;
     var divcontent = document.getElementById(paravalue).innerHTML;
    document.body.innerHTML = divcontent;
     window.print();
     document.body.innerHTML= backup;
        }

   
// JavaScript functions for Molding Calculator

 // Function to calculate running feet for molding
  function calculateMoldingRunningFeet(sectionNumber) {
    const length = parseFloat(document.getElementById(`moldingLength${sectionNumber}`).value) || 0;
    const quantity = parseInt(document.getElementById(`moldingQuantity${sectionNumber}`).value) || 0;

    if (!isNaN(length) && !isNaN(quantity)) {
      const runningFeet = Math.ceil(length / 12) * quantity;
      document.getElementById(`moldingRunningFeet${sectionNumber}`).textContent = runningFeet.toFixed(2);
    }
  }

  // Function to calculate total payment for molding
  function calculateMoldingTotalPayment(sectionNumber) {
    const runningFeet = parseFloat(document.getElementById(`moldingRunningFeet${sectionNumber}`).textContent) || 0;
    const rate = parseFloat(document.getElementById(`moldingRate${sectionNumber}`).value) || 0;

    if (!isNaN(runningFeet) && !isNaN(rate)) {
      const totalPayment = runningFeet * rate;
      document.getElementById(`moldingTotalPayment${sectionNumber}`).textContent = totalPayment.toFixed(2);
    }
  }

  // Function to calculate results for all sections
  function calculateMoldingResults() {
    for (let i = 7; i <= 12; i++) {
      calculateMoldingRunningFeet(i);
      calculateMoldingTotalPayment(i);
    }
  }

  function calculateTotalPaymentForMolding() {
    let totalPayment = 0;
    for (let sectionNumber = 7; sectionNumber <= 12; sectionNumber++) {
        const paymentElement = document.getElementById(`moldingTotalPayment${sectionNumber}`);
        const payment = parseFloat(paymentElement.textContent) || 0;
        totalPayment += payment;
    }
    document.getElementById('totalPaymentMolding7to12').textContent = totalPayment.toFixed(2);
}


// Update the customer information
function updateCustomerInfo() {
    const cusstomerName = document.getElementById('').textContent;
    const customerMobile = document.getElementById('customerMobile').textContent;

    document.getElementById('').textContent = cusstomerName;
    document.getElementById('customerMobile').textContent = customerMobile;
}

// Call the function to initialize the customer information
updateCustomerInfo();

  // dp result js
  function calculateDpResults() {
    const length = parseFloat(document.getElementById('dpLength').value) || 0;
    const breadth = parseFloat(document.getElementById('dpBreadth').value) || 0;
    const quantity = parseInt(document.getElementById('dpQuantity').value) || 0;
    const rate = parseFloat(document.getElementById('dpRate').value) || 0;

    if (!isNaN(length) && !isNaN(breadth) && !isNaN(quantity) && !isNaN(rate)) {
      const nearestMultipleLength = Math.ceil(length / 3) * 3;
      const nearestMultipleBreadth = Math.ceil(breadth / 3) * 3;
      const squareFeet = (nearestMultipleLength / 12) * (nearestMultipleBreadth / 12) * quantity;
      const finalPayment = rate * squareFeet;

      document.getElementById('dpSquareFeet').textContent = squareFeet.toFixed(2);
      document.getElementById('dpFinalPayment').textContent = `${finalPayment.toFixed(2)}`;
    }
  }

  function removeDpResults() {
    document.getElementById('dpSquareFeet').textContent = '';
    document.getElementById('dpFinalPayment').textContent = '';
  }
  


// calculator code

function calculateSections() {
  calculateSection(1);
  calculateSection(2);
  calculateSection(3);
  calculateSection(4);
  calculateSection(5);
  calculateSection(6);
  calculateSection(7);
  calculateSection(8);
  calculateSection(9);
  calculateSection(10);
  calculateSection(11);
  calculateSection(12);
  calculateSection(13);
  calculateSection(14);
  calculateSection(15);
  calculateSection(16);
  calculateSection(17);
  calculateSection(18);
  calculateSection(19);
  calculateSection(20);
  calculateSection(21);
  calculateSection(22);
  calculateSection(23);
  calculateSection(24);
  calculateSection(25);
  calculateSection(26);
  calculateSection(27);
  calculateSection(28);
  calculateSection(29);
  calculateSection(30);
  calculateTotalPayment();
}

function calculateSection(sectionNumber) {
  const length = parseFloat(document.getElementById(`inputLength${sectionNumber}`).value);
  const breadth = parseFloat(document.getElementById(`inputBreadth${sectionNumber}`).value);
  const quantity = parseInt(document.getElementById(`quantity${sectionNumber}`).value);

  if (!isNaN(length) && !isNaN(breadth) && !isNaN(quantity)) {
    const nearestMultipleLength = Math.ceil(length / 3) * 3;
    const nearestMultipleBreadth = Math.ceil(breadth / 3) * 3;
    const squareFeet = (nearestMultipleLength / 12) * (nearestMultipleBreadth / 12) * quantity;

    document.getElementById(`squareFeet${sectionNumber}`).textContent = squareFeet.toFixed(2);
  }
}

function calculateTotal() {
  const totalSquareFeet = getSquareFeetTotal();
  document.getElementById('totalResult').textContent = `Total Square Feet for all sections is ${totalSquareFeet.toFixed(2)} square feet.`;
  calculateTotalPayment();
}

function calculateExactSum() {
  const totalSquareFeet = getSquareFeetTotal();
  document.getElementById('totalResult').textContent = `Exact Sum of Total Square Feet is ${totalSquareFeet.toFixed(2)} square feet.`;
  calculateTotalPayment();
}

function getSquareFeetTotal() {
  let totalSquareFeet = 0;
  for (let sectionNumber = 1; sectionNumber <= 30; sectionNumber++) {
    const squareFeet = parseFloat(document.getElementById(`squareFeet${sectionNumber}`).textContent) || 0;
    totalSquareFeet += squareFeet;
  }
  return totalSquareFeet;
}


function calculateTotalPayment() {
const rate = parseFloat(document.getElementById('rate').value);
const tableBody = document.getElementById('finalReportTable').getElementsByTagName('tbody')[0];
tableBody.innerHTML = ''; // Clear existing rows

let totalSquareFeet = 0;

// Add rows for each section with a value
for (let sectionNumber = 1; sectionNumber <= 30; sectionNumber++) {
const length = parseFloat(document.getElementById(`inputLength${sectionNumber}`).value) || 0;
const breadth = parseFloat(document.getElementById(`inputBreadth${sectionNumber}`).value) || 0;
const quantity = parseInt(document.getElementById(`quantity${sectionNumber}`).value) || 0;
const squareFeet = parseInt(document.getElementById(`squareFeet${sectionNumber}`).value) || 0;

if (length > 0 && breadth > 0 && quantity > 0) {
  const nearestMultipleLength = Math.ceil(length / 3) * 3;
  const nearestMultipleBreadth = Math.ceil(breadth / 3) * 3;
  const squareFeet = (nearestMultipleLength / 12) * (nearestMultipleBreadth / 12) * quantity;
  const sectionTotal = squareFeet * rate;

  const row = tableBody.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);
  // const cell7 = row.insertCell(6);
  // const cell8 = row.insertCell(7);
  // const cell9 = row.insertCell(8);
  // const cell10 = row.insertCell(9);
  // const cell11 = row.insertCell(10);
  // const cell12 = row.insertCell(11);
  // const cell13 = row.insertCell(12);
  // const cell14 = row.insertCell(13);
  // const cell15 = row.insertCell(14);
  // const cell16 = row.insertCell(15);
  // const cell17 = row.insertCell(16);
  // const cell18 = row.insertCell(17);
  // const cell19 = row.insertCell(18);
  // const cell20 = row.insertCell(19);
  // const cell21 = row.insertCell(20);
  // const cell22 = row.insertCell(21);
  // const cell23 = row.insertCell(22);
  // const cell24 = row.insertCell(23);
  // const cell25 = row.insertCell(24);
  // const cell26 = row.insertCell(25);
  // const cell27 = row.insertCell(26);
  // const cell28 = row.insertCell(27);
  // const cell29 = row.insertCell(28);
  // const cell30 = row.insertCell(29);
  


  cell1.textContent = `Granite:${sectionNumber}`;
  cell2.textContent =  `${length} x ${breadth}`;
  cell3.textContent = quantity;
  cell4.textContent = squareFeet;
  cell5.textContent = rate.toFixed(2);
  cell6.textContent = sectionTotal.toFixed(2);

  totalSquareFeet += squareFeet;
}
}

// Add a row for the total if there is at least one section with a value
if (totalSquareFeet > 0) {
const totalRow = tableBody.insertRow();
const cell1 = totalRow.insertCell(0);
const cell2 = totalRow.insertCell(1);
const cell3 = totalRow.insertCell(2);
const cell4 = totalRow.insertCell(3);
const cell5 = totalRow.insertCell(4);
const cell6 = totalRow.insertCell(5);
// const cell7 = totalrow.insertCell(6);
// const cell8 = totalrow.insertCell(7);
// const cell9 = totalrow.insertCell(8);
// const cell10 = totalrow.insertCell(9);
// const cell11 = totalrow.insertCell(10);
// const cell12 = totalrow.insertCell(11);
// const cell13 = totalrow.insertCell(12);
// const cell14 = totalrow.insertCell(13);
// const cell15 = totalrow.insertCell(14);
// const cell16 = totalrow.insertCell(15);
// const cell17 = totalrow.insertCell(16);
// const cell18 = totalrow.insertCell(17);
// const cell19 = totalrow.insertCell(18);
// const cell20 = totalrow.insertCell(19);
// const cell21 = totalrow.insertCell(20);
// const cell22 = totalrow.insertCell(21);
// const cell23 = totalrow.insertCell(22);
// const cell24 = totalrow.insertCell(23);
// const cell25 = totalrow.insertCell(24);
// const cell26 = totalrow.insertCell(25);
// const cell27 = totalrow.insertCell(26);
// const cell28 = totalrow.insertCell(27);
// const cell29 = totalrow.insertCell(28);
// const cell30 = totalrow.insertCell(29);


cell1.textContent = 'Total';
cell2.textContent = '';
cell3.textContent = '';
cell4.textContent = totalSquareFeet;
cell5.textContent = '';
cell6.textContent = (totalSquareFeet * rate).toFixed(2);
}
}



// running feet js

function calculateRunningFeet() {
  const totalRunningFeet = calculateTotalRunningFeet();
  document.getElementById('runningFeet').textContent = totalRunningFeet.toFixed(2);
  calculateManualPrice();
}

function calculateTotalRunningFeet() {
  let totalRunningFeet = 0;
  for (let sectionNumber = 1; sectionNumber <= 6; sectionNumber++) {
    const lengthInches = parseFloat(document.getElementById(`inputLength${sectionNumber}`).value) || 0;
    const quantity = parseInt(document.getElementById(`quantity${sectionNumber}`).value) || 0;
    const runningFeet = Math.ceil(lengthInches / 12) * 12 * quantity; // Ensure running feet is a multiple of 12 and consider quantity
    totalRunningFeet += runningFeet / 12; // Convert back to feet
  }
  return totalRunningFeet;
}



// KADAPPA SECTION
function calculateAllSections() {
  var sections = document.querySelectorAll('.calculation-section');
  var totalResult = 0;
  var totalSquareFeet = 0;

  // Reset the result display
  var resultDiv = document.getElementById('resultAllSections');
  resultDiv.innerHTML = '';

  // Get the final report table body
  var tableBody = document.querySelector('#finalReportTable tbody');

  sections.forEach(function(section, index) {
    var lengthInput = parseFloat(section.querySelector('.length').value) || 0;
    var breadthInput = parseFloat(section.querySelector('.breadth').value) || 0;
    var quantityInput = parseFloat(section.querySelector('.quantity').value) || 0;
    var rateInput = parseFloat(section.querySelector('.rate').value) || 0;

    // Check if any input is empty
    if (lengthInput === 0 || breadthInput === 0 || quantityInput === 0 || rateInput === 0) {
      return; // Skip this section if any input is empty
    }

    var roundedLength = Math.ceil(lengthInput / 6) * 6;
    var roundedBreadth = Math.ceil(breadthInput / 6) * 6;

    var squareFeet = (roundedLength * roundedBreadth) / 144;
    var result = squareFeet * quantityInput;
    var finalRate = result * rateInput;

    totalSquareFeet += squareFeet;
    totalResult += finalRate;

    // Display results for each section
    resultDiv.innerHTML += `<p> ${index + 1}:</p>` +
                           `<p>Sq/ft: ${squareFeet.toFixed(2)}</p>` +
                           `<p>Total: ${finalRate.toFixed(2)}</p>`;

    // Create a new row in the final report table for each section
    var newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = 'Kaddapa';
    newRow.insertCell(1).textContent = ` ${lengthInput} X ${breadthInput}`;
    newRow.insertCell(2).textContent = quantityInput.toFixed(2);
    newRow.insertCell(3).textContent = squareFeet.toFixed(2);
    newRow.insertCell(4).textContent = rateInput.toFixed(2);
    newRow.insertCell(5).textContent = finalRate.toFixed(2);
  });

  // Display total square feet and total result
  resultDiv.innerHTML += `<p>Total Sq/ft: ${totalSquareFeet.toFixed(2)}</p>` +
                         `<p>Total Amount: ${totalResult.toFixed(2)}</p>`;

  // Create a row for the total values in the final report table
  var totalRow = tableBody.insertRow();
  totalRow.insertCell(0).textContent = 'Kaddapa Total';
  totalRow.insertCell(1).textContent = '';
  totalRow.insertCell(2).textContent = '';
  totalRow.insertCell(3).textContent = totalSquareFeet.toFixed(2);
  totalRow.insertCell(4).textContent = '';
  totalRow.insertCell(5).textContent = totalResult.toFixed(2);
}

