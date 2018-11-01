var values = [
      [1200000, 20000, 80000, 2000, 12120000],
      [1200000, 20000, 80000, 2000, 12120000],
      [1300000, 20000, 70000, 2000, 130902000],
      [1300000, 20000, 120000, 2000, 131222000],
      [1400000, 20000, 90000, 2000, 14102000]
    ]


// function rotate(matrix) {          // function statement
//     const N = matrix.length - 1;   // use a constant
//     // use arrow functions and nested map;
//     const result = matrix.map((row, i) =>
//          row.map((val, j) => matrix[N - j][i])
//     );
//     matrix.length = 0;       // hold original array reference
//     matrix.push(...result);  // Spread operator
//     return matrix;
// }
//
// rotate(values);
// rotate(values);
// rotate(values);

var data = [{
  type: 'table',
  header: {
    values: [["<b>Fill</b>"], ["<b>Run</b>"], ["<b>L1 Rate (Hz)</b>"], ["<b>Q3</b>"], ["<b>Q4</b>"]],
    align: "center",
    line: {width: 1, color: 'black'},
    fill: {color: "rgba(52, 73, 94,1.0)"},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values,
    align: "center",
    line: {color: "black", width: 1},
    font: {family: "Arial", size: 11, color: ["black"]}
  }
}]

var layout = {
    title: "<b>Fill&Run Info</b>",
    titlefont: {
      family: "Arial",
      size: 25
    },
    showlegend: false
};

Plotly.plot('mytable', data, layout, {displayModeBar: false});
