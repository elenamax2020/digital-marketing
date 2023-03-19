  // Create an observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Get the lazy-content div
        const lazyDiv = entry.target;
        // Add the content to the div
        lazyDiv.innerHTML = lazyDiv.innerHTML + 'your content here';
        // Stop observing the div
        observer.unobserve(lazyDiv);
      }
    });
  });

  // Get all lazy-content divs
  const lazyDivs = document.querySelectorAll('.lazy-content');
  // Loop through all lazy-content divs
  lazyDivs.forEach((lazyDiv) => {
    // Start observing the div
    observer.observe(lazyDiv);
  });