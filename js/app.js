//get calculate button
document.getElementById('calculate-button').addEventListener('click',function(){
    // get all expenses input values
    const inputIncome = document.getElementById('input-income');
    const incomeAmount = inputIncome.value;
    if(incomeAmount>0)
    {
        // console.log(incomeAmount);
        const inputFood = document.getElementById('input-food');
        const foodAmount = inputFood.value;
        if(foodAmount<0){
            alert('Food expense amount cannot be a negative amount! Enter valid amount again.')
        }
        // console.log(foodAmount);
        const inputRent = document.getElementById('input-rent');
        const rentAmount = inputRent.value;
        if(rentAmount<0){
            alert('Rent expense amount cannot be a negative amount! Enter valid amount again.')
        }
        // console.log(rentAmount);
        const inputClothes = document.getElementById('input-clothes');
        const clothesAmount = inputClothes.value;
        // console.log(clothesAmount);
        if(clothesAmount<0){
            alert('Cloth expense amount cannot be a negative amount! Enter valid amount again.')
        }
        // get current total expenses
        const expensesTotal = document.getElementById('total-expenses');
        expensesTotalText = expensesTotal.innerText;
        const totalExpenses = parseFloat(foodAmount)+parseFloat(rentAmount)+parseFloat(clothesAmount);
        if(totalExpenses>0){
            expensesTotal.innerText=(totalExpenses);
        }
        //get total balance
        const getBalance = document.getElementById('total-balance');
        getBalance.text = getBalance.innerText;
        const totalBalance = parseFloat(incomeAmount) - parseFloat(totalExpenses);
        if(totalBalance>0){
            getBalance.innerText=(totalBalance);
        }
        // Logic to handle when income < expenses
        if(incomeAmount < totalExpenses){
            alert('Your income is lower than expenses. Enter amount correctly');
        }
        else{
            expensesTotal.innerText = totalExpenses;
            getBalance.innerText = totalBalance;
        }
    }
    else{
        alert('Input amount must be a number and amount can not be negative or zero');
    }
    
})

// Savings Balance Calculation
document.getElementById('save-button').addEventListener('click',function(){
// get all expenses input values
const inputIncome = document.getElementById('input-income');
const incomeAmount = inputIncome.value;
const inputFood = document.getElementById('input-food');
const foodAmount = inputFood.value;
const inputRent = document.getElementById('input-rent');
const rentAmount = inputRent.value;
const inputClothes = document.getElementById('input-clothes');
const clothesAmount = inputClothes.value;

const totalExpenses = parseFloat(foodAmount)+parseFloat(rentAmount)+parseFloat(clothesAmount);
const balanceLeft = incomeAmount - totalExpenses;
var savingsPercentage = document.getElementById('savings-percentage');
var savingsPercentageFloat = parseFloat(savingsPercentage.value);
var savingsAmount = incomeAmount*(savingsPercentageFloat/100);
    if(balanceLeft < savingsAmount){
        alert('Enter valid amount, savings cannot be more than your income!');
    }
    else{
    document.getElementById('savings-amount').innerText = savingsAmount;
    var finalAmount = balanceLeft - savingsAmount;
    document.getElementById('balance-left').innerText = finalAmount;
   }
})

