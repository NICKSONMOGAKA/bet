const predictions = [
    "1.Koln (Women) - RB Leipzig (Women) - over 2.5.",
    "2.AaB Fodbold - Silkeborg - over 2.5.",
    "3.Newcastle United U21 - Chelsea U21 - over 2.5.",
 "4.Bournemouth - West Ham United - over 2.5."
];

// Function to show all predictions at once
function showAllPredictions() {
    const predictionBox = document.getElementById("prediction-box");
    predictionBox.innerHTML = predictions.join('<br>'); // Join all predictions with a line break
}

// Update the predictions on page load
window.onload = () => {
    showAllPredictions();
};

// Handle button click to show all predictions again
const newPredictionBtn = document.getElementById("new-prediction-btn");
newPredictionBtn.addEventListener("click", () => {
    const predictionBox = document.getElementById("prediction-box");
    predictionBox.innerHTML = "Loading new predictions...";

    setTimeout(() => {
        showAllPredictions();
    }, 1000);  // Simulate loading time
});
