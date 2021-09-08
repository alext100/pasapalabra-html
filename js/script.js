let letrasSpans = document.getElementsByTagName("span");
let squares = document.querySelectorAll(".block");
let r = "";
let letraAngle = 270;
let blockAngle = 90;

console.log('squares: ', squares);
console.log('letrasSpans: ', letrasSpans);

Array.from(letrasSpans).forEach(item => {
    r = "rotate(" + letraAngle + "deg)";
    console.log('r: ', r);
    item.style.transform = r;
    letraAngle -= 13.3333;
});

Array.from(squares).forEach(item => {
    r = "rotate(" + blockAngle + "deg)";
    console.log('r: ', r);
    item.style.transform = r;
    blockAngle += 13.3333;
})