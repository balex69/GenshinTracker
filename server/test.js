fetch('/data') // send HTTP GET request to Node.js server to fetch JSON data
.then(response => response.json()) // parse JSON data
.then(data => {
  const tableBody = document.querySelector('#myTable tbody');
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const row = document.createElement('tr');
      const rowData = data[key];
      for (const field in rowData) {
        if (rowData.hasOwnProperty(field) && field !== 'id' && field !== 'table') {
          const cell = document.createElement('td');
          cell.textContent = rowData[field];
          row.appendChild(cell);
        }
      }
      tableBody.appendChild(row);
    }
  }
})
.catch(error => console.error(error));