var tl = gsap.timeline();

// header animation
tl.from('.logo, .nav-links li, .nav-right',{
    y: -20,
    duration: .5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15
});

// banner content
tl.from('.hero-title',{
    opacity: 0,
    x: -200,
    duration: .6
}, '-=0.5');

tl.from('.hero-desc',{
    opacity: 0,
    x: -150,
    duration: .5
});
tl.from('.hero-content .hero-btn',{
    y: 20,
    opacity:0,
    duration: .3
});
tl.from('.hero-illustration',{
    x: 300,
    opacity:0,
    duration: .8
}, "-=1");

// brand images
tl.from('.brands-track span',{
    opacity: 0,
    y: 50,
    duration: 0.5,
    stagger: 0.2
});


var stl = gsap.timeline({
    scrollTrigger:{
        trigger: '.services',
        scroller: 'body',
        markers: true,
        start: 'top 50%',
        end: 'top 0%',
        scrub: true
    }
});

stl.from('.services .section-header',{
    y: 30,
    opacity: 0,
    duration: 0.5
});

stl.from('.service-card.card-1',{
    opacity: 0,
    duration: 1
},'anim');

stl.from('.service-card.card-2',{
    opacity: 0,
    duration: 1
},'anim');

stl.from('.service-card.card-3',{
    opacity: 0,
    duration: 1
},'anim2');

stl.from('.service-card.card-4',{
    opacity: 0,
    duration: 1
},'anim2');