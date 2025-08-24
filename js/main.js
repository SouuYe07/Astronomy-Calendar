// DOM Elements
const menu = document.querySelector(".menu");
const calendar = document.querySelector(".calendar");
const openCalendarBtn = document.getElementById("open-calendar");
const settings = document.getElementById("settings");
const themes = document.getElementById("themes-btn");
const backBtn = document.getElementById("back-to-menu");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const monthYearDisplay = document.getElementById("month-year");
const daysContainer = document.getElementById("days");

events(12)

// Calendar state
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const today = new Date();

// Month names
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Navigation event listeners
openCalendarBtn.addEventListener("click", () => {
  menu.style.display = "none";
  calendar.style.display = "flex";
  generateCalendar(currentMonth, currentYear);
});

backBtn.addEventListener("click", () => {
  calendar.style.display = "none";
  menu.style.display = "block";
});

prevBtn.addEventListener("click", () => {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  generateCalendar(currentMonth, currentYear);
});

nextBtn.addEventListener("click", () => {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  generateCalendar(currentMonth, currentYear);
});

// Calendar generation function
function generateCalendar(month, year) {
  // Update month-year display
  monthYearDisplay.textContent = `${months[month]} ${year}`;
  
  // Clear previous days
  daysContainer.innerHTML = "";
  
  // Get first day of month and number of days
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  // Add empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement("div");
    emptyDay.classList.add("empty-day");
    daysContainer.appendChild(emptyDay);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    dayElement.classList.add("calendar-day");
    
    // Highlight today
    if (
      year === today.getFullYear() &&
      month === today.getMonth() &&
      day === today.getDate()
    ) {
      dayElement.classList.add("today");
    }
    
    // Add click event for day selection
    dayElement.addEventListener("click", () => {
      // Remove previous selection
      document.querySelectorAll(".calendar-day").forEach(d => 
        d.classList.remove("selected")
      );
      // Add selection to clicked day
      dayElement.classList.add("selected");
      console.log(`Selected date: ${months[month]} ${day}, ${year}`);
    });
    
    daysContainer.appendChild(dayElement);
  }
}

// Placeholder functions for settings and themes
settings.addEventListener("click", () => {
  alert("Settings functionality coming soon!");
});

themes.addEventListener("click", () => {
  alert("Themes functionality coming soon!");
});
