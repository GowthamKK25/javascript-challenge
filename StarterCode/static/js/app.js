// YOUR CODE HERE!
var tableData = data;
console.log(tableData);

// reference the table body
var tbody = d3.select("tbody");

// UFO Sighting per each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// choose the button
var button = d3.select("#filter-btn");
button.on("click", function() {
  tbody.html("");
  // Choose the input date 
  var inputElement = d3.select("#datetime");
  // recieve the properties of the input shape,state and date
  var inputVal = inputElement.property("value");
  // console.log input value
  console.log(inputValue);
  // Filter Data using map
  var filteredData = tableData.filter(sighted => sighted.datetime === inputVal);
  // console.log the filtered values
  console.log(filteredData);


    filteredData.forEach(function(selected) {

    console.log(selected);
    
    
    // Append table row for each sighting using for each
    var row = tbody.append("tr");
    // `Object.entries` and console.log find each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
      console.log(key, value);
      // Append cells to rows per value
      var cell = row.append("td");
      cell.text(value);
    });
});
});
