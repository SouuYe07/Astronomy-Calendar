const menu = document.getElementById("menu");
const openCalendarBtn = document.getElementById("open-calendar");
const settings = document.getElementById("settings");
const themes = document.getElementById("themes");
const backBtn = document.getElementById("back-to-menu");

openCalendarBtn.addEventListener("click", () => {
  menu.style.display = "none";
  calendar.style.display = "flex";
});

backBtn.addEventListener("click", () => {
  calendar.style.display = "none";
  menu.style.display = "block";
});
