document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const resultElement = document.getElementById("result");
  
    calculateButton.addEventListener("click", function () {
      const band1Value = parseInt(document.getElementById("band1").value);
      const band2Value = parseInt(document.getElementById("band2").value);
      const band3Value = parseInt(document.getElementById("band3").value);
      const band4Value = parseInt(document.getElementById("band4").value);
  
      const resistanceValue = (band1Value * 100 + band2Value * 10 + band3Value) * Math.pow(10, band4Value);
  
      resultElement.textContent = `Direnç Değeri: ${resistanceValue} ohm`;
    });
  });
  