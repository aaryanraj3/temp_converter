function convertKelvin() {
    const kelvinInput = document.getElementById("kelvinInput").value;
    const fahrenheit = (kelvinInput - 273.15) * 9/5 + 32;
    const celsius = kelvinInput - 273.15;
    document.getElementById("fahrenheitOutput").textContent = fahrenheit.toFixed(2) + " °F";
    document.getElementById("celsiusOutput").textContent = celsius.toFixed(2) + " °C";
}

function convertFahrenheit() {
    const fahrenheitInput = document.getElementById("fahrenheitInput").value;
    const kelvin = (fahrenheitInput - 32) * 5/9 + 273.15;
    const celsius = (fahrenheitInput - 32) * 5/9;
    document.getElementById("kelvinOutput").textContent = kelvin.toFixed(2) + " K";
    document.getElementById("celsiusOutput2").textContent = celsius.toFixed(2) + " °C";
}

function convertCelsius() {
    const celsiusInput = document.getElementById("celsiusInput").value;
    const kelvin = parseFloat(celsiusInput) + 273.15;
    const fahrenheit = (parseFloat(celsiusInput) * 9/5) + 32;
    document.getElementById("kelvinOutput2").textContent = kelvin.toFixed(2) + " K";
    document.getElementById("fahrenheitOutput2").textContent = fahrenheit.toFixed(2) + " °F";
}