
document.addEventListener("DOMContentLoaded", () => {
// Get the path of the current page (e.g., "/contact.html")
const currentPagePath = window.location.pathname;
// Select all the links in the navigation
const navLinks = document.querySelectorAll('#navbar a');
// Loop through each link
navLinks.forEach(link => {
// Get the path from the link's href attribute
const linkPath = new URL(link.href).pathname;


// If the link's path matches the current page's path
if (currentPagePath === linkPath) {
  // Add the 'active' class to that link
  link.classList.add('active');
}
});
});