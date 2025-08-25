// DOM elements for details tab
const detailsTab = document.getElementById("details-tab");
const calendarContainer = document.querySelector(".calendar-container");
const detailsTitle = document.getElementById("details-title");
const asteroidDetails = document.getElementById("asteroid-details");
const apodDetails = document.getElementById("apod");
const eventDetails = document.getElementById("event-details");

// Month names (shared with calendar)
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Function to show details tab when a day is clicked
function showDetailsTab(day, month, year) {
  // Slide in details tab
  calendarContainer.classList.add("show-details");

  // Update details tab content
  detailsTitle.textContent = `${monthNames[month]} ${day}, ${year}`;
  console.log(`Selected date: ${monthNames[month]} ${day}, ${year}`);

  // Clear previous content
  asteroidDetails.innerHTML = "<h3>🌑 Asteroid Data</h3><p>Loading asteroid information...</p>";
  apodDetails.innerHTML = "<h3>🌌 Astronomy Picture of the Day</h3><p>Loading image...</p>";
  eventDetails.innerHTML = "<h3>📅 Events</h3><p>No events scheduled for this day.</p>";

  // You can add API calls here to fetch:
  // - NASA APOD for this date
  // - Asteroid data
  // - Astronomical events
  // - etc.
}

// Close button for details tab
document.getElementById("close-details").addEventListener("click", () => {
  calendarContainer.classList.remove("show-details");
});

// Optional: Function to hide details tab (can be called from other files)
function hideDetailsTab() {
  calendarContainer.classList.remove("show-details");
}
