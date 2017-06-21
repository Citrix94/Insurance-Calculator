var booster = 0;
var installment = 0;
var type = 0;

function passInputText(){
    $('#insuranceForm').removeClass('error');
    $('#insuranceForm').addClass('pass pass:focus');
};

function errorInputText(){
    $('#insuranceForm').removeClass('pass');
    $('#insuranceForm').addClass('error');
};

function amountOfPayment(){

    var insuranceValue = document.getElementById('insuranceForm').value;

    if (insuranceValue < 100){
        errorInputText();
        booster = 0;
        $('#firstYellowBox').html('<p>Podana wartość musi być większa lub równa 100.</p>').show();

    } else if (insuranceValue > 10000) {
        errorInputText();
        booster = 0;
        $('#firstYellowBox').html('<p>Podana wartość musi być mniejsza lub równa 10000.</p>').show();

    } else if (insuranceValue <= 1000){
        passInputText();
        booster = 20;
        $('#firstYellowBox').html('<p>Stawka dla tej sumy wynosi 20 zł.</p>').show();

    } else if (insuranceValue <= 3000){
        passInputText();
        booster = 70;
        $('#firstYellowBox').html('<p>Stawka dla tej sumy wynosi 70 zł</p>').show();

    } else if (insuranceValue <= 6000){
        passInputText();
        booster = 130;
        $('#firstYellowBox').html('<p>Stawka dla tej sumy wynosi 130 zł.</p>').show();

    } else if (insuranceValue <= 9000){
        passInputText();
        booster = 180;
        $('#firstYellowBox').html('<p>Stawka dla tej sumy wynosi 180 zł.</p>').show();

    } else if (insuranceValue <= 20000){
        passInputText();
        booster = 200;
        $('#firstYellowBox').html('<p>Stawka dla tej sumy wynosi 200 zł.</p>').show();
    } 

    console.log(insuranceValue);

};

function typeOfPayment(){

    var firstPaymentInput = document.getElementById('firstPaymentInput');
    var secondPaymentInput = document.getElementById('secondPaymentInput');
    var thirdPaymentInput = document.getElementById('thirdPaymentInput');

    if (firstPaymentInput.checked){
        installment = 0.98;
        $('#secondYellowBox').hide();
            
    }else if (secondPaymentInput.checked){
        installment = 1;
        $('#secondYellowBox').hide();

    }else if (thirdPaymentInput.checked){
        installment = 1.04;
        $('#secondYellowBox').hide();

    }else {
        $('#secondYellowBox').html('<p>Wybierz jedną z trzech dostępnych opcji!</p>').show();
    }
};

function typeOfInsurance(){

    var firstInsuranceInput = document.getElementById('firstInsuranceInput');
    var secondInsuranceInput = document.getElementById('secondInsuranceInput');

    if (firstInsuranceInput.checked){
        type = 0.95;
        $('#thirdYellowBox').hide();
            
    }else if (secondInsuranceInput.checked){
        type = 1.08;
        $('#thirdYellowBox').hide();

    }else {
        $('#thirdYellowBox').html('<p>Wybierz jedną z dwóch dostępnych opcji!</p>').show();
    }
    
};

function calculationResult(){

    var sum = Math.ceil((booster*installment)*type);
    document.getElementById("sum").innerHTML = sum;
    console.log(sum);

};

$(document).ready(function() {
    $('#mainButton').click(function() {

        amountOfPayment();
        typeOfPayment();
        typeOfInsurance();
        calculationResult();  

        console.log(booster);
        console.log(installment);
        console.log(type);

    });
});





