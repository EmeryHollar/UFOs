// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) { 
    // First, clear out any existing data
    tbody.html("");
}

// Next, loop through each object in the data
// and append a row and cells for each value in the row
data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add each value to a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    }
   );
});

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // if (a date is entered) {
        // filter the default data to show only the date entered}
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // Rebuild the table using the filteredData we did in the previous line
    buildTable(filteredData);  
}

// adding code to "listen" to a user clicks
d3.selectAll("#filter-btn").on("click", handleClick)

// Build the table when the page loads
buildTable(tableData);