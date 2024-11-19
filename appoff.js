function appoff(){
var html=document.querySelector('html');
html.style.filter="invert(0) hue-rotate(0deg)";
let media=document.querySelectorAll('img,video,picture');
media.forEach((element)=>{
    element.style.filter='invert(0) hue-rotate(0deg)';
})}
appoff();