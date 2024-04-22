const prompt = require('prompt-sync')();
function WhoAreYou (){
  let name = prompt("What is your name?");
  let age = prompt("How old are you?")
  age = parseInt(age);
  let hobby = prompt("What is your hobby?")
  console.log("Hello "+name+", you are "+age+" years old and your favourite hobby is "+hobby);
}
function tax (){
    let totalMoney = prompt("What is the total money that you pay for?")
    let tax = 1.13*totalMoney;
    console.log("You need to pay a total amount of $"+tax.toFixed(2)+" after tax.");
}
function pythagorean(){
  let legA=prompt("What is the length of leg A?");
  let legB=prompt("What is the length of leg B?");
  let hypotenuse=prompt("What is the length of the hypotenuse?");
  if (legA==false&&legB!=false&&hypotenuse!=false&&hypotenuse>legB){
    console.log("The length of leg A is: "+Math.sqrt(hypotenuse*hypotenuse-legB*legB))
  }  
  if (legB==false&&legA!=false&&hypotenuse!=false&&hypotenuse>legA){
    console.log("The length of leg B is: "+Math.sqrt(hypotenuse*hypotenuse-legA*legA))
  }  
  if (hypotenuse==false&&legA!=false&&legB!=false){
    console.log("The length of hypotenuse is: "+Math.sqrt(legB*legB+legA*legA))
  }  
  if(hypotenuse!=false&&legA!=false&&legB!=false){
    if (legA*legA+legB*legB==hypotenuse*hypotenuse){
      console.log("That is a right-angled triangle.");
    }
    else{
        console.log("That is not a right-angled triangle.")
    }
  }
}
function calculator (){
    let num1 = prompt("What is the first number?");
    let operator = prompt("What is the operator? Choose from "+", "-", "*", "/", "^", sqrt, log, sin, cos, tan");
    if (operator=="+"||operator=="-"||operator=="*"||operator=="/"||operator=="^"){
    let num2 = prompt("What is the second number?");
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operator=="+"){
        console.log("The answer is: "+(num1+num2));
    }
    if (operator=="-"){
        console.log("The answer is: "+(num1-num2));
    }
    if (operator=="*"){
        console.log("The answer is: "+(num1*num2));
    }
    if (operator=="/"){
        console.log("The answer is: "+(num1/num2).toFixed(2));
    }
    if (operator=="^"){
        console.log("The answer is: "+(num1^num2));
    }
    }
    if (operator=="sqrt"||operator=="log"||operator=="sin"||operator=="cos"||operator=="tan") {
        if (operator == "sqrt"){
            console.log("The answer is: "+Math.sqrt(num1).toFixed(2));
        }
        if (operator == "log"){
            console.log("The answer is: "+Math.log(num1).toFixed(2));
        }
        if (operator == "sin"){
            console.log("The answer is: "+Math.sin(num1).toFixed(2));
        }
        if (operator == "cos"){
            console.log("The answer is: "+Math.cos(num1).toFixed(2));
        }
        if (operator == "tan"){
            console.log("The answer is: "+Math.tan(num1).toFixed(2));
        }
    }

}
let start = prompt("Do you want to start to input your personal information now? If you want to start, press 1, if you do not want to start, press any other button.")
if (start==1){
    WhoAreYou();
    let startTwo = prompt("Do you want to start the tax calculator? If you want to start, press 2. If you do not want to start, press any other button.");
    if (startTwo == 2){
        tax();
        let startThree = prompt("Do you want to start the third content the calculator? Press 3 to start. Press any other button to end.")
       if (startThree == 3){
        calculator();
        let startFour = prompt("If you wanna start the pythagorean theorem, please press 4. If you do not want to start that, press any other button")
       if (startFour==4){
        pythagorean();
       }
    }
    }
}
else {
    console.log("Okay, game over!")
}
