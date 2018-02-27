var shownBox = 1;

/**
 *  Changes between the two boxes
 * @constructor
 */
function ToogleBox(){

  if(shownBox == 1){

    $('#conversion-box').fadeToggle(function(){
      $('#calculation-box').fadeToggle();
      ClearConversionFields();
    });
    shownBox = 2;
    $('#slider-text').html('Calculator');
  }
  else{
    $('#calculation-box').fadeToggle(function(){
      $('#conversion-box').fadeToggle();
      ClearCalculatorFields();
    });
    shownBox = 1;
    $('#slider-text').html('Converter');
  }
}

/**
 * Does the conversions of the numbers.
 * @constructor
 */
function ConvertValues(){

    var convertFrom = $('#convert_from').val();
    var convertTo = $('#convert_to').val();
    var numberToConvert = $('#input_value').val();

    if(convertFrom == convertTo){
      $('#alert').removeClass('invisibile');

      setTimeout(function(){
        $('#alert').addClass('invisibile');
      },3000);
      return;
    }

    if(convertFrom == 'Decimal' && convertTo == 'Binary'){
      $('#conversion').val(parseInt(numberToConvert, 10).toString(2));
    }
    else if(convertFrom == 'Decimal' && convertTo == 'Hex'){
      $('#conversion').val(parseInt(numberToConvert, 10).toString(16));
    }
    else if(convertFrom == 'Hex' && convertTo=='Binary'){
      $('#conversion').val(parseInt(numberToConvert, 16).toString(2));
    }
    else if(convertFrom == 'Hex' && convertTo == 'Decimal'){
      $('#conversion').val(parseInt(numberToConvert, 16).toString(10));
    }
    else if(convertFrom == 'Binary' && convertTo == 'Decimal'){
      $('#conversion').val(parseInt(numberToConvert, 2).toString(10));
    }
    else if(convertFrom == 'Binary' && convertTo == 'Hex'){
      $('#conversion').val(parseInt(numberToConvert, 2).toString(16));
    }
    else if(convertFrom == 'Octal' && convertTo == 'Decimal'){
      $('#conversion').val(parseInt(numberToConvert, 8).toString(10));
    }
    else if(convertFrom == 'Octal' && convertTo == 'Hex'){
      $('#conversion').val(parseInt(numberToConvert, 8).toString(16));
    }
    else if(convertFrom == 'Octal' && convertTo == 'Binary'){
      $('#conversion').val(parseInt(numberToConvert, 8).toString(2));
    }
}

/**
 * Does the arithmetic for the numbers.
 * @constructor
 */
function Calculate(){

    var numType = $('#number_type').val();
    var sign = $('#calculation').val();
    var number1 = $('#input_value1').val();
    var number2 = $('#input_value2').val();


    if(numType == 'Decimal'){
      if(sign =='addition')
        $('#calculation_answer').val((parseInt(number1, 10)+parseInt(number2,10)).toString(10));
      else if(sign == 'multiply')
        $('#calculation_answer').val((parseInt(number1, 10)*parseInt(number2,10)).toString(10));
      else if(sign == 'divide')
        $('#calculation_answer').val((parseInt(number1, 10)/parseInt(number2,10)).toString(10));
      else
        $('#calculation_answer').val((parseInt(number1, 10)-parseInt(number2,10)).toString(10));
    }

    else if(numType == 'Hex'){
      if(sign =='addition')
        $('#calculation_answer').val((parseInt(number1, 16)+parseInt(number2,16)).toString(16));
      else if(sign == 'multiply')
        $('#calculation_answer').val((parseInt(number1, 16)*parseInt(number2,16)).toString(16));
      else if(sign == 'divide')
        $('#calculation_answer').val((parseInt(number1, 16)/parseInt(number2,16)).toString(16));
      else
        $('#calculation_answer').val((parseInt(number1, 16)-parseInt(number2,16)).toString(16));
    }

    else if(numType == 'Binary'){
      if(sign =='addition')
        $('#calculation_answer').val((parseInt(number1, 2)+parseInt(number2,2)).toString(2));
      else if(sign == 'multiply')
        $('#calculation_answer').val((parseInt(number1, 2)*parseInt(number2,2)).toString(2));
      else if(sign == 'divide')
        $('#calculation_answer').val((parseInt(number1, 2)/parseInt(number2,2)).toString(2));
      else
        $('#calculation_answer').val((parseInt(number1, 2)-parseInt(number2,2)).toString(2));
    }

    else if(numType == 'Octal'){
      if(sign =='addition')
        $('#calculation_answer').val((parseInt(number1, 8)+parseInt(number2,8)).toString(8));
      else if(sign == 'multiply')
        $('#calculation_answer').val((parseInt(number1, 8)*parseInt(number2,8)).toString(8));
      else if(sign == 'divide')
        $('#calculation_answer').val((parseInt(number1, 8)/parseInt(number2,8)).toString(8));
      else
        $('#calculation_answer').val((parseInt(number1, 8)-parseInt(number2,8)).toString(8));
    }

}

/**
 * Clears the inputs for the calculator box
 * @constructor
 */
function ClearCalculatorFields(){
  $('#input_value1').val('');
  $('#input_value2').val('');
  $('#calculation_answer').val('');
}

/**
 * Clears the inputs for the conversion box
 * @constructor
 */
function ClearConversionFields(){
  $('#conversion').val('');
  $('#input_value').val('');
}

$(function(){
  $('#convert-btn').click(ConvertValues);
  $('#calculate-btn').click(Calculate);
  $('#slider').change(ToogleBox);
  $('#number_type').change(ClearCalculatorFields);
});
