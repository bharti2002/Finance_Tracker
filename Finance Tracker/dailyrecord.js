// Get all the expense entries
const expenseEntries = document.querySelectorAll('.expense-entry');

// Attach click event listeners to each edit button
expenseEntries.forEach((entry) => {
  const editButton = entry.querySelector('.edit-button');
  editButton.addEventListener('click', () => {
    // Perform edit action for the clicked entry
    console.log('Edit expense:', entry);
  });
});

// Attach click event listeners to each delete button
expenseEntries.forEach((entry) => {
  const deleteButton = entry.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    // Perform delete action for the clicked entry
    console.log('Delete expense:', entry);
    entry.remove(); // Remove the expense entry from the DOM
  });
});





document.getElementById('addExpenseButton').addEventListener('click', function() {
  var description = prompt('Enter expense description:');
  var amount = prompt('Enter expense amount:');
  
  
  
  if (description && amount) {
    var expenseEntry = document.createElement('div');
    expenseEntry.className = 'expense-entry';
    
    var descriptionElement = document.createElement('div');
    descriptionElement.className = 'expense-description';
    descriptionElement.textContent = description;
    
    var amountElement = document.createElement('div');
    amountElement.className = 'expense-amount';
    amountElement.textContent = '-' + amount;
    
    var actionsElement = document.createElement('div');
    actionsElement.className = 'expense-actions';
    
    var editButton = document.createElement('button');
    editButton.className = 'edit-button';
    editButton.textContent = 'Edit';
    
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    
    actionsElement.appendChild(editButton);
    actionsElement.appendChild(deleteButton);
    
    expenseEntry.appendChild(descriptionElement);
    expenseEntry.appendChild(amountElement);
    expenseEntry.appendChild(actionsElement);
    
    document.querySelector('.expense-list').appendChild(expenseEntry);
  }
});





document.getElementById("balanceButton").addEventListener("click", function() {
  // Perform the logic to retrieve and display the user's current balance
  // Here's a simple example:
  var balance = 1000; // Replace this with your logic to fetch the balance
  alert("Your current balance is: $" + balance);
});
