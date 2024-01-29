function genCode(){
    var num1 = Math.floor(Math.random()*5);
    var num2 = Math.floor(Math.random()*5);
    var num3 = Math.floor(Math.random()*5);
    var num4 = Math.floor(Math.random()*5);
    document.getElementById("div1").innerHTML=num1;
    document.getElementById("div2").innerHTML=num2;
    document.getElementById("div3").innerHTML=num3;
    document.getElementById("div4").innerHTML=num4;
    if(num1==num2&&num2==num3&&num3==num4&&num4==num1){
        document.getElementById("greet").style.display= "block"
    }
    
}
function closeWin(){
    document.getElementById("greet").style.display= "none"
}