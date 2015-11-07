/*
* Clears inputs and output if new selection is made.
*/
function myclear(){

    input_value1.value="";
    input_value2.value="";
    conversion.value="";

}

/*
*Does the addition and subtraction of the numbers.
*/
function calculate(){

    var numType=document.getElementById("number_type").value;
    var sign=document.getElementById("calculation").value;
    var number1=document.getElementById("input_value1").value;
    var number2=document.getElementById("input_value2").value;


    if(numType=="Decimal"){

      if(sign=="+") document.getElementById("conversion").value=(parseInt(number1, 10)+parseInt(number2,10)).toString(10);
      else document.getElementById("conversion").value=(parseInt(number1, 10)-parseInt(number2,10)).toString(10);
    }

    else if(numType=="Hex"){

      if(sign=="+") document.getElementById("conversion").value=(parseInt(number1, 16)+parseInt(number2,16)).toString(16);
      else document.getElementById("conversion").value=(parseInt(number1, 16)-parseInt(number2,16)).toString(16);
    }

    else if(numType=="Binary"){

      if(sign=="+") document.getElementById("conversion").value=(parseInt(number1, 2)+parseInt(number2,2)).toString(2);
      else document.getElementById("conversion").value=(parseInt(number1, 2)-parseInt(number2,2)).toString(2);
    }

    else if(numType=="Octal"){

      if(sign=="+") document.getElementById("conversion").value=(parseInt(number1, 8)+parseInt(number2,8)).toString(8);
      else document.getElementById("conversion").value=(parseInt(number1, 8)-parseInt(number2,8)).toString(8);
    }

}
