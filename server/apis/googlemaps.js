const request = require('request-promise');
// const fredTools = require('../fred/parseTools');
require('dotenv').config();

const googlemaps = {

  getResponse: (loc, placeStr, originalStr) => {
    var data = `https://www.google.com/maps/embed/v1/directions?key=${process.env.googlemaps_api_key}` + 
      `&origin=Oslo+Norway` +
      `&destination=Telemark+Norway` +
      `&avoid=tolls|highways`;
    
    let apiResponse = {
      type: 'widget',
      api: 'googlemap',
      text: 'random text that victor put!',
      data: data
    };
    console.log('Whoo, gMaps responded!');
    return apiResponse;
  //   console.log('ran googlemaps');
  //   let query = null
  //   if(!placeStr) {
  //     query = `https://www.google.com/maps/embed/v1/directions` +
  //       `?key=${process.env.googlemaps_api_key}` +
  //       `&origin=Oslo+Norway` +
  //       `&destination=Telemark+Norway` +
  //       `&avoid=tolls|highways`;
  //   }

  //   let options = {
  //     uri: query,
  //     method: 'GET',
  //     headers: {
  //     }
  //   };
   
  //  return request(options)
  //   .then((data) => {
  //     console.log('Google maps response:', data);

  //     let googlemapsObj = JSON.parse(data);

  //     let response = fredTools.constructWeathertext(originalStr, googlemapsObj);

  //     let apiResponse = {
  //       type: 'widget',
  //       api: 'googlemap',
  //       text: response,
  //       data: googlemapsObj
  //     };
  //     return apiResponse;
  //   })
  }
};

module.exports = googlemaps;