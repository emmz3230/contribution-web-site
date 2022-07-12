// calling the value by their ids
let figureGotten = document.getElementById("figure");
let getForm = document.getElementById("form");
let getTier = document.getElementById("tier");
let getAmount = document.getElementById("amountSaved") //already used 
let memberName  =document.getElementById("big")
let getInterest = document.getElementById("interest")
// invoking an array without value
let interestPercentage; //interest percentage
let calculatedAmount;
let list =[];   //array of members
let totalMoneyAdd;
let amountToWithdraw;

// y is the event undefined when console.log()
form.addEventListener("submit",function(event){
    event.preventDefault(); //avoid page reload
});
// called the amountSaved by the variable given to it
totalAmount = parseInt(amountSaved.innerHtml);
console.log(totalAmount);

// function for name ,tier and amount validation
function validate (){


let fullName = document.forms["myForm"]["name"]
let selectTier = document.forms["myForm"]["tier"]
let newInputAmount = amount.value;

amountWithdraw = document.getElementById("interestAmount")
percaentage = 0.00;

if(fullName == "" || (isNan (fullName))){
  alert("Enter your name "); 
}

if (selectTier != "select preferred tier"){
  switch(selecteTier){
      case "tier 1":
      (newInputAmount < 10000 || newInputAmount > 1000) 
      ? alert("Amount to save must be more than 10,000 and lower than 10,000 ") 
      :percentage = 0.07
      break;
      case "tier 2":
      (newInputAmount < 20000 || newInputAmount > 2000)
      ? alert("Amount to save must be more than 20,000 and lower than 20,000 ")
      :percentage = 0.12
      break ;
      case "tier 3" :
      (newInputAmount < 30000 || newInputAmount > 30000)
      ? alert("Amount to saver  must be more that 30,000 and lower than 30,000")
      :percentage = 0.25
      break;
      default :
      alert ("select a tier to continue")
  }
}else{
    alert("select a tier to proceed")
}
//adding the new inputed value 

amountSaved  += Number(newInputAmount)
amountSaved.innerhtml = totalMoneyAdd
//adding interest to the saving
calculatedAmount = percentage *  newInputAmount
calculatedAmount = calculatedAmount.toFixed();
getInterest.textContent = "your weekly interest # " + calculatedAmount

//amount to withdraw with  interest
amountToWithdraw.innerhtml = Number(newInputAmount) * (percentage * Number(newInputAmount))

list.push(firstName + newInputAmount) //push the name to the space provided 
memberName.innerHTML = list

setFormMessage(newInputAmount == "" || newInputAmount.length == 0)
? ("input an amount to save")
: ("Registration succesful")


}
//  const withTernary = ({
//    conditionA, conditionB
//  }) => (
//    (!conditionA)
//      ? valueC
//      : (conditionB)
//      ? valueA
//      : valueB
//  );

//  const withIf = ({
//   conditionA, conditionB
// }) => {
//   if (conditionA) {
//     if (conditionB) {
//       return valueA;
//     }
//     return valueB;
//   }
//   return valueC;
// };