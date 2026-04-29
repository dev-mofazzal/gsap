var closeEle = document.getElementById('close-icon');
var openEle = document.getElementById('menu-icon');
var overlay = document.getElementById('overlay');
var tl = gsap.timeline();

gsap.from(".logo", {
    y: -40,
    opacity: 0,
    duration: 1,
});

tl.to('.sidebar', {
    right: 0,
});

tl.from('.nav-links li', {
    x: 150,
    opacity: 0,
    stagger: 0.1,
});


tl.from('#close-icon i', {
    opacity: 0
});

tl.pause();


openEle.addEventListener('click', function () {
    tl.play();
})

closeEle.addEventListener('click', function () {
    tl.reverse();
})