$(document).ready(function() {
  // Carousel for project images
  const imagesContainer = document.querySelector('.project-images');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const indicators = document.querySelectorAll('.scroll-indicators .indicator');

  if (imagesContainer) {
      // Scroll event listener with wheel
      imagesContainer.addEventListener('wheel', (e) => {
          e.preventDefault();
          imagesContainer.scrollLeft += e.deltaY;
          updateIndicators();
      });

      // Previous button functionality
      if (prevButton) {
          prevButton.addEventListener('click', () => {
              imagesContainer.scrollBy({
                  left: -imagesContainer.clientWidth, // Move left by the width of the container
                  behavior: 'smooth' // Smooth scroll animation
              });
              setTimeout(updateIndicators, 500); // Update after animation delay
          });
      }

      // Next button functionality
      if (nextButton) {
          nextButton.addEventListener('click', () => {
              imagesContainer.scrollBy({
                  left: imagesContainer.clientWidth, // Move right by the width of the container
                  behavior: 'smooth' // Smooth scroll animation
              });
              setTimeout(updateIndicators, 500); // Update after animation delay
          });
      }

      // Handle indicator clicks
      indicators.forEach((indicator, index) => {
          indicator.addEventListener('click', () => {
              imagesContainer.scrollTo({
                  left: index * imagesContainer.clientWidth,
                  behavior: 'smooth'
              });
              setTimeout(updateIndicators, 500); // Update after animation delay
          });
      });

      // Function to update the active indicator
      function updateIndicators() {
          const totalWidth = imagesContainer.scrollWidth - imagesContainer.clientWidth;
          const scrollLeft = imagesContainer.scrollLeft;

          indicators.forEach((indicator, index) => {
              const indicatorPos = (index / (indicators.length - 1)) * totalWidth;
              indicator.classList.toggle('active', scrollLeft >= indicatorPos && scrollLeft < indicatorPos + (totalWidth / indicators.length));
          });
      }

      // Update indicators on load
      updateIndicators();
  }
});
