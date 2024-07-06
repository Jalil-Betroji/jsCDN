document
  .getElementById("WhatsappBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const dateRange = document.getElementById("dateRange").value;
    const whatsappNumber = "32495362065";
    const message = `Bonjour, je voudrais réserver la villa pour les dates suivantes: ${dateRange}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      message
    )}`;
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 100);
  });

document.getElementById("email").addEventListener("click", function (event) {
  event.preventDefault();
  const dateRange = document.getElementById("dateRange").value;
  const email = "contact@villalerocher.com";
  const subject = "Réservation de Villa";
  const body = `Bonjour,\n\nJe voudrais réserver la villa pour les dates suivantes: ${dateRange}\n\nCordialement,\n[Votre Nom]`;
  const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  setTimeout(() => {
    window.open(mailtoUrl, "_blank");
  }, 100);
});

document
  .getElementsByClassName("WhatsappBtn")[0]
  .addEventListener("click", function (event) {
    event.preventDefault();
    const dateRange = document.getElementsByClassName("dateRange")[0].value;
    const whatsappNumber = "32495362065"; // Use the number without plus sign and formatted correctly
    const message = `Bonjour, je voudrais réserver la villa pour les dates suivantes: ${dateRange}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
      message
    )}`;
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 100);
  });

document
  .getElementsByClassName("email")[0]
  .addEventListener("click", function (event) {
    event.preventDefault();
    const dateRange = document.getElementsByClassName("dateRange")[0].value;
    const email = "locationsraretanger@gmail.com";
    const subject = "Réservation de Villa";
    const body = `Bonjour,\n\nJe voudrais réserver la villa pour les dates suivantes: ${dateRange}\n\nCordialement,\n[Votre Nom]`;
    const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      email
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => {
      window.open(mailtoUrl, "_blank");
    }, 100);
  });

var modal = document.getElementById("myModal");

var btn = document.getElementById("openModalBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

var reservationBtn = document.getElementById("resevationBtn");

var reservationModal = document.getElementById("reservationModal");

var reservationSpan = document.getElementsByClassName("reservationClose")[0];

reservationBtn.onclick = function () {
  reservationModal.style.display = "block";
};

reservationSpan.onclick = function () {
  reservationModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == reservationModal) {
    reservationModal.style.display = "none";
  }
};

document.getElementById("read-more").addEventListener("click", function () {
  var moreContent = document.getElementById("more-content");
  var readLessBtn = document.getElementById("read-less");
  readLessBtn.classList.remove("hidden");
  readLessBtn.style.display = "block";
  moreContent.classList.toggle("hidden");
  this.style.display = "none";
});
document.getElementById("read-less").addEventListener("click", function () {
  var moreContent = document.getElementById("more-content");
  var readMoreBtn = document.getElementById("read-more");
  moreContent.classList.add("hidden");
  readMoreBtn.style.display = "block";
  this.style.display = "none";
});

// animate the modal navigation

const interieurBtn = document.getElementById("interieurBtn");
const exterieurBtn = document.getElementById("exterieurBtn");
const bonBtn = document.getElementById("bonBtn");
const settingBtn = document.getElementById("settingBtn");

const interieurDiv = document.getElementById("interieur");
const exterieurDiv = document.getElementById("exterieur");
const bonASavoirDiv = document.getElementById("bonASavoir");
const settingDiv = document.getElementById("setting");

interieurBtn.addEventListener("click", function () {
  // hide the element
  exterieurDiv.classList.add("hidden");
  bonASavoirDiv.classList.add("hidden");
  settingDiv.classList.add("hidden");
  // toggle the active class
  exterieurBtn.classList.remove("active");
  bonBtn.classList.remove("active");
  settingBtn.classList.remove("active");
  // hide the element
  interieurDiv.classList.remove("hidden");
  interieurBtn.classList.add("active");
});
exterieurBtn.addEventListener("click", function () {
  // hide the element
  interieurDiv.classList.add("hidden");
  bonASavoirDiv.classList.add("hidden");
  settingDiv.classList.add("hidden");
  // toggle the active class
  interieurBtn.classList.remove("active");
  bonBtn.classList.remove("active");
  settingBtn.classList.remove("active");
  // show the element
  exterieurDiv.classList.remove("hidden");
  exterieurBtn.classList.add("active");
});
bonBtn.addEventListener("click", function () {
  // hide the element
  interieurDiv.classList.add("hidden");
  exterieurDiv.classList.add("hidden");
  settingDiv.classList.add("hidden");
  // toggle the active class
  interieurBtn.classList.remove("active");
  exterieurBtn.classList.remove("active");
  settingBtn.classList.remove("active");
  // show the element
  bonASavoirDiv.classList.remove("hidden");
  bonBtn.classList.add("active");
});
settingBtn.addEventListener("click", function () {
  // hide the element
  interieurDiv.classList.add("hidden");
  exterieurDiv.classList.add("hidden");
  bonASavoirDiv.classList.add("hidden");
  // toggle the active class
  interieurBtn.classList.remove("active");
  bonBtn.classList.remove("active");
  exterieurBtn.classList.remove("active");
  // show the element
  settingDiv.classList.remove("hidden");
  settingBtn.classList.add("active");
});

// Testimonials slide logic

const slides = document.querySelectorAll(".slide");
const navigationDots = document.querySelectorAll(".navigation");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let currentIndex = 0;

const updateSlides = () => {
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index === currentIndex) {
      slide.classList.add("active");
    }
  });
  navigationDots.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === currentIndex) {
      dot.classList.add("active");
    }
  });
};

const showNextSlide = () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlides();
};

const showPrevSlide = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlides();
};

next.addEventListener("click", showNextSlide);
prev.addEventListener("click", showPrevSlide);

navigationDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlides();
  });
});

setInterval(showNextSlide, 5000); // Auto-play interval

// responsive menu logic

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
const reviewsDisplay = document.getElementById("reviewsDisplay");
reviewsDisplay.addEventListener("click", (e) => {
  e.preventDefault();
  hideSidebar();
  window.location.href = "#Témoignages";
});
