function calcy(){
    var n = parseFloat(document.querySelector('#val1').value);
    var m = parseFloat(document.querySelector('#val2').value);
    var op = document.querySelector('#operator').value;
    var calc;
    if(op == "add"){
        calc = n+m;
    }
    else if( op == "sub"){
        calc = n - m;
    }
    else if( op == "mul"){
        calc = n * m;
    }
    else if(op == "div"){
        calc = n / m;
    }
    calc = calc.toString();
    calc = ("").concat(calc)
    document.querySelector('#answer').innerHTML = calc; 
}