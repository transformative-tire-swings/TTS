const api = require('./apis');

// handler takes 4 arguments, which API, current location object, place str if any, original user string
const handler = (apiName, loc, placeStr, originalStr) => { 
  if (apiName) {
    console.log(`ApiHandler. api: ${api}, apiName: ${apiName}`);
    console.log(`Loc: ${loc}, placeStr: ${placeStr}, originalStr: ${originalStr}`);
    return api[apiName].getResponse(loc, placeStr, originalStr);
  } else {
    return api.cbot.getResponse(originalStr);
  }

};


module.exports = handler;