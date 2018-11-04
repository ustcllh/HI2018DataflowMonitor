var dates = [
  "11/4","11/5","11/6","11/7","11/8","11/9","11/10","11/11","11/12","11/13","11/14","11/15","11/16","11/17","11/18","11/19","11/20","11/21","11/22","11/23","11/24","11/25","11/26","11/27","11/28","11/29","11/30"
];

var aodtotal = [100,200,300,400,600,900];

var aodspectra = [0,20,30,40,50];

var aodflow = [0,60,70,80,90];

var aodhighpt = [0,20,30,40,70];

var aoddimuon = [0,20,30,40,50];

var aodfoward = [0,20,30,40,50];

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

var aodtotal_future = [];
var aodspectra_future = [];
var aodflow_future = [];
var aodhighpt_future = [];
var aoddimuon_future = [];
var aodfoward_future = [];

// a*i+b;
var aodtotalcorra = getcorra(aodtotal);
var aodtotalcorrb = getcorrb(aodtotal);
var aodspectracorra = getcorra(aodspectra);
var aodspectracorrb = getcorrb(aodspectra);
var aodflowcorra = getcorra(aodflow);
var aodflowcorrb = getcorrb(aodflow);
var aodhighptcorra = getcorra(aodhighpt);
var aodhighptcorrb = getcorrb(aodhighpt);
var aoddimuoncorra = getcorra(aoddimuon);
var aoddimuoncorrb = getcorrb(aoddimuon);
var aodfowardcorra = getcorra(aodfoward);
var aodfowardcorrb = getcorrb(aodfoward);




var i;
for(i=0; i<aodtotal.length; i++){
  aodtotal_future[i]=null;
  aodspectra_future[i]=null;
  aodflow_future[i]=null;
  aodhighpt_future[i]=null;
  aoddimuon_future[i]=null;
  aodfoward_future[i]=null;
}
for(i=aodtotal.length-3; i<dates.length; i++){
  aodtotal_future[i]= aodtotalcorra*i + aodtotalcorrb;
  aodspectra_future[i]= aodspectracorra*i + aodspectracorrb;
  aodflow_future[i]= aodflowcorra*i + aodflowcorrb;
  aodhighpt_future[i]= aodhighptcorra*i + aodhighptcorrb;
  aoddimuon_future[i]= aoddimuoncorra*i + aoddimuoncorrb;
  aodfoward_future[i]= aodfowardcorra*i + aodfowardcorrb;
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
                data: aodtotal
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
                data: aodtotal_future
            },
            {
                label: "Spectra/HF",
                backgroundColor: "rgba(243, 156, 18, 0.2)",
                pointBackgroundColor: "rgba(243, 156, 18, 0.8)",
                pointHoverBackgroundColor: "rgba(243, 156, 18,1.0)",
                borderColor: "rgba(243, 156, 18,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(243, 156, 18,1.0)",
                data: aodspectra
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
                data: aodspectra_future
            },
            {
                label: "FlowCorr",
                backgroundColor: "rgba(41, 128, 185,0.3)",
                pointBackgroundColor: "rgba(41, 128, 185,1.0)",
                pointHoverBackgroundColor: "rgba(41, 128, 185,1.0)",
                borderColor: "rgba(41, 128, 185,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(41, 128, 185,1.0)",
                data: aodflow
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
                data: aodflow_future
            },
            {
                label: "HighPt",
                backgroundColor: "rgba(231, 76, 60,0.4)",
                pointBackgroundColor: "rgba(231, 76, 60,1.0)",
                pointHoverBackgroundColor: "rgba(231, 76, 60,1.0)",
                borderColor: "rgba(231, 76, 60,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(231, 76, 60,1.0)",
                data: aodhighpt
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
                data: aodhighpt_future
            },
            {
                label: "DiMuon",
                backgroundColor: "rgba(46, 204, 113,0.5)",
                pointBackgroundColor: "rgba(46, 204, 113,1.0)",
                pointHoverBackgroundColor: "rgba(46, 204, 113,1.0)",
                borderColor: "rgba(46, 204, 113,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(46, 204, 113,1.0)",
                data: aoddimuon
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
                data: aoddimuon_future
            },
            {
                label: "Foward",
                backgroundColor: "rgba(155, 89, 182,0.6)",
                pointBackgroundColor: "rgba(155, 89, 182,1.0)",
                pointHoverBackgroundColor: "rgba(155, 89, 182,1.0)",
                borderColor: "rgba(155, 89, 182,0.4)",
                pointBorderColor: "#fff",
                pointHoverBorderColor: "rgba(155, 89, 182,1.0)",
                data: aodfoward
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
                data: aodfoward_future
            }
        ]
};

var ctx = document.getElementById("myChart2").getContext("2d");

var options = {
  title: {
            display: true,
            text: 'AOD Data Volume in TB',
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
