// ================== SHOW MENU ================== //

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ================== LINK CLICK REMOVE MENU ================== //

const navLink = document.querySelectorAll(".nav-link");

const linkClicked = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((link) => link.addEventListener("click", linkClicked));

// ================== SHADOW HEADER ================== //

const shadowHeader = () => {
  const header = document.getElementById("header");

  // When the scroll is greater than 50 viewport height , add the class
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

window.addEventListener("scroll", shadowHeader);

// ================== EMAILJS ================== //

const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceId - templateId - #form - publicKey

  emailjs
    .sendForm(
      "service_q0kje9x",
      "contact_form",
      "#contact-form",
      "_MR7782eHiYnFhRxm"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully ✔️";

        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 850
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 68,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById("theme-button");
const aboutImg = document.querySelector(".about-img");
const colorSplash = document.querySelector(".color-splash");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";
const lightImg = "assets/light-portfolio-img.jpg";
const darkImg = "assets/dark-portfolio-img.jpg";
const lightSplash = "assets/color-splash-light.png";
const darkSplash = "assets/color-splash-dark.png";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class

const getCurrentTheme = () => {
  return document.body.classList.contains(darkTheme) ? "dark" : "light";
};

const getCurrentIcon = () => {
  return themeButton.classList.contains(iconTheme)
    ? "ri-moon-line"
    : "ri-sun-line";
};

// We validate if the user previously chose a theme

if (selectedTheme) {
  // If the validation is fulfilled , we ask what the issue was to know if we activated or deactivated the dark theme
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );

  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button

const toggleTheme = () => {
  // Add or remove dark theme & icon

  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  // Swiching between light & dark img and color splash

  aboutImg.src = document.body.classList.contains(darkTheme)
    ? darkImg
    : lightImg;
  colorSplash.src = document.body.classList.contains(darkTheme)
    ? darkSplash
    : lightSplash;

  // We save the theme and the current icon that the user chose

  localStorage.setItem("selected-item", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
};

themeButton.addEventListener("click", toggleTheme);

// /*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1000,
  delay: 100,
});

sr.reveal(`.about-image, .contact-mail`, { origin: "right" });
sr.reveal(
  `.home-name, .home-title, 
             .about-title, .section-title-1, .about-body,
             .contact-social, .contact-data`,
  { origin: "left" }
);
sr.reveal(`.skills-card, .projects-card`, { interval: 50 });
sr.reveal(` .section-title-2`);
