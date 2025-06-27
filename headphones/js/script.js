const menuButton = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");
menuButton.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  // body.classList.toggle("no-scroll");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    header.classList.remove("nav-open");
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to the top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to section
    if (href !== "#" && href.startsWith("#")) {
      const sectionId = href.substring(1); // Remove the '#' from href
      const sectionEl = document.getElementById(sectionId);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", function (e) {
  header.classList.remove("nav-open");
  e.preventDefault();
  const formAction = document.querySelector("form").getAttribute("action");
  if (formAction === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
});
