gsap.from('#page1 #box',{
    scale: 0,
    opacity: 0,
    duration: 1,
    delay: .5,
    rotate: 360,
});

gsap.from("#page2 #box",{
    scale: 0,
    duration: 1,
    rotate: 360,
    scrollTrigger:{
        trigger: "#page2 #box",
        scroller: "body",
        markers: true, 
        start: "top 50%",
        scrub: 3
    }
});

gsap.from("#page2 h1", {
    x: 500,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2 h1",
        scroll: "body",
        markers: 1,
        start: "top 50%",
        end: "top 20%",
        scrub: 3,
    }
});

gsap.from("#page2 h2", {
    x: -500,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2 h2",
        markers: true,
        start: "top 50%",
        end: "top 20%",
        scroll: 'body',
        scrub: 3,
    }
})


gsap.to("#page3 h2", {
    transform: "translateX(-57%)",
    scrollTrigger:{
        trigger: "#page3",
        scroll: 'body',
        markers: true,
        pin: true,
        start: 'top 0%',
        end: 'top -200%',
        scrub: 5,
    }
})