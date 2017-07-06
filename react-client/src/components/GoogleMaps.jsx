import React from 'react';
// import { DefaultPlayer as Video } from 'react-html5video';

const GoogleMaps = ({response}) =>  {
  return (
    <div>
      <iframe width="450"
        height="250"
        frameBorder="0"
        src={response.data}
        allowFullScreen>
      </iframe>
    </div>
  );
}

export default GoogleMaps;