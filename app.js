function clickHandler() {
  var inputBday = document.querySelector("#input-birthDate");
  var userBdayDate = inputBday.value;
  var userBdayOnlyDate = userBdayDate.replaceAll("-", "");
  console.log(userBdayOnlyDate);
  calculateSum(userBdayOnlyDate);
}

var sum = 0;

// var textArea = document.querySelector("#output-text-area");
// console.log("textArea:", textArea);

function calculateSum(dob) {
  for (i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  // var sumOfBday = sum;
  console.log("sum is " + sum);
  checkLucky(sum);
}

function checkLucky(sumOfBday) {
  var inputLuckyNumber = document.querySelector("#input-luckyNumber");
  var userLuckyNumber = inputLuckyNumber.value;
  var divOutput = document.querySelector("#div-output");

  console.log("Lucky Number " + userLuckyNumber);
  if (sumOfBday % userLuckyNumber === 0) {
    divOutput.innerText = "Your bday is Lucky";
  } else {
    console.log("nahi hai");
    divOutput.innerText = "Your bday is not Lucky";
  }
  sum = 0;
}
