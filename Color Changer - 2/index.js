const buttons = document.querySelectorAll("span")
const body = document.querySelector("body")


buttons.forEach(function (button) {
    button.addEventListener("click",function(e){
        // if(btnClicked == "pink"){
        //     body.style.backgroundColor = "pink"
        // }
        // else  if(btnClicked == "yellow"){
        //     body.style.backgroundColor = "yellow"
        // }
        // else  if(btnClicked == "brown"){
        //     body.style.backgroundColor = "brown"
        // }
        // else  if(btnClicked == "grey"){
        //     body.style.backgroundColor = "grey"
        // }
        
        // Simple Way 
        body.style.backgroundColor = e.target.id
    })
})

