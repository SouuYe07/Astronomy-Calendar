// DOM Elements
const menu = document.querySelector(".menu");
const calendar = document.querySelector(".calendar");
const openCalendarBtn = document.getElementById("open-calendar");
const settings = document.getElementById("settings");
const themes = document.getElementById("themes-btn");
const backBtn = document.getElementById("back-to-menu");

// Calendar control buttons
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Update your main.js file
document.getElementById('open-calendar').addEventListener('click', () => {
  document.querySelector('.menu').style.display = 'none';
  document.querySelector('.calendar-container').classList.add('active'); // Add this line
  document.querySelector('.calendar').classList.add('active');
  generateCalendar(currentMonth, currentYear);
});

document.getElementById('back-to-menu').addEventListener('click', () => {
  document.querySelector('.calendar').classList.remove('active');
  document.querySelector('.calendar-container').classList.remove('active'); // Add this line
  document.querySelector('.menu').style.display = 'flex';
  // Also hide details tab if it's open
  document.querySelector('.calendar-container').classList.remove('show-details');
});
// Navigation buttons
prevBtn.addEventListener("click", () => {
  prevMonth(); // from calendar.js
});

nextBtn.addEventListener("click", () => {
  nextMonth(); // from calendar.js
});

// Placeholder functions for settings and themes
settings.addEventListener("click", () => {
  alert("Settings functionality coming soon!");
});

themes.addEventListener("click", () => {
  alert("Themes functionality coming soon!");
});
