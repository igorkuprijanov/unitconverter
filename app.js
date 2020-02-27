document.getElementById('output').style.visibility = 'hidden';
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');

let option1 = document.getElementById('btn1-first');
let option2 = document.getElementById('btn1-second');
let option3 = document.getElementById('btn1-third');
let option4 = document.getElementById('btn1-fourth');

let weight = document.getElementById('btn2-first');
let length = document.getElementById('btn2-second');
let temperature = document.getElementById('btn2-third');

document.getElementById("input").addEventListener('input',function(e){
    document.getElementById('output').style.visibility = 'visible';
    let amount = e.target.value;
    if(btn1.innerHTML === "Pounds"){
    document.getElementById("output1").innerHTML = amount/0.0022046;
    document.getElementById("output2").innerHTML = amount/2.2046;
    document.getElementById("output3").innerHTML = amount*16;
    card1.innerHTML = "Grams";
    card2.innerHTML = "Kilograms";
    card3.innerHTML = "Ounces";
}
    if(btn1.innerHTML === "Grams"){
    document.getElementById("output1").innerHTML = amount/1000;
    document.getElementById("output2").innerHTML = amount/453.59237;
    document.getElementById("output3").innerHTML = amount*0.035274;
    card1.innerHTML = "Kilograms";
    card2.innerHTML = "Pounds";
    card3.innerHTML = "Ounces";
}
    if(btn1.innerHTML === "Kilograms"){
    document.getElementById("output1").innerHTML = amount*1000;
    document.getElementById("output2").innerHTML = amount*2.2046;
    document.getElementById("output3").innerHTML = amount/0.02834952;
    card1.innerHTML = "Grams";
    card2.innerHTML = "Pounds";
    card3.innerHTML = "Ounces";
}
     if(btn1.innerHTML === "Ounces"){
    document.getElementById("output1").innerHTML = amount*28,35;
    document.getElementById("output2").innerHTML = amount/35,274;
    document.getElementById("output3").innerHTML = amount/16;
    card1.innerHTML = "Grams";
    card2.innerHTML = "Kilograms";
    card3.innerHTML = "Pounds";
}
    if(btn1.innerHTML === "Centimeter"){
    document.getElementById("output1").innerHTML = amount/100;
    document.getElementById("output2").innerHTML = amount/2,54;
    document.getElementById("output3").innerHTML = amount/30,48;
    card1.innerHTML = "Meters";
    card2.innerHTML = "Inches";
    card3.innerHTML = "Feet";
}
    if(btn1.innerHTML === "Meter"){
    document.getElementById("output1").innerHTML = amount*100;
    document.getElementById("output2").innerHTML = amount*39,37;
    document.getElementById("output3").innerHTML = amount*3,281;
    card1.innerHTML = "Centimeters";
    card2.innerHTML = "Inches";
    card3.innerHTML = "Feet";
}
    if(btn1.innerHTML === "Inch"){
    document.getElementById("output1").innerHTML = amount*2,54;
    document.getElementById("output2").innerHTML = amount/39,37;
    document.getElementById("output3").innerHTML = amount/12
;
    card1.innerHTML = "Centimeters";
    card2.innerHTML = "Meters";
    card3.innerHTML = "Feet";
}
    if(btn1.innerHTML === "Foot"){
    document.getElementById("output1").innerHTML = amount*30,48;
    document.getElementById("output2").innerHTML = amount/3,281;
    document.getElementById("output3").innerHTML = amount*12;
    card1.innerHTML = "Centimeters";
    card2.innerHTML = "Meters";
    card3.innerHTML = "Inches";
}
    
    
    if(btn1.innerHTML === "Kelvin"){
    document.getElementById("output1").innerHTML = amount-273.15;
    document.getElementById("output2").innerHTML = amount-273.15*9/5+32;
    document.getElementById("output3").innerHTML = amount*1.8;
    card1.innerHTML = "Celsius";
    card2.innerHTML = "Fahrenheit";
    card3.innerHTML = "Rankine";
}
      if(btn1.innerHTML === "Celsius"){
    document.getElementById("output1").innerHTML = Number(amount)+273.15;
    document.getElementById("output2").innerHTML = amount*9/5+32;
    document.getElementById("output3").innerHTML = amount*9/5+491.67;
    card1.innerHTML = "Kelvin";
    card2.innerHTML = "Fahrenheit";
    card3.innerHTML = "Rankine";
}
      if(btn1.innerHTML === "Fahrenheit"){
    document.getElementById("output1").innerHTML = amount-32*5/9+273.15;
    document.getElementById("output2").innerHTML = amount-32*5/9;
    document.getElementById("output3").innerHTML = amount+459.67;
    card1.innerHTML = "Kelvin";
    card2.innerHTML = "Celsius";
    card3.innerHTML = "Rankine";
}
      if(btn1.innerHTML === "Rankine"){
    document.getElementById("output1").innerHTML = amount*5/9;
    document.getElementById("output2").innerHTML = amount-491.67 * 5/9;
    document.getElementById("output3").innerHTML = amount-459.67;
    card1.innerHTML = "Kelvin";
    card2.innerHTML = "Celsius";
    card3.innerHTML = "Fahrenheit";
} 
});
                            
weight.addEventListener('click', function(){
    btn2.innerHTML = weight.innerHTML;
    checkWeight();
});

length.addEventListener('click', function(){
    btn2.innerHTML = length.innerHTML;
    checkLenght();
});

temperature.addEventListener('click', function(){
    btn2.innerHTML = temperature.innerHTML;
    checkTemp();
});

option1.addEventListener('click', function(){
    btn1.innerHTML = option1.innerHTML;
});

option2.addEventListener('click', function(){
    btn1.innerHTML = option2.innerHTML;
});

option3.addEventListener('click', function(){
    btn1.innerHTML = option3.innerHTML;
});

option4.addEventListener('click', function(){
    btn1.innerHTML = option4.innerHTML;
});

function checkWeight(){                          
if(btn2.innerHTML === "Weight"){
    console.log('weight');
    option1.innerHTML = "Pounds"
   option2.innerHTML = "Grams"
   option3.innerHTML = "Kilograms"
    option4.innerHTML = "Ounces"
}                
}

function checkLenght(){
    if(btn2.innerHTML === "Length"){
       console.log('length');
    option1.innerHTML = "Centimeter"
   option2.innerHTML = "Meter"
   option3.innerHTML = "Inch"
    option4.innerHTML = "Foot"
       }
}

function checkTemp(){
    if(btn2.innerHTML === "Temperature"){
       console.log('temperature');
    option1.innerHTML = "Kelvin"
   option2.innerHTML = "Celsius"
   option3.innerHTML = "Fahrenheit"
    option4.innerHTML = "Rankine"
       }
}