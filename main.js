var closeEle = document.getElementById('close-icon');
var openEle = document.getElementById('menu-icon');
var overlay = document.getElementById('overlay');

// Initial logo animation (runs once on load)
gsap.from(".logo", {
    y: -40,
    opacity: 0,
    duration: 1,
});

// Shared close function
function closeSidebar() {
    // Fade out nav links first
    gsap.to('.nav-links li', {
        x: 150,
        opacity: 0,
        stagger: 0.1,
        duration: 0.3,
    });

    // Then slide sidebar out
    gsap.to('.sidebar', {
        right: '-400px',
        duration: 0.5,
        delay: 0.4,
        ease: "power2.in",
    });

    gsap.to(closeEle, {
        x: 0, opacity: 0
    });

    // Hide overlay
    overlay.classList.remove('active');
}

// Open sidebar
openEle.addEventListener('click', function () {
    // Show overlay
    overlay.classList.add('active');

    // Slide sidebar in
    gsap.to(".sidebar", {
        right: "0",
        duration: 0.5,
        ease: "power2.out",
    });

    // Animate nav links in
    gsap.fromTo('.nav-links li',
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.15, duration: 0.4, delay: 0.3 }
    );
    gsap.fromTo(closeEle,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.2, delay: 1 }
    )
});

// Close sidebar via close icon
closeEle.addEventListener('click', closeSidebar);

// Close sidebar via clicking outside (overlay)
overlay.addEventListener('click', closeSidebar);
