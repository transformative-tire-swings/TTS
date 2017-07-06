require('dotenv').config();
const request = require('request-promise');
// const fredTools = require('../fred/parseTools');
// var GoogleMapsLoader = require('google-maps'); // only for common js environments 
 


const googlemaps = {

  getResponse: (loc, placeStr, originalStr) => {
    console.log('Location:', loc);
    var rGeocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?` + 
      `latlng=${loc.lat},${loc.lon}&` +
      `result_type=street_address&` +
      `key=${process.env.googlemaps_api_key}`;
    // reverse geocode loc for address
    console.log('rGeocodeUrl', rGeocodeUrl);
    return request(rGeocodeUrl)
      .then(res => {
        res = JSON.parse(res);
        var address = res.results[0].formatted_address;

        var data = `https://www.google.com/maps/embed/v1/directions?` + 
          `&destination=Telemark+Norway` +
          `&avoid=tolls|highways` +
          `&key=${process.env.googlemaps_api_key}` +
          `&origin=${address}`;
        
        let apiResponse = {
          type: 'widget',
          api: 'googlemap',
          text: 'You can do this.',
          data: data
        };
        return apiResponse;
      });
  }
};

module.exports = googlemaps;