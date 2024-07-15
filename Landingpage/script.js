// Select all navigation links
const navLink = document.querySelectorAll('.nav_link');

// Function to handle active link state
function linkAct() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}

// Add event listener to each navigation link
navLink.forEach(n => n.addEventListener('click', linkAct));

// GSAP animations for the sweet shop project
TweenMax.from('.left_menu', 1, {
    delay: 2.5,
    opacity: 0,
    x: -50,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom('.nav_links_content ul li', 1, {
    delay: 3,
    opacity: 0,
    x: 100,
    ease: Expo.easeInOut
}, 0.08);

TweenMax.from('.search_icon', 1, {
    delay: 2.5,
    opacity: 0,
    x: -50,
    ease: Expo.easeInOut
});

TweenMax.from('.larger_text_content', 1, {
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
});

TweenMax.from('.desc_content', 1, {
    delay: 3,
    opacity: 0,
    x: 100,
    ease: Expo.easeInOut
});

// Overlay animation
TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut
});

TweenMax.to('.overlay span', 2, {
    delay: 0.3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
});

TweenMax.to('.overlay h1', 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
});
