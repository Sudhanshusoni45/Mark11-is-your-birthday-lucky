function clickHandler(){
var userBday=document.querySelector('#input-birthDate')
var userBdayDate = userBday.value
var userBdayOnlyDate = userBdayDate.replaceAll("-","");

calculateSum(userBdayOnlyDate)
}

var sum=0;

var textArea = document.querySelector('#output-text-area')

function calculateSum(dob){
for(i=0;i<dob.length;i++){
    sum = sum + Number(dob.charAt(i))
}
console.log(textArea)  
return sum 
}


