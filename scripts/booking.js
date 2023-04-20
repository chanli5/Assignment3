/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
const costPerFullDay = 35;
const costPerHalfDay = 20;
let days = 0;
let dayCounter = 0;
let dailyRate = costPerFullDay;
let totalCost = 0;

const dayButtons = document.querySelectorAll(".day-selector li");
const fullDayButton = document.getElementById("full");
const halfDayButton = document.getElementById("half");
const calculatedCost = document.getElementById("calculated-cost");
const clearButton = document.getElementById("clear-button");

calculatedCost.innerHTML = totalCost;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function applyClickedClass(day) {
  day.classList.add("clicked");
  dayCounter++;
  days++;
  totalCost = days * dailyRate;
  calculatedCost.innerHTML = totalCost;
}

function removeClickedClass(day) {
  day.classList.remove("clicked");
  dayCounter--;
  days--;
  totalCost = days * dailyRate;
  calculatedCost.innerHTML = totalCost;
}

dayButtons.forEach((day) => {
  day.addEventListener("click", () => {
    if (day.classList.contains("clicked")) {
      removeClickedClass(day);
    } else {
      applyClickedClass(day);
    }
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click", () => {
  dayButtons.forEach((day) => {
    day.classList.remove("clicked");
  });
  days = 0;
  dayCounter = 0;
  totalCost = 0;
  calculatedCost.innerHTML = totalCost;
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function fullDay() {
  fullDayButton.classList.add("clicked");
  halfDayButton.classList.remove("clicked");
  dailyRate = costPerFullDay;
  totalCost = days * dailyRate;
  calculatedCost.innerHTML = totalCost;
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function halfDay() {
  halfDayButton.classList.add("clicked");
  fullDayButton.classList.remove("clicked");
  dailyRate = costPerHalfDay;
  totalCost = days * dailyRate;
  calculatedCost.innerHTML = totalCost;
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

fullDayButton.addEventListener("click", fullDay);
halfDayButton.addEventListener("click", halfDay);
