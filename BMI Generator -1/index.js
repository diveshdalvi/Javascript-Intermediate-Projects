const btn = document.querySelector("#calculateBtn");

// const  heightValue = Number(heightBox.value)
// const  weightValue = Number(weightBox.value)
btn.addEventListener("click",function(){
    const heightBox = document.querySelector("#heightBox");
    const weightBox = document.querySelector("#weightBox");
    const result = document.querySelector("#result")
    height = parseInt(heightBox.value);
    weight = parseInt(weightBox.value);
    if(height , weight){
        const heightInM = height/100
        const bmiValue = (weight / (heightInM*heightInM)).toFixed(2)
        result.innerHTML = `Your BMI value is : ${bmiValue} Kg/m<sup>2`
    }
    else{
        result.innerHTML = "Please Enter Correct Value"
    }
    
})