var cursorWrap = document.querySelector('body');
var cursorEle = document.querySelector('.cursor');
var imageEle = document.querySelector('.image-wrap');

cursorWrap.addEventListener('mousemove', function(ele){
    gsap.to(cursorEle,{
        x:ele.x,
        y:ele.y,
        duration: 0.5,
    })
})
imageEle.addEventListener('mouseenter',function(ele){
    cursorEle.innerHTML = 'View More';
    gsap.to(cursorEle,{
        scale: 4,
        duration: .5,
    })
});
imageEle.addEventListener('mouseleave',function(ele){
    cursorEle.innerHTML = '';
    gsap.to(cursorEle,{
        scale: 1,
        duration: .5,
    })
})