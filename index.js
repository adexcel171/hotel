document.addEventListener("DOMContentLoaded", function () {
  // Ensure API_BASE is correct
  window.API_BASE = "https://tee dreams suite & apartmenthotel.onrender.com";

  function showModal(element) {
    const service = element.querySelector("h3").textContent;
    const price = element.querySelector(".service-price").textContent;
    const modalService = document.getElementById("modalService");
    const modalPrice = document.getElementById("modalPrice");
    const modal = document.getElementById("paymentModal");
    if (modalService && modalPrice && modal) {
      modalService.textContent = service;
      modalPrice.textContent = price;
      modal.style.display = "flex";
    }
  }

  const closeModal = document.getElementById("modalClose");
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      const modal = document.getElementById("paymentModal");
      if (modal) modal.style.display = "none";
    });
  }

  window.addEventListener("click", (event) => {
    const modal = document.getElementById("paymentModal");
    if (event.target === modal && modal) {
      modal.style.display = "none";
    }
  });

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });

  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.querySelector(".lightbox");
  const lightboxContent = document.querySelector(".lightbox-content");
  const lightboxClose = document.querySelector(".lightbox-close");

  if (galleryItems.length && lightbox && lightboxContent && lightboxClose) {
    galleryItems.forEach((item) => {
      item.addEventListener("click", () => {
        const media = item.querySelector("img") || item.querySelector("video");
        if (media) {
          lightboxContent.innerHTML = media.outerHTML;
          lightbox.classList.add("active");
          const mediaElement = lightboxContent.querySelector("img, video");
          if (mediaElement) mediaElement.style.display = "block";
        }
      });
    });

    lightboxClose.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.classList.remove("active");
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  document.querySelectorAll(".service-item").forEach((item) => {
    item.addEventListener("click", () => {
      showModal(item);
    });
  });
});
