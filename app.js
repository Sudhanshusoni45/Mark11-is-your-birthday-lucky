function clickHandler() {
  var inputBday = document.querySelector("#input-birthDate");
  var userBdayDate = inputBday.value;
  var userBdayOnlyDate = userBdayDate.replaceAll("-", "");
  console.log(userBdayOnlyDate);
  calculateSum(userBdayOnlyDate);
}

var sum = 0;

var textArea = document.querySelector("#output-text-area");
console.log(textArea);

function calculateSum(dob) {
  for (i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  // var sumOfBday = sum;
  console.log("sum is " + sum);
  checkLucky(sum);
}

// var sumOfDate = calculateSum();

// checkLucky();

function checkLucky(sumOfBday) {
  var inputLuckyNumber = document.querySelector("#input-luckyNumber");
  var userLuckyNumber = inputLuckyNumber.value;

  console.log("Lucky Number " + userLuckyNumber);
  if (sumOfBday % userLuckyNumber === 0) {
    console.log("bday lucky hai");
  } else {
    console.log("nahi hai");
  }
  sum = 0;
}
