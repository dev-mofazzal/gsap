window.addEventListener('wheel', function (event) {
    if (event.deltaY > 0) {
        gsap.to('.marquee', {
            transform: 'translateX(-200%)',
            duration: 2.5,
            ease: 'none',
            repeat: -1
        });
        gsap.to('.marquee i',{
            rotate: 180
        })
    } else {
        gsap.to('.marquee', {
            transform: 'translateX(0%)',
            duration: 2.5,
            ease: 'none',
            repeat: -1
        });
        gsap.to('.marquee i',{
            rotate: 0
        })
    }
})