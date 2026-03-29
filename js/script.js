// Hamburger menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileNav = document.getElementById('primary-nav');

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


// Timeline dropdown (desktop)
const timelineDropdownItem = document.getElementById('timeline-dropdown');

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
