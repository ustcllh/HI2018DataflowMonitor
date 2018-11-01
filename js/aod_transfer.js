var dates = [
  "11/4","11/5","11/6","11/7","11/8","11/9","11/10","11/11","11/12","11/13","11/14","11/15","11/16","11/17","11/18","11/19","11/20","11/21","11/22","11/23","11/24","11/25","11/26","11/27","11/28","11/29","11/30"
];

var aoddata_total = [
  100, 200, 300, 400, 500
];

var aoddata_trans = [
  50, 60, 150, 240, 300
];

var aoddata_untrans = [];

for(var i=0; i<aoddata_total.length; i++){
  aoddata_untrans.push(aoddata_total[i] - aoddata_trans[i]);
}

var data = {
  labels: dates,
  datasets: [
    {
      label: "AOD Transfered",
      backgroundColor: "rgba(52, 152, 219,1.0)",
      data: aoddata_untrans
    },
    {
    label: "AOD Untransfered",
    backgroundColor: "rgba(230, 126, 34,1.0)",
    data: aoddata_total
  },

]
};

var ctx = document.getElementById("aod_transfer").getContext("2d");

var options = {
  title: {
            display: true,
            text: 'AOD Data: T0_CERN to T2_US_Vanderbilt',
            fontSize: 25
          },
  scales: {
    xAxes: [{ stacked: true }],
    yAxes: [{
            ticks: {
                beginAtZero:true
            },
            stacked: true
    }]
  },
  layout: {
            padding: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 50
            }
        },
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
