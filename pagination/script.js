const dataList = document.getElementById('data-list');
const pagination = document.getElementById('pagination');

const itemsPerPage = 5; // Number of items to show per page
let currentPage = 1; // Current page

// Sample data
const data = Array.from({ length: 25 }, (_, index) => `Item ${index + 1}`);

// Display items on current page
function displayData(items, page) {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = items.slice(start, end);

  dataList.innerHTML = '';
  paginatedItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    dataList.appendChild(li);
  });
}

// Display pagination buttons
function displayPagination(items) {
  const pageCount = Math.ceil(items.length / itemsPerPage);

  pagination.innerHTML = '';
  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.classList.add('pagination-btn');
    btn.addEventListener('click', () => {
      currentPage = i;
      displayData(items, currentPage);
    });
    pagination.appendChild(btn);
  }
}

// Initial display
displayData(data, currentPage);
displayPagination(data);
