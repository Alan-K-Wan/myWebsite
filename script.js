function pushNum(number){
    let display = document.getElementById("calc-display").innerHTML;
    if(display == 0){
        document.getElementById("calc-display").innerHTML = number;
    }
    else{ /*if(display.length < 12){*/
        number = display + number;
        document.getElementById("calc-display").innerHTML = number;
    }
}

function clearNum(){
    document.getElementById("calc-display").innerHTML = 0;
}

function removeNum(){
    let display = document.getElementById("calc-display").innerHTML;
    if(display.length == 1){
        document.getElementById("calc-display").innerHTML = 0;
    }
    else{
        number = display.substring(0, display.length - 1);
        document.getElementById("calc-display").innerHTML = number;
    }
}

function pushDec(){
    let display = document.getElementById("calc-display").innerHTML;
    if(!display.includes(".")){
        display = display + ".";
        document.getElementById("calc-display").innerHTML = display;
    }
}

function calOp(operation){
    let display = document.getElementById("calc-display").innerHTML;
    if(!display.includes("/") && !display.includes("*") && !display.includes("+") && !display.includes("-")  && !display.includes("%") ){
        display = display + operation;
        document.getElementById("calc-display").innerHTML = display;
    }
}

function plusMinus(){
    let display = document.getElementById("calc-display").innerHTML;
    if(display.charAt(0) == "-"){
        number = display.substring(1, display.length);
        document.getElementById("calc-display").innerHTML = number;
    }
    else{
        number = "-" + display;
        document.getElementById("calc-display").innerHTML = number;
    }
}

function calEq(){
    let display = document.getElementById("calc-display").innerHTML;
    if(display.includes("/")){
        const a = display.split("/");
        result = parseFloat(a[0]) / parseFloat(a[1]);
        document.getElementById("calc-display").innerHTML = result;
    }
    else if(display.includes("*")){
        const a = display.split("*");
        result = parseFloat(a[0]) * parseFloat(a[1]);
        document.getElementById("calc-display").innerHTML = result;
    }
    else if(display.includes("%")){
        const a = display.split("%");
        result = parseFloat(a[0]) % parseFloat(a[1]);
        document.getElementById("calc-display").innerHTML = result;
    }
    else if(display.includes("+")){
        const a = display.split("+");
        result = parseFloat(a[0]) + parseFloat(a[1]);
        document.getElementById("calc-display").innerHTML = result;
    }
    else if(display.includes("-")){
        const a = display.split("-");
        result = parseFloat(a[0]) - parseFloat(a[1]);
        document.getElementById("calc-display").innerHTML = result;
    }
}

function calBig(){
    document.getElementById("bigSmall").innerHTML = '<button style="width:15%;" onclick="calSmall()">BIG</button>';
    document.getElementById("tabel").style.width = "25%";
}

function calSmall(){
    document.getElementById("bigSmall").innerHTML = '<button style="width:15%;" onclick="calBig()">small</button>';
    document.getElementById("tabel").style.width = "100%";
}