// calling the value by their ids
let figureGotten = document.getElementById("figure");
let getForm = document.getElementById("form");
let getTier = document.getElementById("tier");
let getAmount = document.getElementById("amountSaved")
let memberName  =document.getElementById("big")
let getInterest = document.getElementById("interest")
// invoking an array without value
let interestPercentage; //interest percentage
let calculatedAmount;
let list =[];   //array of members
let totalMoneyAdd;
let amountToWithdraw;

form.eventHandler("submit",function(event){
    event.preventDefault(); //avoid page reload
})