const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector("header ul");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });


 