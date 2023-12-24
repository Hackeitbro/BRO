
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
    for (let i = 1; i <= 30; i++) {
      calculateMoldingRunningFeet(i);
      calculateMoldingTotalPayment(i);
    }
  }

  function calculateTotalPaymentForMolding() {
    let totalPayment = 0;
    for (let sectionNumber = 1; sectionNumber <= 30; sectionNumber++) {
        const paymentElement = document.getElementById(`moldingTotalPayment${sectionNumber}`);
        const payment = parseFloat(paymentElement.textContent) || 0;
        totalPayment += payment;
    }
    document.getElementById('totalPaymentMolding1to30').textContent = totalPayment.toFixed(2);
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
function calculateDpResults(setNumber) {
  const lengthInput = document.getElementById(`dpLength${setNumber}`);
  const breadthInput = document.getElementById(`dpBreadth${setNumber}`);
  const quantityInput = document.getElementById(`dpQuantity${setNumber}`);
  const rateInput = document.getElementById(`dpRate${setNumber}`);
  const squareFeetSpan = document.getElementById(`dpSquareFeet${setNumber}`);
  const finalPaymentSpan = document.getElementById(`dpFinalPayment${setNumber}`);

  if (!lengthInput || !breadthInput || !quantityInput || !rateInput || !squareFeetSpan || !finalPaymentSpan) {
    console.error(`One or more elements not found for set ${setNumber}`);
    return;
  }

  const length = parseFloat(lengthInput.value) || 0;
  const breadth = parseFloat(breadthInput.value) || 0;
  const quantity = parseInt(quantityInput.value) || 0;
  const rate = parseFloat(rateInput.value) || 0;

  if (!isNaN(length) && !isNaN(breadth) && !isNaN(quantity) && !isNaN(rate)) {
    const nearestMultipleLength = Math.ceil(length / 3) * 3;
    const nearestMultipleBreadth = Math.ceil(breadth / 3) * 3;
    const squareFeet = (nearestMultipleLength / 12) * (nearestMultipleBreadth / 12) * quantity;
    const finalPayment = rate * squareFeet;

    squareFeetSpan.textContent = squareFeet.toFixed(2);
    finalPaymentSpan.textContent = finalPayment.toFixed(2);
  } else {
    // If any of the inputs are not valid, clear the results
    squareFeetSpan.textContent = '';
    finalPaymentSpan.textContent = '';
  }
}

function calculateAllDpResults() {
  for (let i = 1; i <= 10; i++) {
    calculateDpResults(i);
  }
}

function removeDpResults(setNumber) {
  const squareFeetSpan = document.getElementById(`dpSquareFeet${setNumber}`);
  const finalPaymentSpan = document.getElementById(`dpFinalPayment${setNumber}`);

  if (squareFeetSpan && finalPaymentSpan) {
    squareFeetSpan.textContent = '';
    finalPaymentSpan.textContent = '';
  }
}

function removeAllDpResults() {
  for (let i = 1; i <= 10; i++) {
    removeDpResults(i);
  }
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

  let totalSquareFeetGranite = 0;
  let totalmoldingRunningFeet = 0;
  let totalSquareFeetKadappa = 0;

  // Add rows for Granite sections (section numbers 1 to 6)
  for (let sectionNumber = 1; sectionNumber <= 6; sectionNumber++) {
    const length = parseFloat(document.getElementById(`inputLength${sectionNumber}`).value) || 0;
    const breadth = parseFloat(document.getElementById(`inputBreadth${sectionNumber}`).value) || 0;
    const quantity = parseInt(document.getElementById(`quantity${sectionNumber}`).value) || 0;

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

      cell1.textContent = `Granite:${sectionNumber}`;
      cell2.textContent = `${length} x ${breadth}`;
      cell3.textContent = quantity;
      cell4.textContent = squareFeet;
      cell5.textContent = rate.toFixed(2);
      cell6.textContent = sectionTotal.toFixed(2);

      totalSquareFeetGranite += squareFeet;
    }
  }

  // Add row for the total of Granite sections
  if (totalSquareFeetGranite > 0) {
    const totalGraniteRow = tableBody.insertRow();
    const cell1 = totalGraniteRow.insertCell(0);
    const cell2 = totalGraniteRow.insertCell(1);
    const cell3 = totalGraniteRow.insertCell(2);
    const cell4 = totalGraniteRow.insertCell(3);
    const cell5 = totalGraniteRow.insertCell(4);
    const cell6 = totalGraniteRow.insertCell(5);

    cell1.textContent = 'Total Granite';
    cell2.textContent = '';
    cell3.textContent = '';
    cell4.textContent = totalSquareFeetGranite;
    cell5.textContent = '';
    cell6.textContent = (totalSquareFeetGranite * rate).toFixed(2);
  }

  // Add rows for Molding sections (section numbers 1 to 30) with length greater than 0
  for (let moldingSectionNumber = 1; moldingSectionNumber <= 30; moldingSectionNumber++) {
    const moldingLength = parseFloat(document.getElementById(`moldingLength${moldingSectionNumber}`).value) || 0;
    const moldingRunningFeet = parseFloat(document.getElementById(`moldingRunningFeet${moldingSectionNumber}`).textContent) || 0;
    const moldingRate = parseFloat(document.getElementById(`moldingRate${moldingSectionNumber}`).value) || 0;

    if (moldingLength > 0 && !isNaN(moldingRunningFeet) && !isNaN(moldingRate)) {
      const moldingTotalPayment = moldingRunningFeet * moldingRate;

      const row = tableBody.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);
      const cell6 = row.insertCell(5);

      cell1.textContent = `Molding:${moldingSectionNumber}`;
      cell2.textContent = ''; // You may customize this based on your requirements
      cell3.textContent = ''; // You may customize this based on your requirements
      cell4.textContent = moldingRunningFeet.toFixed(2);
      cell5.textContent = moldingRate.toFixed(2);
      cell6.textContent = moldingTotalPayment.toFixed(2);

      totalmoldingRunningFeet += moldingRunningFeet;
    }
  }

