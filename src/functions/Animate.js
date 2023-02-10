function Animate(article) {      
    const observer = new IntersectionObserver(startAnimation);
    const options = { root: document, rootMargin: '0px', threshold: 0.1 }; 

    const elements = article.querySelectorAll('h2,.project-links');
    elements.forEach(el => {
        if (el.classList.contains('slideshow')) {
            return;
        }
        observer.observe(el, options);
    });
}

const startAnimation = (entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("animation-scale-project", entry.isIntersecting);
    });
};

export default Animate;