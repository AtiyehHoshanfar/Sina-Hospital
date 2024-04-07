// ! new patient
const options = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [46, 54],
  
          backgroundColor: ["#69BEC7", "#E0E0E0"],
          borderRadius: 1000,
        },
        { weight: 1.5 },
      ],
    },
    options: {},
  };
  
  const ctx = document.getElementById("chartJSContainer").getContext("2d");
  new Chart(ctx, options);
