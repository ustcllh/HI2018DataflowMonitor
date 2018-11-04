var dates = [
  "11/4","11/5","11/6","11/7","11/8","11/9","11/10","11/11","11/12","11/13","11/14","11/15","11/16","11/17","11/18","11/19","11/20","11/21","11/22","11/23","11/24","11/25","11/26","11/27","11/28","11/29","11/30"
];

var rawtotal = [100,200,300,400,600];

var rawspectra = [0,20,30,40,50];

var rawflow = [0,60,70,80,90];

var rawhighpt = [0,20,30,40,70];

var rawdimuon = [0,20,30,40,50];

var rawfoward = [0,20,30,40,50];

function getcorrb(data){
  if(data.length==1)
    return data[0];
  var i=data.length -1;
  var xsqsum = 0;
  var xsum = 0;
  var xysum = 0;
  var ysum = 0;
  var num = 0;
  while(i>=0 && i>=data.length-3){
    xsqsum += i*i;
    xsum += i;
    xysum += i*data[i];
    ysum += data[i];
    i--;
    num++;
  }
  var corra = ((xsqsum*ysum)-(xsum*xysum))/(num*xsqsum-xsum*xsum);
  return corra;
}

function getcorra(data){
  if(data.length==1)
    return data[0];
  var i=data.length -1;
  var xsqsum = 0;
  var xsum = 0;
  var xysum = 0;
  var ysum = 0;
  var num = 0;
  while(i>=0 && i>=data.length-3){
    xsqsum += i*i;
    xsum += i;
    xysum += i*data[i];
    ysum += data[i];
    i--;
    num++;
  }
  var corrb = (num*xysum-xsum*ysum)/(num*xsqsum-xsum*xsum);
  return corrb;
}

// maintain data above!!!!!!!

var rawtotal_future = [];
var rawspectra_future = [];
var rawflow_future = [];
var rawhighpt_future = [];
var rawdimuon_future = [];
var rawfoward_future = [];

// a*i+b;
var rawtotalcorra = getcorra(rawtotal);
var rawtotalcorrb = getcorrb(rawtotal);
var rawspectracorra = getcorra(rawspectra);
var rawspectracorrb = getcorrb(rawspectra);
var rawflowcorra = getcorra(rawflow);
var rawflowcorrb = getcorrb(rawflow);
var rawhighptcorra = getcorra(rawhighpt);
var rawhighptcorrb = getcorrb(rawhighpt);
var rawdimuoncorra = getcorra(rawdimuon);
var rawdimuoncorrb = getcorrb(rawdimuon);
var rawfowardcorra = getcorra(rawfoward);
var rawfowardcorrb = getcorrb(rawfoward);




var i;
for(i=0; i<rawtotal.length; i++){
  rawtotal_future[i]=null;
  rawspectra_future[i]=null;
  rawflow_future[i]=null;
  rawhighpt_future[i]=null;
  rawdimuon_future[i]=null;
  rawfoward_future[i]=null;
}
for(i=rawtotal.length-3; i<dates.length; i++){
  rawtotal_future[i]= rawtotalcorra*i + rawtotalcorrb;
  rawspectra_future[i]= rawspectracorra*i + rawspectracorrb;
  rawflow_future[i]= rawflowcorra*i + rawflowcorrb;
  rawhighpt_future[i]= rawhighptcorra*i + rawhighptcorrb;
  rawdimuon_future[i]= rawdimuoncorra*i + rawdimuoncorrb;
  rawfoward_future[i]= rawfowardcorra*i + rawfowardcorrb;
}






