$(document).ready(function () {

     calc = $('.calculator');
    let calcDisplay = calc.find('.calculator__display');
    let calcKeys = calc.find('.calculator__key');
    let calcButton = calc.find('.calculator__button');
    let calcClear = calc.find('.calculator__clear');
    let calcEqual = calc.find('.calculator__key--equal');
    let calcPower = calc.find('.calculator__power');
    let calcSpace = calc.find('.calculator__backspace');
    let calcCosinus = calc.find('.calculator__cosinus');
    let calcSinus = calc.find('.calculator__sinus');
    let calcTangens = calc.find('.calculator__tangens');
    let calcCtangens = calc.find('.calculator__ctangens');
    let calcGradus = calc.find('.calculator__gradus');
    let calcFact = calc.find('.calculator__fact');
    let calcSqrt = calc.find('.calculator__sqrt');



    calcKeys.each(function () {
        var current = $(this).attr('value');
        $(this).text(current);
    });

    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
    });

    calcClear.on('click', function () {
        calcDisplay.val('');
    });

    calcEqual.on('click', function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
        let eval1 = eval(calcDisplay.val());
    if(Math.abs(eval1) == Infinity) {alert('Деление на ноль!');
     calcDisplay.val('На ноль делить нельзя!')};
     if(Math.abs(eval1) == 0.30000000000000004){
        calcDisplay.val('0.3')
     }
    });

    calcPower.on('click', function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 2 ) );
    });
    calcSqrt.on('click', function () {
        calcDisplay.val( Math.sqrt( calcDisplay.val(),  ) );
    });

    calcCosinus.on('click', function () {
        calcDisplay.val( Math.cos( calcDisplay.val() ) );
    });

    calcSinus.on('click', function () {
        calcDisplay.val( Math.sin( calcDisplay.val() ) );
    });

    calcTangens.on('click', function () {
        calcDisplay.val( Math.tan( calcDisplay.val() ) );
    });

    
    calcGradus.on('click', function () {
        calcDisplay.val( Math.tan ( 3.14/180*calcDisplay.val() ) );
      });

      
      function rFact(num){
    if (num === 0)
        return 1;
    else
        return num * rFact(num - 1);
}
      calcFact.on('click', function () {
        calcDisplay.val( rFact ( calcDisplay.val() ) );
      });


      calcCtangens.on('click', function () {
        calcDisplay.val( 1/Math.tan( calcDisplay.val() ) );
    });


    calcSpace.on('click', function () {
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

});
