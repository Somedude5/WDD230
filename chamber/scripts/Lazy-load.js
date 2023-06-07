// Lazy loading for images
const images = document.querySelectorAll(".gallery img");

const options = {
root: null,
rootMargin: "0px",
threshold: 0.1
};

const handleIntersection = (entries, observer) => {
entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
    observer.unobserve(entry.target);
    entry.target.src = entry.target.dataset.src;
    }
});
};

const observer = new IntersectionObserver(handleIntersection, options);

images.forEach((image) => {
observer.observe(image);
});

// Time Visited using Local Storage
const daysSinceLastVisit = Math.floor((Date.now() - localStorage.getItem("lastVisit")) / (1000 * 60 * 60 * 24));

localStorage.setItem("lastVisit", Date.now());

const timeVisitedElement = document.getElementById("time-visited");
timeVisitedElement.textContent = `Days since last visit: ${daysSinceLastVisit}`;