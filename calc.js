// Human Friendly Calendar
let usersDate = flatpickr('#users-date', {
    locale: 'uz_latn',
    altInput: true,
    altFormat: 'F j, Y',
    dateFormat: 'U',
    maxDate: 'today',
    onChange: function (dateStr) {
    },
});

// Human Friendly Date and Time
let format = ('');
moment.locale('uz-latn');
moment().format('YYYY MM DD');

let calculateWeeksButton = document.querySelector('#calculate-weeks');
let usersDataType = document.querySelector('.lalu-calc-type-select');


// Calculating functions
function onCalculateWeeksButtonClick() {
    // usersDataType.addEventListener('change', function () {
    //     return usersDataType.value;
    // });

    // Main variables
    let today = Date.now();

    usersDataType.addEventListener('change', selectUsersDataType);

    function selectUsersDataType() {
        let dateS = Number(usersDate.input.value);
        let choise = usersDataType.value;

        if (choise === 'last-menstruation-day') {
        } else if (choise === 'fertilization-day') {
            dateS = dateS - (2 * 7 * 24 * 60 * 60);
        } else if (choise === 'guess-birth-day') {
            dateS = dateS - (40 * 7 * 24 * 60 * 60);
        } else {
            window.alert('Please choose date');
        }
        return dateS;
    }
    let dateS = selectUsersDataType();

    let result = ((today / 1000) - dateS) / 60 / 60 / 24;
    let passedWeeks = Math.floor(result / 7);
    let passedDays = Math.floor(result % 7);

    // Variables for Results
    let mainResult = document.querySelector('.main-result');

    let pregnancyDuration = document.querySelector('.pregnancy-duration');
    let weeksToConsult = document.querySelector('.weeks-to-consult');
    let daysToBirth = document.querySelector('.days-to-birth');
    let pregnancyTest = document.querySelector('.pregnancy-test');
    let heartbeatStart = document.querySelector('.heartbeat-start');
    let firtstTrimestr = document.querySelector('.first-trimestr');
    let firstMoves = document.querySelector('.first-moves');
    let livingStart = document.querySelector('.living-start');
    let secondTrimestr = document.querySelector('.second-trimestr');
    let birthDate = document.querySelector('.birth-date');

    //Main result
    mainResult.innerHTML = 'Tabriklaymiz!' + '</br>' + 'Siz homiladorlikning ' + passedWeeks + '-haftasidasiz!';

    //Other results
    pregnancyDuration.innerHTML = passedWeeks + ' hafta ' + passedDays + ' kun.';
    weeksToConsult.innerHTML = moment.unix(dateS + (10 * 7 * 24 * 60 * 60)).format('LL') + ' dan boshlab' + ' 3 hafta ichida.';
    daysToBirth.innerHTML = 280 - ((passedWeeks * 7) + passedDays) + ' kun.';
    pregnancyTest.innerHTML = moment.unix(dateS + (4 * 7 * 24 * 60 * 60)).format('LL') + ' dan boshlab.';
    heartbeatStart.innerHTML = moment.unix(dateS + (6 * 7 * 24 * 60 * 60)).format('LL') + ' da.';
    firtstTrimestr.innerHTML = moment.unix(dateS + (14 * 7 * 24 * 60 * 60)).format('LL') + ' da.';
    firstMoves.innerHTML = moment.unix(dateS + (18 * 7 * 24 * 60 * 60)).format('LL') + ' da.';
    livingStart.innerHTML = moment.unix(dateS + (24 * 7 * 24 * 60 * 60)).format('LL') + ' da.';
    secondTrimestr.innerHTML = moment.unix(dateS + (28 * 7 * 24 * 60 * 60)).format('LL') + ' da.';
    birthDate.innerHTML = moment.unix(dateS + (40 * 7 * 24 * 60 * 60)).format('LL') + ' da.';
}

calculateWeeksButton.addEventListener('click', onCalculateWeeksButtonClick);


















// itk kalkulator

// var operationButtons = document.getElementsByClassName('operation-button');

// var input1 = document.getElementById('number1');
// var input2 = document.getElementById('number2');

// function makeOperation(operationCode) {
//     var number1 = Number(input1.value);
//     var number2 = Number(input2.value);

//     if (operationCode === '+') {
//         var result = number1 + number2;
//     } else if (operationCode === '-') {
//         var result = number1 - number2;
//     } else if (operationCode === '*') {
//         var result = number1 * number2;
//     } else if (operationCode === '/') {
//         var result = number1 / number2;
//     } else {
//         window.alert('Operation is unknown');
//     }
//     window.alert(result);
// }

// function onOperationButtonClick(eventObject) {
//     var clickedElement = eventObject.currentTarget;
//     var operation = clickedElement.innerHTML;
//     makeOperation(operation);
// }

// for (var i = 0; i < operationButtons.length; i++) {
//     var button = operationButtons[i];
//     button.addEventListener('click', onOperationButtonClick);
// }