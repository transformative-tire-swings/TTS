require('dotenv').config();
const request = require('request-promise');

const googlemaps = {

  getResponse: (loc, placeStr, originalStr) => {
    // originalString is the text query!
    // var locRegex = /directions(.*)/gi;
    var locRegex = /directions(?:\s{1}to)*(.*)/gi;
    var location = locRegex.exec(originalStr);
    console.log('Location:', location);
    var destination = location[1];
    var rGeocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?` + 
      `latlng=${loc.lat},${loc.lon}&` +
      `result_type=street_address&` +
      `key=${process.env.googlemaps_api_key}`;

    console.log('rGeocodeUrl', rGeocodeUrl);
    return request(rGeocodeUrl)
      .then(res => {
        res = JSON.parse(res);
        var address = res.results[0].formatted_address;
        var data = `https://www.google.com/maps/embed/v1/directions?` + 
          `&destination=${destination}` +
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