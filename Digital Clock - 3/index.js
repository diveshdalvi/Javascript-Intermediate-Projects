const clock = document.getElementById("clock");


setInterval(function(){
    let date = new Date();
    let now = date.toLocaleTimeString();
    clock.innerHTML = now; 
},1000)