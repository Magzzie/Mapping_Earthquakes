// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with an SFO airport center and zoom level.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([39.8, -98.6], 4);

// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085], // Los Angeles International Airport (LAX)
//     [37.6213, -122.3790] // San Francisco International Airport (SFO) 
// ];

// // Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085], // Los Angeles International Airport (LAX)
//     [37.6213, -122.3790], // San Francisco International Airport (SFO) 
//     [40.7899, -111.9791], // Salt Lake City International Airport (SLC)
//     [47.4502, -122.3088] // Seattle-Tacoma International Airport (SEA)
// ];

// Skill drill: Coordinates for each point to be used in the line from SFO to JFK.
let line = [
    [37.6213, -122.3790], // San Francisco International Airport (SFO) 
    [30.1975, -97.6664], // Austin-Bergstrom International Airport (AUS)
    [39.9999, -82.8872], // John Glenn Columbus International Airport (CMH)
    [43.6777, -79.6248], //Toronto Pearson International Airport (YYZ)
    [40.6413, -73.7781] // John F. Kennedy International Airport (JFK)
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    dashArray: "7, 10",
    weight: 4,
    opacity: 0.5
}).addTo(map);

// Use the Mapbox Styles API
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);







