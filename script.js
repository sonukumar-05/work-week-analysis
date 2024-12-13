// Function to analyze weekly work hours
function analyseWorkWeek(dailyHours) {
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;
  const maxHours = Math.max(...dailyHours);
  const maxDay = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ][dailyHours.indexOf(maxHours)];
  const daysWorked = dailyHours.filter((hours) => hours > 0).length;
  const isFullTime = totalHours >= 35 ? "Yes 🎉" : "No 😴";

  return { totalHours, averageHours, maxDay, daysWorked, isFullTime };
}

// Function to update the bar chart dynamically
function updateBarChart(dailyHours) {
  const barChart = document.getElementById("barChart");
  barChart.innerHTML = ""; // Clear any existing bars

  dailyHours.forEach((hours) => {
    const bar = document.createElement("div");
    bar.style.height = `${(hours / 8) * 100}%`; // Scale bar height based on max 8 hours
    bar.title = `${hours} hours`; // Tooltip for each bar
    barChart.appendChild(bar);
  });
}

// Function to simulate getting new weekly hours (random data for demonstration)
function getRandomWeeklyHours() {
  const hours = [];
  for (let i = 0; i < 7; i++) {
    // Random hours between 0 and 10 for each day
    hours.push(Math.floor(Math.random() * 11));
  }
  return hours;
}

// Function to refresh the analysis and chart
function refreshAnalysis() {
  const weeklyHours = getRandomWeeklyHours(); // Get new random hours

  // Analyze the new work week data
  const analysis = analyseWorkWeek(weeklyHours);

  // Update the results on the page
  document.getElementById("totalHours").textContent = analysis.totalHours;
  document.getElementById("averageHours").textContent = analysis.averageHours;
  document.getElementById("maxDay").textContent = analysis.maxDay;
  document.getElementById("daysWorked").textContent = analysis.daysWorked;
  document.getElementById("isFullTime").textContent = analysis.isFullTime;

  // Update the bar chart with new data
  updateBarChart(weeklyHours);
}

// Initial analysis and bar chart population
refreshAnalysis();

// Refresh analysis when the button is clicked
document
  .querySelector(".refresh-button")
  .addEventListener("click", function () {
    refreshAnalysis(); // Refresh the analysis and bar chart with new data
  });