// Add row for the total of Molding sections
if (totalmoldingRunningFeet > 0) {
  const totalMoldingRow = tableBody.insertRow();
  const cell1 = totalMoldingRow.insertCell(0);
  const cell2 = totalMoldingRow.insertCell(1);
  const cell3 = totalMoldingRow.insertCell(2);
  const cell4 = totalMoldingRow.insertCell(3);
  const cell5 = totalMoldingRow.insertCell(4);
  const cell6 = totalMoldingRow.insertCell(5);

  cell1.textContent = 'Total Molding';
  cell2.textContent = '';
  cell3.textContent = '';
  cell4.textContent = totalmoldingRunningFeet;
  cell5.textContent = '';
  cell6.textContent = (totalmoldingRunningFeet * moldingRate).toFixed(2);
}

  // Add rows for Kadappa sections (section numbers 13 to 30)
  for (let kadappaSectionNumber = 13; kadappaSectionNumber <= 30; kadappaSectionNumber++) {
    const kadappaLength = parseFloat(document.getElementById(`inputLength${kadappaSectionNumber}`).value) || 0;
    const kadappaBreadth = parseFloat(document.getElementById(`inputBreadth${kadappaSectionNumber}`).value) || 0;
    const kadappaQuantity = parseInt(document.getElementById(`quantity${kadappaSectionNumber}`).value) || 0;

    if (kadappaLength > 0 && kadappaBreadth > 0 && kadappaQuantity > 0) {
      const nearestMultipleLength = Math.ceil(kadappaLength / 3) * 3;
      const nearestMultipleBreadth = Math.ceil(kadappaBreadth / 3) * 3;
      const squareFeet = (nearestMultipleLength / 12) * (nearestMultipleBreadth / 12) * kadappaQuantity;
      const sectionTotal = squareFeet * rate;

      const row = tableBody.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);
      const cell6 = row.insertCell(5);

      cell1.textContent = `Kadappa:${kadappaSectionNumber}`;
      cell2.textContent = `${kadappaLength} x ${kadappaBreadth}`;
      cell3.textContent = kadappaQuantity;
      cell4.textContent = squareFeet;
      cell5.textContent = rate.toFixed(2);
      cell6.textContent = sectionTotal.toFixed(2);

      totalSquareFeetKadappa += squareFeet;
    }
  }

  // Add row for the total of Kadappa sections
  if (totalSquareFeetKadappa > 0) {
    const totalKadappaRow = tableBody.insertRow();
    const cell1 = totalKadappaRow.insertCell(0);
    const cell2 = totalKadappaRow.insertCell(1);
    const cell3 = totalKadappaRow.insertCell(2);
    const cell4 = totalKadappaRow.insertCell(3);
    const cell5 = totalKadappaRow.insertCell(4);
    const cell6 = totalKadappaRow.insertCell(5);

    cell1.textContent = 'Total Kadappa';
    cell2.textContent = '';
    cell3.textContent = '';
    cell4.textContent = totalSquareFeetKadappa;
    cell5.textContent = '';
    cell6.textContent = (totalSquareFeetKadappa * rate).toFixed(2);
  }
}


// new function to hide 
function toggleSections() {
  var sectionCount = document.getElementById('sectionCount').value;
  for (var i = 1; i <= 30; i++) {
    var section = document.getElementById('section' + i);
    if (i <= sectionCount) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  }
}

function updateSectionCount() {
  toggleSections();
}



// running feet js

function calculateRunningFeet() {
  const totalRunningFeet = calculateTotalRunningFeet();
  document.getElementById('runningFeet').textContent = totalRunningFeet.toFixed(2);
  calculateManualPrice();
}

function calculateTotalRunningFeet() {
  let totalRunningFeet = 0;
  for (let sectionNumber = 1; sectionNumber <= 30; sectionNumber++) {
    const lengthInches = parseFloat(document.getElementById(`inputLength${sectionNumber}`).value) || 0;
    const quantity = parseInt(document.getElementById(`quantity${sectionNumber}`).value) || 0;
    const runningFeet = Math.ceil(lengthInches / 12) * 12 * quantity; // Ensure running feet is a multiple of 12 and consider quantity
    totalRunningFeet += runningFeet / 12; // Convert back to feet
  }
  return totalRunningFeet;
}


//drpdown for dp
function toggleDpSection() {
  var sectionSelector = document.getElementById("sectionSelector");
  var dpSection = document.getElementById("dpSection");

  if (sectionSelector.value === "dpSection") {
    dpSection.style.display = "block";
  } else {
    dpSection.style.display = "none";
  }
}

// dropdown for kadappa
function toggleKadappaSection() {
  var kadappaCalculatorSelector = document.getElementById("kadappaCalculatorSelector");
  var selectedCalculator = kadappaCalculatorSelector.value;

  // Hide all calculator sections
  var calculatorSections = document.querySelectorAll(".calculator-container");
  calculatorSections.forEach(function (section) {
    section.style.display = "none";
  });

  // Show the selected calculator section
  if (selectedCalculator !== "none") {
    var selectedSection = document.getElementById(selectedCalculator);
    if (selectedSection) {
      selectedSection.style.display = "block";
    }
  }
}



