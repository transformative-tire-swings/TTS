const request = require('request-promise');
const fredTools = require('../fred/parseTools');
require('dotenv').config();


const restaurant = {

  getResponse: (loc, placeStr, originalStr) => {

    let foodType = fredTools.findFood(originalStr) || 'food';

    let options = {
      uri: `https://api.yelp.com/v3/businesses/search?term=${foodType}&longitude=${loc.lon}&latitude=${loc.lat}&sort_by=rating`,
      method: 'GET',
      headers: {
        'User-Agent': 'Hello-Marcus',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: { 'bearer': `${process.env.yelp_token}` },
      json: true
    };

    return request(options)
    .then((yelpData) => {

      let restaurantData = yelpData.businesses.slice(0, 3);

      var allResDetails = restaurantData.map( (el) => {
        return {
          name: el.name,
          image: el.image_url,
          numReviews: el.review_count,
          rating: el.rating,
          website: el.url.split('?')[0],
          price: el.price,
          address: el.location.display_address.join('\n'),
          phone: el.display_phone,
          text: `I recommend ${el.name}`
        };
      });
      console.log('allresdeets', allResDetails);
      
      let apiResponse = {
        type: 'widget',
        api: 'yelp',
        text: allResDetails[0].text,
        data: allResDetails
      };
      return apiResponse;
    });
  }

};

module.exports = restaurant;