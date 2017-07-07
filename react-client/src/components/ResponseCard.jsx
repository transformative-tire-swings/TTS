import React from 'react';
import DefaultContent from './Default.jsx';
import Cleverbot from './Cleverbot.jsx';
import Weather from './Weather.jsx';
import Yelp from './Yelp.jsx';
import EasterEgg from './EasterEgg.jsx';
import Loading from './Loading.jsx';
import GoogleMaps from './GoogleMaps.jsx';

const ResponseCard = ({response}) => {
  let ElementName;
  console.log('response from responseCard: ', response);
  //default state: before making any request
  if(response.api === "default") {
    ElementName = DefaultContent;
  } else if(response.api === "cleverbot") {
    ElementName = Cleverbot;
  } else if (response.api === "weather") {
    ElementName = Weather;
  } else if (response.api === "yelp") {
    ElementName = Yelp;
  } else if (response.api === "easteregg") {
    ElementName = EasterEgg;
  } else if (response.api === "loading") {
    ElementName = Loading;
  } else if (response.api === "googlemap") {
    ElementName = GoogleMaps;
  }

  console.log('RESPONSE FROM SERVER:', response.data, 'type:', typeof response.data);

  const divStyle = {width: '400px', marginTop: '100px'};
  const textStyle = {
    marginTop: '30px', 
    marginBottom: '285px',
    height: '300px', 
    fontSize: '43px', 
    width: '100%',
    color: 'white',
    borderStyle: 'none', 
    boxShadow: 'none', 
    wordWrap: 'normal', 
    wordBreak: 'normal', 
    whiteSpace: 'normal' 
  };

  return (
    <div className='ui centered grid'>
      <div className={`ui header ${response.api === 'googlemap' ? 'fullWidthTransition' : '' }`}>
        <div style={textStyle}>
          <ElementName response={response} />
        </div>
      </div>
    </div>


  );
};

export default ResponseCard;


