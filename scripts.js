// Bounce effect on scroll for visible cards
const handleScroll = () => {
    const cards = document.querySelectorAll('.flavor-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            card.classList.add('bounce');
        } else {
            card.classList.remove('bounce');
        }
    });
};

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);
