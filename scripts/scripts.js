//Map 
document.addEventListener("DOMContentLoaded", function(event) {

    var map = L.map('map',{center:[51.506445, -0.062313]}).setView([54.74106, -1.596889], 9);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var popup = L.popup();

    //Clicking tells coordinates
    // map.on('click', onMapClick);
    
    // function onMapClick(e) {
    //     popup
    //         .setLatLng(e.latlng)
    //         .setContent("You clicked the map at " + e.latlng.toString())
    //         .openOn(map);

    //         //Marker locations
    // }
    var marker = L.marker([54.97991, -1.606702]).addTo(map);
    var m2 = L.marker([54.980052, -1.614808]).addTo(map);
    var m3 = L.marker([54.904411, -1.39168]).addTo(map);
    var m4 = L.marker([54.762918, -1.58142]).addTo(map);
    var m5 = L.marker([54.569375, -1.235619]).addTo(map);

    marker.bindPopup("<b>Northumbria University</b>");
    m2.bindPopup("<b>Newcastle University</b>");
    m3.bindPopup("<b>Sunderland University</b>");
    m4.bindPopup("<b>Durham University</b>");
    m5.bindPopup("<b>Teeside University</b>");

    //Pie Chart Starts here
    var ctx = document.getElementById("HomePageChart1").getContext("2d");
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
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(102, 255, 60)',
            'rgb(183, 59, 255)',
          ],
          hoverOffset: 4
        }]
      };
    const config = {
        type: 'pie',
        data: data,
      };
    var chart = new Chart(ctx, config)
    
    //Bar chart starts here

    var ctx2 = document.getElementById("HomePageChart2").getContext("2d")
    const labels = ['Northumbria', 'Newcastle', 'Sunderland', 'Durham', 'Teeside' ];
    const data2 = {
      labels: labels,
      datasets: [{
        label: 'My Second Dataset',
        
        data: [77, 75, 78, 77, 78, 70, 80],
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',

        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',

        ],
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
   new Chart(ctx2, config2);

});



    