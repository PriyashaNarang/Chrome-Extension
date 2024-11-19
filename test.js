if(document.querySelector('.main')){
const but=document.querySelector('.button');
const circle=document.querySelector('.circle');
var buton=false;
but.addEventListener("click",()=>{
    if(!buton)
    {
        buton=true;
        circle.style.animation='movementright 1s forwards';
        but.style.animation='change 1s forwards';
        chrome.tabs.executeScript({
            file: 'appon.js'
        })
    }
    else
    {
        buton=false;
        circle.style.animation='movementleft 1s forwards';
        but.style.animation='changeviceversa 1s forwards';
        chrome.tabs.executeScript({
            file: 'appoff.js'
        })
    }
})
}