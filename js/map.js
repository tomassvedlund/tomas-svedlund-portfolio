document.addEventListener("DOMContentLoaded", function () {
    // Initiera kartan och centrera den på Karlstad
    var map = L.map("map").setView([59.3793, 13.5036], 6); // [Lat, Lng], zoomnivå

    // Lägg till OpenStreetMap som kartlager
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19
    }).addTo(map);

    // Lägg till en pinpoint (marker) på Karlstad
    L.marker([59.3793, 13.5036])
        .addTo(map)
       
        .openPopup();
});

