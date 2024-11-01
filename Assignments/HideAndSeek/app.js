const ably = new Ably.Realtime("vum2bA.GvObhg:UR6t3nEiP_Meq0i4J6xKa-9_ueVQpZ5N11dUGEbU4m0");
const channel = ably.channels.get("hide-and-seek-timer");

let countdownTime = 60; // seconds
let countdownInterval;

// Function to start the countdown timer
function startTimer(startTime) {
  clearInterval(countdownInterval); // Clear any existing intervals

  countdownInterval = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const remainingTime = countdownTime - elapsed;

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("timer-display").innerText = "Time's up!";
    } else {
      document.getElementById("timer-display").innerText = remainingTime;
    }
  }, 1000);
}

// Event listener for the seeker
document.getElementById("start-button").addEventListener("click", async () => {
  const response = await fetch("https://YOUR_VULTR_SERVER_IP/start-timer", {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  });
  
  if (response.ok) {
    const data = await response.json();
    startTimer(data.startTime);
  } else {
    console.error("Failed to start timer");
  }
});

// Event listener for hiders
document.getElementById("join-button").addEventListener("click", () => {
  channel.subscribe("start-timer", (message) => {
    const startTime = message.data.startTime;
    startTimer(startTime);
  });
});
