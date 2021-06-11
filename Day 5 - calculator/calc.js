function calculate(op){
    // inititalising Variables
    var a = parseInt(document.getElementById("input1").value);
    var b = parseInt(document.getElementById("input2").value);
    //switch case for various calculations
    switch(op){
        case 'add':
            //add
            document.getElementById("output").innerHTML = a+b;
            break
        case 'sub':
            //subtract
            document.getElementById("output").innerHTML = a-b;
            break
        case 'mul':
            //multiply
            document.getElementById("output").innerHTML = a*b;
            break
        case 'div':
            //divide
            document.getElementById("output").innerHTML = a/b;
            break
    }
}
//REset Function
function reset(){
    //clear values
    document.getElementById("output").innerHTML ='';
    document.getElementById("input1").value ='';
    document.getElementById("input2").value ='';
}