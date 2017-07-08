import React from 'react';

const Weather = ({response}) => {
  const contentStyle = {
      marginTop: '20px',
      fontSize: '20px', 
      borderStyle: 'none', 
      boxShadow: 'none', 
      wordWrap: 'normal', 
      wordBreak: 'normal', 
      whiteSpace: 'normal',
      color: 'black',
      fontWeight: 'normal',
      textIndent: '10px',
      textAlign: 'center'
  };

  let weatherImagePath = '../libs/weather/clear.gif';
  if (response.data.weather[0].id < 300) {
    weatherImagePath = '../libs/weather/thunderstorm.gif';
  } else if (response.data.weather[0].id < 500) {
    weatherImagePath = '../libs/weather/drizzle.gif';
  } else if (response.data.weather[0].id < 600) {
    weatherImagePath = '../libs/weather/rain.gif';
  } else if (response.data.weather[0].id < 700) {
    weatherImagePath = '../libs/weather/snow.gif';
  } else if (response.data.weather[0].id < 800) {
    weatherImagePath = '../libs/weather/mist.gif';
  } else if (response.data.weather[0].id === 801) {
    weatherImagePath = '../libs/weather/few-clouds.gif';
  } else if (response.data.weather[0].id === 802) {
    weatherImagePath = '../libs/weather/scattered-clouds.gif';
  } else if (response.data.weather[0].id === 803 || response.data.weather[0].id === 804) {
    weatherImagePath = '../libs/weather/cloudy.gif';
  } else if (response.data.weather[0].id < 951 && response.data.weather[0].id > 804) {
    weatherImagePath = '../libs/weather/danger.jpeg';
  } else if (response.data.weather[0].id > 951 && response.data.weather[0].id < 957) {
    weatherImagePath = '../libs/weather/breeze.gif';
  } else if (response.data.weather[0].id < 961 && response.data.weather[0].id >= 957) {
    weatherImagePath = '../libs/weather/windy.gif';
  } else if (response.data.weather[0].id >= 961) {
    weatherImagePath = '../libs/weather/danger.gif';
  }

  return (
    <div>
      <div className="ui centered grid">
        <div style={{color: 'white', marginBottom: '30px', textAlign: 'center'}} className="ui centered row">{response.text}</div>

      <div className="ui centered six wide column">
      <div className="ui centered row">
      <div className="ui segment">
      <div className="ui fluid image">
        <img style={{maxHeight: '300px'}} src={weatherImagePath}/>
      </div>

        <div style={contentStyle}>{response.data.weather[0].description.split(' ').reduce((acc, val) => (acc + val[0].toUpperCase() + val.slice(1) + ' '), '')}</div>
        <div style={contentStyle}>{Math.round(9/5 * (response.data.main.temp - 273) + 32)} &#8457;</div>
        <div style={contentStyle}>Wind: {response.data.wind.speed} mph</div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Weather;