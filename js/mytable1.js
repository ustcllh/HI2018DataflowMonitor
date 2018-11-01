var values = [
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"],
      ["fill", "run", "l1", "spectra", "flow", "highpt", "dimuon", "foward"]
    ]



function rotate(matrix) {
  var res = [];
  for(var j=0; j<matrix[0].length; j++){
    res.push([]);
    for(var i=0; i<matrix.length; i++){
      res[j].push(matrix[i][j])
    }
  }
  return res;
}
var values_rotated = rotate(values);

var data = [{
  type: 'table',
  header: {
    values: [["<b>Fill</b>"], ["<b>Run</b>"], ["<b>L1 Rate (Hz)</b>"], ["<b>Spectra/HF Rate (Hz)</b>"], ["<b>FlowCorr/HF Rate (Hz)</b>"],["<b>HighPt Rate (Hz)</b>"],["<b>DiMuon Rate (Hz)</b>"],["<b>Foward Rate (Hz)</b>"],],
    align: "center",
    line: {width: 1, color: 'black'},
    fill: {color: "rgba(52, 73, 94,1.0)"},
    font: {family: "Arial", size: 12, color: "white"}
  },
  cells: {
    values: values_rotated,
    align: "center",
    line: {color: "black", width: 1},
    font: {family: "Arial", size: 11, color: ["black"]}
  }
}]

var layout = {
    autosize: true,
    title: "<b>Fill&Run Info</b>",
    titlefont: {
      family: "Arial",
      size: 25
    },
    height:500,
    showlegend: false
};

var config ={
  displayModeBar: false
};

Plotly.plot('mytable', data, layout, config);
