
window.addEventListener('load', function() {
  // Define the target element
const targetElement = document.querySelector('#dynamic-image');

// Define the observer options
const observerOptions = {
  rootMargin: '0px',
  threshold: 0.5
};

// Define the observer callback function
const observerCallback = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add a class to the dynamic image container to trigger the animation
      targetElement.classList.add('dynamic-image-visible');
      // Disconnect the observer since we only need to show the image once
      observer.disconnect();
    }
  });
};

// Create a new Intersection Observer instance and start observing the target element
const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(targetElement);

  const dynamicContent = document.querySelector('.dynamic-content');
const staticContent = document.querySelector('.static-content');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  dynamicContent.style.transform = `translateY(-${scrolled}px)`;
  staticContent.style.transform = `translateY(${scrolled}px)`;
});
});