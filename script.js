const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const servicesParentLink = document.querySelector(".services-parent-link");
const servicesSubmenu = document.querySelector(".submenu");

if (servicesParentLink && servicesSubmenu) {
  servicesParentLink.addEventListener("click", (event) => {
    if (window.innerWidth < 760) {
      event.preventDefault();
      servicesSubmenu.classList.toggle("open");
    }
  });
}

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

const whatsappLink = document.createElement("a");
whatsappLink.className = "whatsapp-float";
whatsappLink.href = "https://wa.me/447478681783";
whatsappLink.target = "_blank";
whatsappLink.rel = "noopener noreferrer";
whatsappLink.setAttribute("aria-label", "Chat on WhatsApp");
whatsappLink.innerHTML = `
  <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M19.11 17.47c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.33-.79-.7-1.32-1.56-1.47-1.82-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.47.07-.72.34-.24.27-.94.92-.94 2.24s.97 2.6 1.11 2.78c.14.18 1.9 2.9 4.62 4.07.65.28 1.16.45 1.56.58.66.21 1.27.18 1.75.11.53-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.31z"
    ></path>
    <path
      fill="currentColor"
      d="M16.03 3.2c-7.05 0-12.77 5.72-12.77 12.78 0 2.24.58 4.43 1.68 6.36L3 29l6.83-1.79a12.73 12.73 0 0 0 6.2 1.59h.01c7.05 0 12.77-5.72 12.77-12.78 0-3.42-1.33-6.63-3.75-9.05a12.67 12.67 0 0 0-9.03-3.77zm0 23.43h-.01c-1.88 0-3.72-.5-5.33-1.44l-.38-.23-4.05 1.06 1.08-3.95-.25-.41a10.62 10.62 0 0 1-1.63-5.64c0-5.9 4.79-10.7 10.68-10.7 2.84 0 5.5 1.11 7.51 3.12a10.62 10.62 0 0 1 3.12 7.57c0 5.9-4.8 10.7-10.69 10.7z"
    ></path>
  </svg>
`;

document.body.appendChild(whatsappLink);
