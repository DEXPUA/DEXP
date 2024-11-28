// Initial balance
let balance = 0;

// Button to claim reward
const claimButton = document.getElementById("claimReward");

// Function to claim reward
claimButton.addEventListener("click", () => {
    if (balance === 0) {
        balance = 1100; // Add 1100 DEXP
        document.getElementById("balance").innerText = `${balance} DEXP`;
        alert("Congratulations! You've earned 1100 DEXP!");
    } else {
        alert("You've already claimed your reward!");
    }
});