// Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-control.prev');
    const nextBtn = document.querySelector('.carousel-control.next');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    
    let currentIndex = 0;
    const totalItems = items.length;
    
    function showItem(index) {
        items.forEach(item => item.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        items[index].classList.add('active');
        indicators[index].classList.add('active');
        currentIndex = index;
    }
    
    function nextItem() {
        let newIndex = (currentIndex + 1) % totalItems;
        showItem(newIndex);
    }
    
    function prevItem() {
        let newIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(newIndex);
    }
    
    // Set up event listeners
    nextBtn.addEventListener('click', nextItem);
    prevBtn.addEventListener('click', prevItem);
    
    // Set up indicator buttons
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showItem(index));
    });
    
    // Auto-rotate carousel
    let carouselInterval = setInterval(nextItem, 5000);
    
    // Pause on hover
    carousel.addEventListener('mouseenter', () => clearInterval(carouselInterval));
    carousel.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(nextItem, 5000);
    });
    
    // Initialize reviews carousel
    const reviewsCarousel = document.querySelector('.reviews-carousel-inner');
    const reviewItems = document.querySelectorAll('.reviews-carousel-item');
    const reviewsPrevBtn = document.querySelector('.reviews-carousel-control.prev');
    const reviewsNextBtn = document.querySelector('.reviews-carousel-control.next');
    const reviewsIndicators = document.querySelectorAll('.reviews-carousel-indicators button');
    
    let reviewsCurrentIndex = 0;
    const reviewsTotalItems = reviewItems.length;
    
    function showReviewItem(index) {
        reviewItems.forEach(item => item.classList.remove('active'));
        reviewsIndicators.forEach(indicator => indicator.classList.remove('active'));
        
        reviewItems[index].classList.add('active');
        reviewsIndicators[index].classList.add('active');
        reviewsCurrentIndex = index;
    }
    
    function nextReviewItem() {
        let newIndex = (reviewsCurrentIndex + 1) % reviewsTotalItems;
        showReviewItem(newIndex);
    }
    
    function prevReviewItem() {
        let newIndex = (reviewsCurrentIndex - 1 + reviewsTotalItems) % reviewsTotalItems;
        showReviewItem(newIndex);
    }
    
    // Set up event listeners for reviews
    if (reviewsNextBtn) reviewsNextBtn.addEventListener('click', nextReviewItem);
    if (reviewsPrevBtn) reviewsPrevBtn.addEventListener('click', prevReviewItem);
    
    // Set up indicator buttons for reviews
    reviewsIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => showReviewItem(index));
    });
    
    // Auto-rotate reviews carousel
    let reviewsCarouselInterval = setInterval(nextReviewItem, 5000);
    
    // Pause on hover
    if (reviewsCarousel) {
        reviewsCarousel.addEventListener('mouseenter', () => clearInterval(reviewsCarouselInterval));
        reviewsCarousel.addEventListener('mouseleave', () => {
            reviewsCarouselInterval = setInterval(nextReviewItem, 5000);
        });
    }
    
    // Initialize all feather icons
    feather.replace();
});