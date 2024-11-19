(function (){
    var html=document.querySelector('html');
html.style.filter='invert(1) hue-rotate(180deg)';
let media=document.querySelectorAll('img,video,picture');
media.forEach((element) => {
    element.style.filter='invert(1) hue-rotate(180deg)';
})})();