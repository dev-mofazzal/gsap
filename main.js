var h1 = document.querySelector('h1');
var h1Text = h1.textContent;
var splittedText = h1Text.split('');

var breakText = '';
var halfVal = splittedText.length/2;
console.log(halfVal);

splittedText.forEach(function(ele, index){
    if(index < halfVal){
        breakText += `<span class="first">${ele}</span>`;
    }else{
        breakText += `<span class="last">${ele}</span>`;
    }
});

h1.innerHTML = breakText;

gsap.from(".first",{
    y: 30,
    duration: .6,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15
});

gsap.from(".last",{
    y: 30,
    duration: .6,
    delay: 0.5,
    opacity: 0,
    stagger: -0.15
})