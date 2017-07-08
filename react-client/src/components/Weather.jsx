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
  return (
    <div>
      <div className="ui centered grid">
        <div style={{color: 'white', marginBottom: '30px', textAlign: 'center'}} className="ui centered row">{response.text}</div>

      <div className="ui centered six wide column">
      <div className="ui centered row">
      <div className="ui segment">
      <div className="ui fluid image">
        <img src={"http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png"}/>
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