
// Make a  Intersection Observer instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // If the image is intersecting with the viewport
      if (entry.isIntersecting) {
        const img = entry.target
        const src = img.getAttribute('data-src')
  
        img.setAttribute('src', src)

        img.classList.add('loaded')
  
        observer.unobserve(img)
      }
    })
})
  
// Get all the actual images with the data-src attribute
  const images = document.querySelectorAll('img[data-src]')
  
  images.forEach(image => {
    observer.observe(image)
})
  