function createTable() {
    //Write your code here
  const rowsInput = prompt('Input number of rows');
  const colsInput = prompt('Input number of columns');

  const rows = Number(rowsInput);
  const cols = Number(colsInput);

  if (
    isNaN(rows) || isNaN(cols) ||
    !Number.isInteger(rows) || !Number.isInteger(cols) ||
    rows <= 0 || cols <= 0
  ) {
    alert('Invalid input! Please enter positive integer values for rows and columns.');
    return;
  }

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const td = document.createElement('td');
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
}
