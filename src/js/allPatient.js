const options2 = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [60, 40],
  
          backgroundColor: ["#69BEC7", "#ffffff"],
          borderRadius: 1000,
        },
        {
          data: [80, 20],
          backgroundColor: ["#0694A2", "#ffffff"],
          borderRadius: 1000,
        },
        {
          data: [100],
          backgroundColor: ["#E0E0E0"],
          borderRadius: 1000,
        },
        { weight: 1.5 },
      ],
    },
    options: {},
  };
  
  const ctx2 = document.getElementById("chartJSContainer2").getContext("2d");
  new Chart(ctx2, options2);