const backgroundColor=[
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)',
    'rgb(102, 255, 60)',
    'rgb(183, 59, 255)',]
document.addEventListener("DOMContentLoaded", function(event) {
    //Pie Chart Starts here
    var ctx = document.getElementById("chart1").getContext("2d");
    const data = {
        labels: [
          'Northumbria',
          'Newcastle',
          'Sunderland',
          'Durham',
          'Teeside',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 87, 64, 41, 31],
          backgroundColor: backgroundColor,
          hoverOffset: 4
        }]
      };
    const config = {
        type: 'pie',
        data: data,
      };
    var chart = new Chart(ctx, config)
    
    //Bar chart starts here

    var ctx2 = document.getElementById("chart2").getContext("2d")
    const labels2 = ['Northumbria', 'Newcastle', 'Sunderland', 'Durham', 'Teeside'];
    const data2 = {
      labels: labels2,
      datasets: [{
        label: 'My Second Dataset',
        
        data: [77, 75, 78, 77, 78, 70, 80],
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,

        
        borderWidth: 1
      }]
    };
    const config2 = {
        type: 'bar',
        data: data2,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      };
      //end of bar chart
    
   new Chart(ctx2, config2);
   var ctx3 = document.getElementById("chart3").getContext("2d")
   const labels3 = ['2021', '2022', '2023', '2024', '2025'];
   const data3 = {
     labels: labels3,
     datasets: [{
       label: 'Northumbria',
       data: [52, 49, 43, 36, 34, ],
       fill: false,
       borderColor: 'rgb(255, 99, 132)',
       backgroundColor: 'rgb(255, 99, 132)',
       tension: 0.1
     },
     {
        label: 'Newcastle',
        data: [23, 37, 36, 30, 26,],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgb(54, 162, 235)',
        tension: 0.1
      },
    {
        label: 'Sunderland',
        data: [108, 92, 83, 75, 75,],
        fill: false,
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgb(255, 205, 86)',
        tension: 0.1
    },
    {
        label: 'Durham',
        data: [7, 6, 6, 8, 7,],
        fill: false,
        borderColor: 'rgb(217, 0, 255)',
        backgroundColor:'rgb(217, 0, 255)',
        tension: 0.1
    },

    {
        label: 'Teesside',
        data: [95, 95, 94, 92, 100,],
        fill: false,
        borderColor: 'rgb(255, 217, 0)',
        backgroundColor: 'rgb(255, 217, 0)',
        tension: 0.1
    }]

   };
   const config3 = {
    type: 'line',
    data: data3,
    options: {
      scales: {
        y: {
            type: 'time',
          reverse: true,
          min: 0,
        }
      }
    },
  };
   new Chart(ctx3, config3);

   var ctx4 = document.getElementById("chart4").getContext("2d")
   const labels4 = ['Northumbria', 'Newcastle', 'Sunderland', 'Durham', 'Teeside'];
   const data4 = {
     labels: labels4,
     datasets: [{
       label: 'My Second Dataset',
       
       data: [90, 96, 87, 98, 86, 60, 100],
       backgroundColor: backgroundColor,
       borderColor: backgroundColor,
       borderWidth: 1
     }]
   };
   const config4 = {
       type: 'bar',
       data: data4,
       options: {
         scales: {
           y: {
             beginAtZero: true
           }
         }
       },
     };
     new Chart(ctx4, config4);


     var ctx5 = document.getElementById("chart5").getContext("2d")
     const labels5 = ['Northumbria', 'Newcastle', 'Sunderland', 'Durham', 'Teeside'];
     const data5 = {
       labels: labels5,
       datasets: [{
         label: 'My Second Dataset',
         
         data: [67, 71, 61, 87, 57, 0, 90],
         backgroundColor: backgroundColor,
         borderColor: backgroundColor,
         borderWidth: 1
       }]
     };
     const config5 = {
         type: 'horizontalBar',
         data: data5,
         options: {
           scales: {
             y: {
               beginAtZero: true
             }
           }
         },
       };
       new Chart(ctx5, config5);
});