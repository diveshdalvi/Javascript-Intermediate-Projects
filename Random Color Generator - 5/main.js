const changeColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    document.querySelector("body").style.background = color 
}
let colorInverval;
document.querySelector("#start").addEventListener('click',function(){
    if(!colorInverval){
        colorInverval = setInterval(changeColor,1500);
    }
   
})

document.querySelector("#stop").addEventListener('click',function(){
    clearInterval(colorInverval);
    colorInverval = null;
})