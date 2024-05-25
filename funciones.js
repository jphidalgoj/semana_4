function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const convertFrom = document.getElementById('convertFrom').value;
    const convertTo = document.getElementById('convertTo').value;
    const resultDiv = document.getElementById('result');
    
    let result;

    if (convertFrom === convertTo) {
        result = `La temperatura ya está en ${convertTo}.`;
    } else if (convertFrom === 'C' && convertTo === 'F') {
        result = (temperatureInput * 9/5) + 32;
        result = `${temperatureInput}°C son ${result.toFixed(2)}°F.`;
    } else if (convertFrom === 'F' && convertTo === 'C') {
        result = (temperatureInput - 32) * 5/9;
        result = `${temperatureInput}°F son ${result.toFixed(2)}°C.`;
    }

    resultDiv.style.display = 'block';
    resultDiv.textContent = result;
}