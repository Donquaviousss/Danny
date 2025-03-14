document.addEventListener("DOMContentLoaded", function(event) {

    var map = L.map('map',{center:[51.506445, -0.062313]}).setView([53.14677, -2.263184], 6);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var popup = L.popup();


    //Coordinate finder on click
    // map.on('click', onMapClick);

    // function onMapClick(e) {
    //     popup
    //         .setLatLng(e.latlng)
    //         .setContent("You clicked the map at " + e.latlng.toString())  
    //         .openOn(map); 
    // }


    // //Metro icons
    // var myIcon = L.icon({
    //     iconUrl: 'g',
    //     iconSize: [38, 95],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    //     shadowUrl: 'my-icon-shadow.png',
    //     shadowSize: [68, 95],
    //     shadowAnchor: [22, 94]
    // });


    //North east markers
    var marker = L.marker([54.97991, -1.606702]).addTo(map);
    var m2 = L.marker([54.980052, -1.614808]).addTo(map);
    var m3 = L.marker([54.904411, -1.39168]).addTo(map);
    var m4 = L.marker([54.762918, -1.58142]).addTo(map);
    var m5 = L.marker([54.569375, -1.235619]).addTo(map);

    //General Northern Markers
    var m6 = L.marker([53.7915, -1.765966])
    var m7 = L.marker([53.186223, -2.884705])
    var m8 = L.marker([53.407255, -2.965826])
    var m9 = L.marker([53.373255, -1.492467])
    var m10 = L.marker([53.773243, -0.366948])

    //Eastern Markers
    var m11 = L.marker([52.621002, 1.235962])
    var m12 = L.marker([52.052411, 1.163349])
    var m13 = L.marker([52.204701, 0.128757])
    var m14 = L.marker([51.878769, 0.94373])
    var m15 = L.marker([52.586605, -0.232569])

    //Western Markers
    var m16 = L.marker([52.484936, -1.883705])
    var m17 = L.marker([52.487073, -1.889627])
    var m18 = L.marker([52.588254, -2.12755])
    var m19 = L.marker([52.780158, -2.426562])
    var m20 = L.marker([52.197862, -2.241468])

    //Southern Northern Markers
    var m21 = L.marker([51.242874, -0.590134])
    var m22 = L.marker([51.756936, -1.254737])
    var m23 = L.marker([51.52022, -0.12983])
    var m24 = L.marker([51.458285, -2.601528])
    var m25 = L.marker([51.295417, 1.067248])

    //Closest Metros/trains
    var m26 = L.marker([54.977501, -1.613928])
    var m27 = L.marker([54.974002, -1.613177])
    var m28 = L.marker([54.968754, -1.617227])
    var m29 = L.marker([54.906094, -1.382421])
    var m30 = L.marker([54.779712, -1.581473])



    //All names when clicking the markers
    marker.bindPopup("<b>Northumbria University</b>");
    m2.bindPopup("<b>Newcastle University</b>");
    m3.bindPopup("<b>Sunderland University</b>");
    m4.bindPopup("<b>Durham University</b>");
    m5.bindPopup("<b>Teeside University</b>");

    
    m6.bindPopup("<b>Bradford University</b>");
    m7.bindPopup("<b>Chester University</b>");
    m8.bindPopup("<b>Liverpool University</b>");
    m9.bindPopup("<b>Sheffield University</b>");
    m10.bindPopup("<b>Hull University</b>");

    m11.bindPopup("<b>East Anglia University</b>");
    m12.bindPopup("<b>Suffolk University</b>");
    m13.bindPopup("<b>Parkside ARU University</b>");
    m14.bindPopup("<b>Essex University</b>");
    m15.bindPopup("<b>Peterborough University</b>");
    
    m16.bindPopup("<b>Birmingham University</b>");
    m17.bindPopup("<b>Aston University</b>");
    m18.bindPopup("<b>Wolverhampton University</b>");
    m19.bindPopup("<b>Harper Adams University</b>");
    m20.bindPopup("<b>Worchester St University</b>");

    m21.bindPopup("<b>Surrey University</b>");
    m22.bindPopup("<b>Oxford University</b>");
    m23.bindPopup("<b>London University</b>");
    m24.bindPopup("<b>Bristol University</b>");
    m25.bindPopup("<b>Kent University</b>");

    m26.bindPopup("<b>HayMarket <br> (Closest to Newcastle + Northumbria Uni)</b>");
    m27.bindPopup("<b>Monument</b>");
    m28.bindPopup("<b>Central Station<br></b>");
    m29.bindPopup("<b>Sunderland<br>(Closest to Sunderland Uni 🤯</b>");
    m30.bindPopup("<b>Durham<br>From Central->Durham on train</b>");

document.getElementById("Northeast").addEventListener("change", function(event){
    if(event.target.checked){
        marker.addTo(map);
        m2.addTo(map);
        m3.addTo(map);
        m4.addTo(map);
        m5.addTo(map);
    }
    else{
        marker.remove();
        m2.remove();
        m3.remove();
        m4.remove();
        m5.remove();
    }
})

document.getElementById("North").addEventListener("change", function(event){
    if(event.target.checked){
        m6.addTo(map);
        m7.addTo(map);
        m8.addTo(map);
        m9.addTo(map);
        m10.addTo(map);
    }
    else{
        m6.remove();
        m7.remove();
        m8.remove();
        m9.remove();
        m10.remove();
    }
})

document.getElementById("Eastern").addEventListener("change", function(event){
    if(event.target.checked){
        m11.addTo(map);
        m12.addTo(map);
        m13.addTo(map);
        m14.addTo(map);
        m15.addTo(map);
    }
    else{
        m11.remove();
        m12.remove();
        m13.remove();
        m14.remove();
        m15.remove();
    }
})

document.getElementById("Western").addEventListener("change", function(event){
    if(event.target.checked){
        m16.addTo(map);
        m17.addTo(map);
        m18.addTo(map);
        m19.addTo(map);
        m20.addTo(map);
    }
    else{
        m16.remove();
        m17.remove();
        m18.remove();
        m19.remove();
        m20.remove();
    }
})

document.getElementById("Southern").addEventListener("change", function(event){
    if(event.target.checked){
        m21.addTo(map);
        m22.addTo(map);
        m23.addTo(map);
        m24.addTo(map);
        m25.addTo(map);
    }
    else{
        m21.remove();
        m22.remove();
        m23.remove();
        m24.remove();
        m25.remove();
    }
})
var MetrosHidden= false;
document.getElementById("metrobutton").addEventListener("click", function(event){
    if(!MetrosHidden){
        m26.addTo(map);
        m27.addTo(map);
        m28.addTo(map);
        m29.addTo(map);
        m30.addTo(map);
    }
    else{
        m26.remove();
        m27.remove();
        m28.remove();
        m29.remove();
        m30.remove();
    }
    MetrosHidden= !MetrosHidden
})



});


//document.getElementsByClassName("Northeast")
