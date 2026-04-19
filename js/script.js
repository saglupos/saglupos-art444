// Hamburger menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('primary-nav');

if (hamburgerBtn !== null && mobileNav !== null) {

function toggleMobileMenu() {
    const isOpen = mobileNav.classList.toggle('nav--open');
    hamburgerBtn.classList.toggle('is-active', isOpen);
}

function closeMobileMenu() {
    mobileNav.classList.remove('nav--open');
    hamburgerBtn.classList.remove('is-active');
}

hamburgerBtn.addEventListener('click', toggleMobileMenu);

// Close the menu whenever any nav link inside it is clicked
const navLinks = document.querySelectorAll('.nav-link, .nav-dropdown-link');
navLinks.forEach(function (link) {
  link.addEventListener('click', closeMobileMenu);
});

// Close mobile menu if user resizes back to desktop width
window.addEventListener('resize', function () {
if (window.innerWidth > 768) {
    closeMobileMenu();
}
});
}

// Timeline dropdown (desktop)
const timelineDropdownItem = document.getElementById('timeline-dropdown');

if (timelineDropdownItem !== null) {
function toggleDropdown(e) {
  e.preventDefault();
  const dropdownList = timelineDropdownItem.querySelector('.nav-dropdown-list');
  dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
}

timelineDropdownItem.querySelector('.nav-link--timeline').addEventListener('click', toggleDropdown);

document.addEventListener('click', function (e) {
  if (!timelineDropdownItem.contains(e.target)) {
    timelineDropdownItem.querySelector('.nav-dropdown-list').style.display = 'none';
  }
});
}

/* Dark/Light Mode Toggle */
let themeToggle = document.getElementById("theme-toggle");
let iconSpan = document.querySelector(".toggle-icon");
 
function setDarkMode(isDark) {
  if (isDark) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
    iconSpan.innerHTML    = "&#9790;";
    iconSpan.className    = "toggle-icon toggle-icon--moon";
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    iconSpan.innerHTML    = "&#9788;";
    iconSpan.className    = "toggle-icon toggle-icon--sun";
  }
  localStorage.setItem("darkModePreference", isDark);
}
 
themeToggle.addEventListener("click", function () {
  let isDark = document.body.classList.contains("dark-mode");
  setDarkMode(!isDark);
});
 
/* TIME-BASED AUTO DARK / LIGHT MODE */
function isNightTime() {
  let currentHour = new Date().getHours();
  return (currentHour >= 19 || currentHour < 6);3
}

function applyTimeBasedTheme() {
  let savedPreference = localStorage.getItem("darkModePreference");
  if (savedPreference === null) {
      setDarkMode(isNightTime());
  } else {
      let prefersDark = (savedPreference === "true");
      setDarkMode(prefersDark);
  }
}

function checkAndAutoSwitchTheme() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  
  if (hour === 19 && minute === 0) {
    localStorage.removeItem("darkModePreference");
    setDarkMode(true);
  }
  
  if (hour === 6 && minute === 0) {
    localStorage.removeItem("darkModePreference");
    setDarkMode(false);
  }
}
 
applyTimeBasedTheme();
setInterval(checkAndAutoSwitchTheme, 60000);