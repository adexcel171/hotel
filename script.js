// Room Data
const roomsData = {
  standard: {
    title: "Standard Room",
    price: "₦25,000",
    image: "./img/room1.jpg",
    description:
      "Our cozy Standard Room is perfect for solo travelers or couples seeking comfort and value. Featuring a comfortable queen-size bed, modern furnishings, and all essential amenities, this room provides everything you need for a pleasant stay. The room is tastefully decorated with warm tones and includes a work desk, making it suitable for both leisure and business travelers.",
    features: [
      { icon: "bed", text: "Queen Size Bed" },
      { icon: "users", text: "Sleeps 2 Guests" },
      { icon: "wifi", text: "Free High-Speed WiFi" },
      { icon: "tv", text: "Flat Screen TV" },
      { icon: "wind", text: "Air Conditioning" },
      { icon: "shower", text: "Private Bathroom" },
      { icon: "mug-hot", text: "Tea/Coffee Maker" },
      { icon: "concierge-bell", text: "Room Service Available" },
    ],
  },
  deluxe: {
    title: "Deluxe Room",
    price: "₦35,000",
    image: "./img/room2.jpg",
    description:
      "Experience enhanced comfort in our Deluxe Room, featuring upgraded amenities and more space. This room boasts a luxurious king-size bed, premium linens, a spacious work area, and a modern bathroom with upgraded fixtures. Perfect for guests who appreciate the finer details and extra space to relax after a busy day exploring Lagos.",
    features: [
      { icon: "bed", text: "King Size Bed" },
      { icon: "users", text: "Sleeps 2 Guests" },
      { icon: "wifi", text: "Free High-Speed WiFi" },
      { icon: "tv", text: "Smart TV with Netflix" },
      { icon: "wind", text: "Climate Control AC" },
      { icon: "bath", text: "Premium Bathroom Amenities" },
      { icon: "couch", text: "Seating Area" },
      { icon: "briefcase", text: "Work Desk & Chair" },
      { icon: "mug-hot", text: "Mini Bar" },
      { icon: "lock", text: "In-Room Safe" },
    ],
  },
  executive: {
    title: "Executive Suite",
    price: "₦50,000",
    image: "./img/room3.jpg",
    description:
      "Indulge in luxury with our Executive Suite, the crown jewel of Tee Dreams Suite & Apartment Hotel. This spacious suite features a separate living area, king-size bed, premium furnishings, and stunning city views. The elegant bathroom includes a bathtub for ultimate relaxation. Perfect for special occasions, extended stays, or guests who demand the very best in comfort and style.",
    features: [
      { icon: "bed", text: "Luxury King Bed" },
      { icon: "users", text: "Sleeps 2-3 Guests" },
      { icon: "couch", text: "Separate Living Room" },
      { icon: "tv", text: "2 Smart TVs" },
      { icon: "wifi", text: "Premium WiFi" },
      { icon: "wind", text: "Climate Control" },
      { icon: "bath", text: "Bathtub & Rain Shower" },
      { icon: "mug-hot", text: "Full Mini Bar" },
      { icon: "eye", text: "City Views" },
      { icon: "briefcase", text: "Executive Work Station" },
      { icon: "concierge-bell", text: "Priority Room Service" },
      { icon: "spa", text: "Complimentary Toiletries" },
    ],
  },
  family: {
    title: "Family Room",
    price: "₦45,000",
    image: "./img/room4.jpg",
    description:
      "Our spacious Family Room is designed with families in mind, offering comfort and convenience for everyone. With two queen-size beds, extra seating space, and child-friendly amenities, this room ensures a comfortable stay for the whole family. The room is thoughtfully laid out to provide privacy and relaxation for both parents and children.",
    features: [
      { icon: "bed", text: "2 Queen Size Beds" },
      { icon: "users", text: "Sleeps 4 Guests" },
      { icon: "child", text: "Child-Friendly Setup" },
      { icon: "wifi", text: "Free WiFi" },
      { icon: "tv", text: "Large Smart TV" },
      { icon: "wind", text: "Air Conditioning" },
      { icon: "couch", text: "Extra Seating Area" },
      { icon: "shower", text: "Spacious Bathroom" },
      { icon: "mug-hot", text: "Tea/Coffee Facilities" },
      { icon: "gamepad", text: "Kids Entertainment" },
    ],
  },
};

// Navigation
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Room Modal
const modal = document.getElementById("roomModal");
const modalClose = document.getElementById("modalClose");
const roomCards = document.querySelectorAll(".room-card");

roomCards.forEach((card) => {
  card.querySelector(".btn").addEventListener("click", (e) => {
    e.stopPropagation();
    const roomType = card.getAttribute("data-room");
    openRoomModal(roomType);
  });
});

function openRoomModal(roomType) {
  const room = roomsData[roomType];

  document.getElementById("modalImage").src = room.image;
  document.getElementById("modalTitle").textContent = room.title;
  document.getElementById("modalAmount").textContent = room.price;
  document.getElementById("modalDescription").textContent = room.description;

  const featuresHTML = room.features
    .map(
      (feature) => `
                <div class="modal-feature">
                    <i class="fas fa-${feature.icon}"></i>
                    <span>${feature.text}</span>
                </div>
            `
    )
    .join("");

  document.getElementById("modalFeatures").innerHTML = featuresHTML;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Contact Form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! We will get back to you soon.");
  e.target.reset();
});

// Testimonials rotation (simple version)
const testimonials = [
  {
    text: "Amazing experience! The staff were incredibly friendly and the rooms were spotless. Tee Dreams Suite & Apartment Hotel exceeded all my expectations. Will definitely return!",
    author: "Adebayo Johnson",
    role: "Business Traveler",
    avatar: "AD",
  },
  {
    text: "Perfect location and excellent service! The rooms are beautiful and very clean. The restaurant food was delicious. Highly recommend for anyone visiting Lagos.",
    author: "Chioma Okafor",
    role: "Tourist",
    avatar: "CO",
  },
  {
    text: "Best hotel experience in Lagos! The family room was spacious and comfortable. Staff went above and beyond to make our stay memorable. Five stars!",
    author: "Michael Adekunle",
    role: "Family Vacation",
    avatar: "MA",
  },
];

let currentTestimonial = 0;

function rotateTestimonials() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  const testimonial = testimonials[currentTestimonial];

  document.querySelector(
    ".testimonial-text"
  ).textContent = `"${testimonial.text}"`;
  document.querySelector(".author-avatar").textContent = testimonial.avatar;
  document.querySelector(".author-info h5").textContent = testimonial.author;
  document.querySelector(".author-info p").textContent = testimonial.role;

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentTestimonial);
  });
}

// Auto-rotate testimonials every 5 seconds
setInterval(rotateTestimonials, 5000);

// Manual dot navigation
document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentTestimonial = index;
    const testimonial = testimonials[currentTestimonial];

    document.querySelector(
      ".testimonial-text"
    ).textContent = `"${testimonial.text}"`;
    document.querySelector(".author-avatar").textContent = testimonial.avatar;
    document.querySelector(".author-info h5").textContent = testimonial.author;
    document.querySelector(".author-info p").textContent = testimonial.role;

    document.querySelectorAll(".dot").forEach((d, i) => {
      d.classList.toggle("active", i === index);
    });
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(
    ".feature-card, .room-card, .gallery-item, .amenity-item, .contact-card"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Keyboard navigation for modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

console.log("🏨 Tee Dreams Suite & Apartment Hotel Website - Fully Loaded!");
