const xValues = ["جمعه","پنج شنبه","چهارشنبه","سه شنبه","دوشنبه","یکشنبه","شنبه"];
const yValues = [8,15,12,27,30,15,22];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "#0694A2",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: true},

  }
});