const fan = document.querySelector(".ceiling-fan");
const stringLeft = document.querySelector(".string-left");
const stringRight = document.querySelector(".string-right");
var power = 1;
var slide = 0;
var pull = 1;
var reverse01 = 0;
var stringPull = function(){
    console.log(pull);
    switch(pull)
    {
        case 0 : 
            fan.style.animationDuration = '0s';
            pull++;
            console.log(pull);
            break;
        case 1 :
            fan.style.animationDuration = '3s';
            pull++;
            console.log(pull);
            break;
        case 2 :
            fan.style.animationDuration = '2s';
            pull++;
            console.log(pull);
            break;
        case 3 :
            fan.style.animationDuration = '1s';
            pull = 0;
            console.log(pull);
    }
   
}


var stringRightPull = function(){
    if(reverse01 == 0)
    {
        fan.style.animationDirection = 'reverse'; 
        reverse01 = 1;
    }
    else if(reverse01 == 1)
    {
        fan.style.animationDirection = 'initial';
        reverse01 = 0;
    }
}

stringLeft.addEventListener("dragstart",()=>{
    console.log(stringLeft.children[0].children[0].className)
    stringLeft.children[0].children[0].style.top = '0';
    stringLeft.children[0].children[1].style.bottom = '-12px';
    stringPull();


})
stringLeft.addEventListener("dragend",()=>{
    stringLeft.children[0].children[0].style.top = '-25px';
    stringLeft.children[0].children[1].style.bottom = '15px';
})

stringRight.addEventListener("dragstart",()=>{
    stringRight.children[0].children[0].style.top = '0';
    stringRight.children[0].children[1].style.bottom = '-12px';
    stringRightPull();
})
stringRight.addEventListener("dragend",()=>{
    stringRight.children[0].children[0].style.top = '-25px';
    stringRight.children[0].children[1].style.bottom = '15px';
})

