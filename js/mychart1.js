var data = {
        labels: ["11/04", "11/05", "11/06", "11/07", "11/08","11/04", "11/05", "11/06", "11/07", "11/08","11/04", "11/05", "11/06", "11/07", "11/08","11/04", "11/05", "11/06", "11/07", "11/08","11/04", "11/05", "11/06", "11/07", "11/08","11/04", "11/05", "11/06", "11/07", "11/08","11/04", "11/05", "11/06", "11/07", "11/08","11/04", "11/05", "11/06", "11/07", "11/08","11/04", "11/05", "11/06", "11/07", "11/08"],
        datasets: [
            {
                label: "Total",
                backgroundColor: "rgba(52, 73, 94, 0.1)",
                pointBackgroundColor: "rgba(52, 73, 94,0.8)",
                pointHoverBackgroundColor: "rgba(52, 73, 94,1.0)",
                borderColor: "rgba(52, 73, 94,0.3)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(52, 73, 94,1.0)",
                data: [100,200,300,400,500]
            },
            {
                label: "Spectra/HF",
                backgroundColor: "rgba(243, 156, 18, 0.2)",
                pointBackgroundColor: "rgba(243, 156, 18, 0.8)",
                pointHoverBackgroundColor: "rgba(243, 156, 18,1.0)",
                borderColor: "rgba(243, 156, 18,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(243, 156, 18,1.0)",
                data: [10,20,30,40,50]
            },
            {
                label: "FlowCorr",
                backgroundColor: "rgba(41, 128, 185,0.3)",
                pointBackgroundColor: "rgba(41, 128, 185,1.0)",
                pointHoverBackgroundColor: "rgba(41, 128, 185,1.0)",
                borderColor: "rgba(41, 128, 185,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(41, 128, 185,1.0)",
                data: [50,60,70,80,90]
            },
            {
                label: "HighPt",
                backgroundColor: "rgba(231, 76, 60,0.4)",
                pointBackgroundColor: "rgba(231, 76, 60,1.0)",
                pointHoverBackgroundColor: "rgba(231, 76, 60,1.0)",
                borderColor: "rgba(231, 76, 60,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(231, 76, 60,1.0)",
                data: [10,20,30,40,70]
            },
            {
                label: "DiMuon",
                backgroundColor: "rgba(46, 204, 113,0.5)",
                pointBackgroundColor: "rgba(46, 204, 113,1.0)",
                pointHoverBackgroundColor: "rgba(46, 204, 113,1.0)",
                borderColor: "rgba(46, 204, 113,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(46, 204, 113,1.0)",
                data: [10,20,30,40,50]
            },
            {
                label: "Foward",
                backgroundColor: "rgba(155, 89, 182,0.6)",
                pointBackgroundColor: "rgba(155, 89, 182,1.0)",
                pointHoverBackgroundColor: "rgba(155, 89, 182,1.0)",
                borderColor: "rgba(155, 89, 182,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(155, 89, 182,1.0)",
                data: [10,20,30,40,50]
            }
        ]
};

var ctx = document.getElementById("myChart1").getContext("2d");

var options = {
  title: {
            display: true,
            text: 'Raw Data Volume in TB',
            fontSize: 25
          },
  layout: {
            padding: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 50
            }
        },
  responsive: true,
  maintainAspectRatio: true
};
var lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});

// Color Choices
// https://flatuicolors.com/palette/defo
