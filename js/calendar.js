// DOM elements for calendar
const monthYearDisplay = document.getElementById("month-year");
const daysContainer = document.getElementById("days");

// Calendar state
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const today = new Date();

// Month names
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function generateCalendar(month, year) {
  monthYearDisplay.textContent = `${months[month]} ${year}`;
  daysContainer.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement("div");
    emptyDay.classList.add("empty-day");
    daysContainer.appendChild(emptyDay);
  }

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

    // Add click handler for day selection
    dayElement.addEventListener("click", () => {
      // Clear previous selection
      document.querySelectorAll(".calendar-day").forEach(d =>
        d.classList.remove("selected")
      );
      dayElement.classList.add("selected");

      // Call details tab function (from details-tab.js)
      if (typeof showDetailsTab === 'function') {
        showDetailsTab(day, month, year);
      }
    });

    daysContainer.appendChild(dayElement);
  }
}

// Navigation helpers
function prevMonth() {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  generateCalendar(currentMonth, currentYear);
}

function nextMonth() {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  generateCalendar(currentMonth, currentYear);
}

// Initialize calendar
generateCalendar(currentMonth, currentYear);
