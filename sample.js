document.getElementById("input1").style.textTransform = "uppercase";
var inpVal = document.getElementById("input1");
var inpCol = document.getElementById("Txcol");
var inpBgCol = document.getElementById("bgcol");
var inputs = document.getElementById("input2");
var inp = document.getElementById("input3");
function giveOutput(){
    document.getElementById("p1").innerHTML = inpVal.value.toUpperCase().split("").reverse().join("");
    document.getElementById("p2").innerHTML = inputs.value.split("").reverse().join("");
    document.getElementById("p3").innerHTML = inp.value.split("").reverse().join("");
    document.getElementById("p1").style.color = inpCol.value;
    document.getElementById("p2").style.color = inpCol.value;
    document.getElementById("p3").style.color = inpCol.value;
    document.body.style.backgroundColor = inpBgCol.value;
}
