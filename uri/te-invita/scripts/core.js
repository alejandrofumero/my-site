document.body.style.overflow = "hidden";
window.addEventListener("load", function () {
  document.body.style.overflowY = "auto";
  const arrow = document.querySelector("#scroll-down");
  arrow.style.display = "block";
});
// Define the pview element
const pview = document.querySelector("#parallax-view");
const pbg = document.querySelector("#parallax-bg");

// Define the pview element

// Define the options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin
  threshold: 0, // When even a single pixel is in view
};

let isIntersecting = false; // To track if the pview is in view

// Callback function to handle the intersection
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // The pview element is in view
      isIntersecting = true;
    } else {
      // The pview element is out of view
      isIntersecting = false;
    }
  });
}

// Create the Intersection Observer
const observer = new IntersectionObserver(handleIntersect, options);

// Start observing the pview element
observer.observe(pview);

// Function to handle scroll and apply offset
function handleScroll() {
  if (isIntersecting) {
    const scrollOffset = window.scrollY * 0.3;
    // Apply an offset based on the scroll position
    pbg.style.transform = `translateY(${scrollOffset}px)`;
  }
}

// Add a scroll event listener
window.addEventListener("scroll", handleScroll);

gsap.registerPlugin(ScrollTrigger);
var titles = gsap.utils.toArray(".title");

titles.forEach((title) => {
  gsap.to(title, {
    scrollTrigger: {
      scrub: 1,
      trigger: title,
      start: "top 80%",
      end: "+=200",
    },
    opacity: 1,
    y: -50,
  });
});
var images = gsap.utils.toArray(".spin");
images.forEach((image) => {
  gsap.to(image, {
    scrollTrigger: {
      scrub: 1,
      trigger: image,
      start: "top bottom",
      end: "center top",
    },
    ease: "power3.out",
    scale: 1,
    rotate: 95,
  });
});
