import React from 'react';
import { client_env } from '../client_env.js';
// import { DefaultPlayer as Video } from 'react-html5video';

const GoogleMaps = ({response}) =>  {
  // var bleh = response.data + ``;
  // console.log('key:', client_env.GOOGLEMAPS_API_KEY);
  var src = response.data;
  
  return (
    <div>
      <iframe width="450"
        height="250"
        frameBorder="0"
        src={src}
        allowFullScreen>
      </iframe>
    </div>
  );
}

export default GoogleMaps;