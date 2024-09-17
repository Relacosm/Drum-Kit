randomnumber1=Math.floor(Math.random()*6)+1;
var dm1="/images/dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",dm1);

randomnumber2=Math.floor(Math.random()*6)+1;
var dm2="/images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",dm2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 is the winner";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 is the winner";
}
else{
    document.querySelector("h1").innerHTML="Its's a tie";
}