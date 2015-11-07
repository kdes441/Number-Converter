/*
* Shows alert if both selections are the same.
* Clears input and output if new selection is made.
*/
function error(){

    var value1=document.getElementById('convert_from').value;
    var value2=document.getElementById('convert_to').value;

    input_value.value="";
    conversion.value="";

    if(value1==value2){
      document.getElementById('alert').removeAttribute("hidden");
    }
    else {
      document.getElementById('alert').setAttribute("hidden","");
    }
}

/*
* Does the conversions of the numbers.
*/
function calculate(){

    var value1=document.getElementById('convert_from').value;
    var value2=document.getElementById('convert_to').value;
    var number_to_convert=document.getElementById('input_value').value;

    if(value1=="Decimal" && value2=="Binary"){
      document.getElementById("conversion").value=parseInt(number_to_convert, 10).toString(2);
    }
    else if(value1=="Decimal" && value2=="Hex"){
      document.getElementById("conversion").value=parseInt(number_to_convert, 10).toString(16);
    }
    else if(value1=="Hex" && value2=="Binary"){
      document.getElementById("conversion").value=parseInt(number_to_convert, 16).toString(2);
    }
    else if(value1=="Hex" && value2=="Decimal"){
      document.getElementById("conversion").value=parseInt(number_to_convert, 16).toString(10);
    }
    else if(value1=="Binary" && value2=="Decimal"){
      document.getElementById("conversion").value=parseInt(number_to_convert, 2).toString(10);
    }
    else if(value1=="Binary" && value2=="Hex"){
      document.getElementById("conversion").value=parseInt(number_to_convert, 2).toString(16);
    }
}
