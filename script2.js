function calculateAllSections() {
    var sections = document.querySelectorAll('.calculation-section');
    var resultDiv = document.getElementById('resultAllSections');
    var tableBody = document.querySelector('#finalReportTable tbody');
    var totalResult = 0; // Initialize total result
    var totalSquareFeet = 0; // Initialize total square feet

    // Reset the result display and final report table
    resultDiv.innerHTML = '';
    tableBody.innerHTML = '';

    sections.forEach(function (section, index) {
        var lengthInput = parseFloat(section.querySelector('.length').value) || 0;
        var breadthInput = parseFloat(section.querySelector('.breadth').value) || 0;
        var quantityInput = parseFloat(section.querySelector('.quantity').value) || 0;
        var rateInput = parseFloat(section.querySelector('.rate').value) || 0;

        // Check if input values are provided for the current section
        if (lengthInput && breadthInput && quantityInput && rateInput) {
            var roundedLength = customRound(lengthInput);
            var roundedBreadth = customRound(breadthInput);

            // Calculate square feet considering the quantity
            var squareFeet = ((roundedLength * roundedBreadth) / 144) * quantityInput;
            var result = squareFeet * rateInput;

            // Display results for the current section in the resultDiv
            resultDiv.innerHTML += `<p>Section ${index + 1}:</p>` +
                `<p>Square Feet: ${squareFeet.toFixed(2)}</p>` +
                `<p>Final Result: ${result.toFixed(2)}</p>`;

            // Update total result and total square feet
            totalResult += result;
            totalSquareFeet += squareFeet;

            // Create a new row in the final report table for each section
            var newRow = tableBody.insertRow();
            newRow.insertCell(0).textContent = 'Kaddapa';
            newRow.insertCell(1).textContent = ` ${lengthInput} X ${breadthInput}`;
            newRow.insertCell(2).textContent = quantityInput.toFixed(2);
            newRow.insertCell(3).textContent = squareFeet.toFixed(2);
            newRow.insertCell(4).textContent = rateInput.toFixed(2);
            newRow.insertCell(5).textContent = result.toFixed(2);
        }
    });

    // Display total square feet and total result in resultDiv
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



// Custom rounding function remains the same
function customRound(value) {
    if (value < 6) {
        return 6;
    } else if (value >= 6 && value < 12) {
        return 12;
    } else if (value >= 12 && value < 18) {
        return 18;
    } else if (value >= 18 && value < 24) {
        return 24;
    } else if (value >= 24 && value < 30) {
        return 30;
    } else if (value >= 30 && value < 36) {
        return 36;
    } else if (value >= 36 && value < 42) {
        return 42;
    } else if (value >= 42 && value < 48) {
        return 48;
    } else if (value >= 48 && value < 54) {
        return 54;
    } else if (value >= 54 && value < 60) {
        return 60;
    } else if (value >= 60 && value < 66) {
        return 66;
    } else if (value >= 66 && value < 72) {
        return 72;
    } else if (value >= 72 && value < 78) {
        return 78;
    } else if (value >= 78 && value < 84) {
        return 84;
    } else if (value >= 84 && value < 90) {
        return 90;
    } else if (value >= 90 && value < 96) {
        return 96;
    } else if (value >= 96 && value < 100) {
        return 100;
    } else {
        return value;
    }
}

