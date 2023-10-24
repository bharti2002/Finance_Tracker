// Get the "Add Category" button element
const addCategoryButton = document.querySelector('#add-category-button');

// Add event listener to "Add Category" button
addCategoryButton.addEventListener('click', () => {
  const categoryName = document.querySelector('#category-name').value;
  const categoryLimit = document.querySelector('#category-limit').value;
  const categorySpent = document.querySelector('#category-spent').value;

  if (categoryName && categoryLimit && categorySpent) {
    const newCategory = document.createElement('div');
    newCategory.classList.add('category');

    const remaining = categoryLimit - categorySpent;
    const percentage = (categorySpent / categoryLimit) * 100;

    newCategory.innerHTML = `
      <h2>${categoryName}</h2>
      <p>Limit: ${categoryLimit}</p>
      <p>Spent: ${categorySpent}</p>
      <p>Remaining: ${remaining}</p>
      <div class="range-bar" style="width: ${percentage}%"></div>
    `;

    document.querySelector('.category-container').appendChild(newCategory);

    // Clear input fields after adding category
    document.querySelector('#category-name').value = '';
    document.querySelector('#category-limit').value = '';
    document.querySelector('#category-spent').value = '';
  }
});
function toggleSideNav() {
  var sideNav = document.getElementById('sideNav');
  sideNav.classList.toggle('active');
}