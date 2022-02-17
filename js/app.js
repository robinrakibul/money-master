//get calculate button
document.getElementById('calculate-button').addEventListener('click',function(){
    // get all expenses input values
    const inputIncome = document.getElementById('input-income');
    const incomeAmount = inputIncome.value;
    console.log(incomeAmount);
    const inputFood = document.getElementById('input-food');
    const foodAmount = inputFood.value;
    console.log(foodAmount);
    const inputRent = document.getElementById('input-rent');
    const rentAmount = inputRent.value;
    console.log(rentAmount);
    const inputClothes = document.getElementById('input-clothes');
    const clothesAmount = inputClothes.value;
    console.log(clothesAmount);
    // get current total expenses
    const expensesTotal = document.getElementById('total-expenses');
    expensesTotalText = expensesTotal.innerText;
    const totalExpenses = parseFloat(foodAmount)+parseFloat(rentAmount)+parseFloat(clothesAmount);
    expensesTotal.innerText=(totalExpenses);
    //get total balance
    const getBalance = document.getElementById('total-balance');
    getBalance.text = getBalance.innerText;
    const totalBalance = parseFloat(incomeAmount) - parseFloat(totalExpenses);
    getBalance.innerText=(totalBalance);
});
        