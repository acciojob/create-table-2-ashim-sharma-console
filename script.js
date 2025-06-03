function createTable() {
  const table = document.getElementById("myTable");

  // Clear existing table content
  table.innerHTML = '';

  const rows = parseInt(prompt("Input number of rows"));
  const cols = parseInt(prompt("Input number of columns"));

  // Validate input
  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert("Please enter valid positive numbers.");
    return;
  }

  // Create table using DOM
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}