var data = {
        labels: dates,
        datasets: [
            {
                label: "Total",
                backgroundColor: "rgba(52, 73, 94, 0.1)",
                pointBackgroundColor: "rgba(52, 73, 94,0.8)",
                pointHoverBackgroundColor: "rgba(52, 73, 94,1.0)",
                borderColor: "rgba(52, 73, 94,0.3)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(52, 73, 94,1.0)",
                data: rawtotal
            },
            {
                label: "Total Projection",
                fill: false,
                pointBackgroundColor: "rgba(52, 73, 94,0.8)",
                pointHoverBackgroundColor: "rgba(52, 73, 94,1.0)",
                borderColor: "rgba(52, 73, 94,0.3)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(52, 73, 94,1.0)",
                borderDash: [4,1],
                data: rawtotal_future
            },
            {
                label: "Spectra/HF",
                backgroundColor: "rgba(243, 156, 18, 0.2)",
                pointBackgroundColor: "rgba(243, 156, 18, 0.8)",
                pointHoverBackgroundColor: "rgba(243, 156, 18,1.0)",
                borderColor: "rgba(243, 156, 18,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(243, 156, 18,1.0)",
                data: rawspectra
            },
            {
                label: "Spectra/HF Projection",
                fill: false,
                backgroundColor: "rgba(243, 156, 18, 0.2)",
                pointBackgroundColor: "rgba(243, 156, 18, 0.8)",
                pointHoverBackgroundColor: "rgba(243, 156, 18,1.0)",
                borderColor: "rgba(243, 156, 18,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(243, 156, 18,1.0)",
                borderDash: [4,1],
                data: rawspectra_future
            },
            {
                label: "FlowCorr",
                backgroundColor: "rgba(41, 128, 185,0.3)",
                pointBackgroundColor: "rgba(41, 128, 185,1.0)",
                pointHoverBackgroundColor: "rgba(41, 128, 185,1.0)",
                borderColor: "rgba(41, 128, 185,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(41, 128, 185,1.0)",
                data: rawflow
            },
            {
                label: "FlowCorr",
                fill: false,
                backgroundColor: "rgba(41, 128, 185,0.3)",
                pointBackgroundColor: "rgba(41, 128, 185,1.0)",
                pointHoverBackgroundColor: "rgba(41, 128, 185,1.0)",
                borderColor: "rgba(41, 128, 185,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(41, 128, 185,1.0)",
                borderDash: [4,1],
                data: rawflow_future
            },
            {
                label: "HighPt",
                backgroundColor: "rgba(231, 76, 60,0.4)",
                pointBackgroundColor: "rgba(231, 76, 60,1.0)",
                pointHoverBackgroundColor: "rgba(231, 76, 60,1.0)",
                borderColor: "rgba(231, 76, 60,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(231, 76, 60,1.0)",
                data: rawhighpt
            },
            {
                label: "HighPt Projection",
                fill: false,
                backgroundColor: "rgba(231, 76, 60,0.4)",
                pointBackgroundColor: "rgba(231, 76, 60,1.0)",
                pointHoverBackgroundColor: "rgba(231, 76, 60,1.0)",
                borderColor: "rgba(231, 76, 60,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(231, 76, 60,1.0)",
                borderDash: [4,1],
                data: rawhighpt_future
            },
            {
                label: "DiMuon",
                backgroundColor: "rgba(46, 204, 113,0.5)",
                pointBackgroundColor: "rgba(46, 204, 113,1.0)",
                pointHoverBackgroundColor: "rgba(46, 204, 113,1.0)",
                borderColor: "rgba(46, 204, 113,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(46, 204, 113,1.0)",
                data: rawdimuon
            },
            {
                label: "DiMuon Projection",
                fill: false,
                backgroundColor: "rgba(46, 204, 113,0.5)",
                pointBackgroundColor: "rgba(46, 204, 113,1.0)",
                pointHoverBackgroundColor: "rgba(46, 204, 113,1.0)",
                borderColor: "rgba(46, 204, 113,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(46, 204, 113,1.0)",
                borderDash: [4,1],
                data: rawdimuon_future
            },
            {
                label: "Foward",
                backgroundColor: "rgba(155, 89, 182,0.6)",
                pointBackgroundColor: "rgba(155, 89, 182,1.0)",
                pointHoverBackgroundColor: "rgba(155, 89, 182,1.0)",
                borderColor: "rgba(155, 89, 182,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(155, 89, 182,1.0)",
                data: rawfoward
            },
            {
                label: "Foward Projection",
                fill: false,
                backgroundColor: "rgba(155, 89, 182,0.6)",
                pointBackgroundColor: "rgba(155, 89, 182,1.0)",
                pointHoverBackgroundColor: "rgba(155, 89, 182,1.0)",
                borderColor: "rgba(155, 89, 182,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(155, 89, 182,1.0)",
                borderDash: [4,1],
                data: rawfoward_future
            }
        ]
};

var ctx = document.getElementById("myChart1").getContext("2d");

var options = {
  title: {
            display: true,
            text: 'RAW Data Volume in TB',
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
