document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const menuIcon = document.getElementById("menu-icon");
  
    menuToggle.addEventListener("click", function () {
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !isExpanded);
  
      if (isExpanded) {
        dropdownMenu.classList.remove("animate-slide-down");
        dropdownMenu.classList.add("animate-slide-up");
        setTimeout(() => {
          dropdownMenu.classList.add("hidden");
        }, 250);
      } else {
        dropdownMenu.classList.remove("hidden");
        dropdownMenu.classList.remove("animate-slide-up");
        setTimeout(() => {
          dropdownMenu.classList.add("animate-slide-down");
        }, 0);
      }
  
      if (isExpanded) {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
      } else {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
      }
    });
  
    document.addEventListener("click", function (event) {
      if (
        !dropdownMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        menuToggle.setAttribute("aria-expanded", "false");
        dropdownMenu.classList.remove("animate-slide-down");
        dropdownMenu.classList.add("animate-slide-up");
        setTimeout(() => {
          dropdownMenu.classList.add("hidden");
        }, 300);
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
      }
    });
  
    menuToggle.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        menuToggle.click();
      }
    });
  });
  