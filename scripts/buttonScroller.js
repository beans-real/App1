// Auto-scrolling 88x31 button animation
function initButtonScroller() {
    const container = document.querySelector('.button88x31Container');
    if (!container) return;
    
    const scroller = container.querySelector('.button88x31Scroller');
    if (!scroller) return;
    
    // Clone the images to create seamless loop
    const images = scroller.querySelectorAll('img');
    images.forEach(img => {
        const clone = img.cloneNode(true);
        scroller.appendChild(clone);
    });
    
    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const scrollWidth = scroller.scrollWidth / 2; // Half because we duplicated
    
    function scroll() {
        scrollPosition += scrollSpeed;
        
        // Reset to beginning when we've scrolled through the original set
        if (scrollPosition >= scrollWidth) {
            scrollPosition = 0;
        }
        
        container.scrollLeft = scrollPosition;
        requestAnimationFrame(scroll);
    }
    
    // Start the animation
    requestAnimationFrame(scroll);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initButtonScroller);
} else {
    initButtonScroller();
}
