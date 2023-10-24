var incomeData = {
  totalIncome: 5000,
  dailyAverageIncome: 165
};

var expenseData = {
  totalExpense: 4000,
  dailyAverageExpense: 130
};

document.getElementById('totalIncome').textContent =  incomeData.totalIncome;
document.getElementById('dailyAverageIncome').textContent =  incomeData.dailyAverageIncome;

document.getElementById('totalExpense').textContent =  expenseData.totalExpense;
document.getElementById('dailyAverageExpense').textContent = expenseData.dailyAverageExpense;
var savingsBar = document.getElementById('savingsBar');
var expenseBar = document.querySelector('.expense-bar');
var savingBar = document.querySelector('.saving-bar');
var totalIncome = incomeData.totalIncome;
var totalExpense = expenseData.totalExpense;
var savingsPercentage = ((totalIncome - totalExpense) / totalIncome) * 100;

expenseBar.style.width = Math.abs(totalExpense / totalIncome * 100) + '%';
savingBar.style.width = Math.abs(savingsPercentage) + '%';

if (savingsPercentage >= 0) {
  savingsBar.classList.remove('expense');
} else {
  savingsBar.classList.add('expense');
}

// Sample expense data
const sampleExpenseData = [
  { category: "Food", amount: 500 },
  { category: "Rent", amount: 1000 },
  { category: "Transportation", amount: 300 },
  { category: "Utilities", amount: 200 },
  { category: "Entertainment", amount: 400 },
   { category: "Food", amount: 500 },
   { category: "Education", amount: 300 },
  
];

// Get the canvas element and create the chart
const canvas = document.getElementById('expenseChart');
const ctx = canvas.getContext('2d');
const chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: sampleExpenseData.map(expense => expense.category),
    datasets: [{
      data: sampleExpenseData.map(expense => expense.amount),
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#FF9F40',
        '#4BC0C0',
        '#9966FF',
        '#C9CBCF',

      ]
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Expense Analysis'
    }
  }
});
