var initialPath = 'M 0 100 Q 250 100 1500 100';
var finalPath = 'M 0 100 Q 250 100 1500 100';

var containerEle = document.querySelector('.container');

containerEle.addEventListener('mousemove', function (ele) {
    path = `M 0 100 Q ${ele.x} ${ele.y} 1500 100`;
    console.log(path);
    gsap.to('.container path', {
        attr: { d: path },
        duration: .3,
        ease: "power3.out",
    })
});

containerEle.addEventListener('mouseleave', function () {
    gsap.to('.container path', {
        attr: { d: finalPath },
        ease: "elastic.out(1,0.1)",
        duration: 1.5,
    })
})