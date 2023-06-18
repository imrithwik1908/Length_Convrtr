// Access the select elements
const fromUnitSelect = document.getElementById("fromUnit");
const toUnitSelect = document.getElementById("toUnit");

// Define the units with shorthand notations or symbols
const units = [
  { name: "meter", shorthand: "m" },
  { name: "kilometer", shorthand: "km" },
  { name: "millimeter", shorthand: "mm" },
  { name: "yard", shorthand: "yd" },
  { name: "mile", shorthand: "mi" },
  { name: "foot", shorthand: "ft" },
  { name: "centimeter", shorthand: "cm" },
  { name: "decimeter", shorthand: "dm" },
  { name: "nanometer", shorthand: "nm" }
];

// Function to populate options in a select element
function populateOptions(selectElement, selectedValue) {
  selectElement.innerHTML = ""; // Clear existing options

  units.forEach(unit => {
    if (unit.name !== selectedValue) {
      const newOption = document.createElement("option");
      newOption.value = unit.name;
      newOption.text = unit.shorthand;
      selectElement.appendChild(newOption);
    }
  });
}

// Event listener for "From" dropdown change
fromUnitSelect.addEventListener("change", function() {
  const selectedFromUnit = this.value;
  populateOptions(toUnitSelect, selectedFromUnit);
});

// Event listener for "To" dropdown change
toUnitSelect.addEventListener("change", function() {
  const selectedToUnit = this.value;
  populateOptions(fromUnitSelect, selectedToUnit);
});

// Initial population of options
populateOptions(fromUnitSelect, "");
populateOptions(toUnitSelect, "");

// JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    // Define the unit info
    const unitInfo = {
      meter: 'Meter (m)',
      kilometer: 'Kilometer (km)',
      millimeter: 'Millimeter (mm)',
      yard: 'Yard (yd)',
      mile: 'Mile (mi)',
      foot: 'Foot (ft)',
      centimeter: 'Centimeter (cm)',
      decimeter: 'Decimeter (dm)',
      nanometer: 'Nanometer (nm)'
    };
  
    // Get the info button element
    const infoButton = document.querySelector('.info-icon');
  
    // Create the tooltip element
    const tooltip = document.createElement('div');
    tooltip.classList.add('info-tooltip');
  
    // Attach the tooltip element to the wrapper div
    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(tooltip);
  
    // Add event listener to the info button
    infoButton.addEventListener('click', function () {
      // Clear the tooltip content
      tooltip.innerHTML = '';
  
      // Loop through the unit info and create paragraphs for each unit
      Object.entries(unitInfo).forEach(([unit, info]) => {
        const unitParagraph = document.createElement('p');
        unitParagraph.textContent = info;
        tooltip.appendChild(unitParagraph);
      });
  
      // Toggle the visibility of the tooltip
      tooltip.style.visibility = tooltip.style.visibility === 'visible' ? 'hidden' : 'visible';
      tooltip.style.opacity = tooltip.style.opacity === '1' ? '0' : '1';
    });
  });
  

  // JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    // Get the form elements
    const form = document.querySelector('form');
    const resultDiv = document.querySelector('.result');
  
    // Add event listener to the form submit event
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission
      // Get the input value and selected units
      const inputValue = parseFloat(document.querySelector('.amount input').value);
      const fromUnit = document.getElementById('fromUnit').value;
      const toUnit = document.getElementById('toUnit').value;
  
      // Perform the conversion
      const result = convertLength(inputValue, fromUnit, toUnit);
  
      // Display the result
      resultDiv.textContent = `${result} ${toUnit}s`;
      resultDiv.style.display = 'block';

    });
  
    // Function to convert length
    function convertLength(value, fromUnit, toUnit) {
      const conversionTable = {
        meter: {
          meter: value,
          kilometer: value / 1000,
          millimeter: value * 1000,
          yard: value * 1.09361,
          mile: value * 0.000621371,
          foot: value * 3.28084,
          centimeter: value * 100,
          decimeter: value * 10,
          nanometer: value * 1e+9,
        },
        kilometer: {
          meter: value * 1000,
          kilometer: value,
          millimeter: value * 1e+6,
          yard: value * 1093.61,
          mile: value * 0.621371,
          foot: value * 3280.84,
          centimeter: value * 100000,
          decimeter: value * 10000,
          nanometer: value * 1e+12,
        },
        millimeter: {
          meter: value * 0.001,
          kilometer: value * 1e-6,
          millimeter: value,
          yard: value * 0.00109361,
          mile: value * 6.2137e-7,
          foot: value * 0.00328084,
          centimeter: value * 0.1,
          decimeter: value * 0.01,
          nanometer: value * 1e+6,
        },
        yard: {
          meter: value * 0.9144,
          kilometer: value * 0.0009144,
          millimeter: value * 914.4,
          yard: value,
          mile: value * 0.000568182,
          foot: value * 3,
          centimeter: value * 91.44,
          decimeter: value * 9.144,
          nanometer: value * 9.144e+8,
        },
        mile: {
          meter: value * 1609.34,
          kilometer: value * 1.60934,
          millimeter: value * 1.60934e+6,
          yard: value * 1760,
          mile: value,
          foot: value * 5280,
          centimeter: value * 160934,
          decimeter: value * 16093.4,
          nanometer: value * 1.60934e+12,
        },
        foot: {
          meter: value * 0.3048,
          kilometer: value * 0.0003048,
          millimeter: value * 304.8,
          yard: value * 0.333333,
          mile: value * 0.000189394,
          foot: value,
          centimeter: value * 30.48,
          decimeter: value * 3.048,
          nanometer: value * 3.048e+8,
        },
        centimeter: {
          meter: value * 0.01,
          kilometer: value * 1e-5,
          millimeter: value * 10,
          yard: value * 0.0109361,
          mile: value * 6.2137e-6,
          foot: value * 0.0328084,
          centimeter: value,
          decimeter: value * 0.1,
          nanometer: value * 1e+7,
        },
        decimeter: {
          meter: value * 0.1,
          kilometer: value * 0.0001,
          millimeter: value * 100,
          yard: value * 0.109361,
          mile: value * 6.2137e-5,
          foot: value * 0.328084,
          centimeter: value * 10,
          decimeter: value,
          nanometer: value * 1e+8,
        },
        nanometer: {
          meter: value * 1e-9,
          kilometer: value * 1e-12,
          millimeter: value * 1e-6,
          yard: value * 1.09361e-9,
          mile: value * 6.2137e-13,
          foot: value * 3.28084e-9,
          centimeter: value * 1e-7,
          decimeter: value * 1e-8,
          nanometer: value,
        },
      };
  
      // Perform the conversion using the conversionTable
      return conversionTable[fromUnit][toUnit];
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const resultDiv = document.querySelector('.result');
    const infoIconRight = document.querySelector('.info-icon');
    const infoIconLeft = document.querySelector('.info-icon-left');
    const infoContent = document.createElement('div');
    infoContent.className = 'info-content';
    infoContent.innerHTML = `
      <h2>Conversion Rules:</h2>
      <ul>
        <li>1 meter = 1 meter</li>
        <li>1 kilometer = 1000 meters</li>
        <li>1 millimeter = 0.001 meters</li>
        <li>1 yard = 0.9144 meters</li>
        <li>1 mile = 1609.34 meters</li>
        <li>1 foot = 0.3048 meters</li>
        <li>1 centimeter = 0.01 meters</li>
        <li>1 decimeter = 0.1 meters</li>
        <li>1 nanometer = 10<sup>-9</sup> meters</li>
      </ul>
    `;
    document.body.appendChild(infoContent);
  
    let isInfoContentVisible = false;
  
    const toggleInfoContent = () => {
      isInfoContentVisible = !isInfoContentVisible;
      infoContent.style.display = isInfoContentVisible ? 'block' : 'none';
      form.classList.toggle('blur');
    };
  
    infoIconLeft.addEventListener('click', toggleInfoContent);
    infoIconRight.addEventListener('click', toggleInfoContent);

})

  
  