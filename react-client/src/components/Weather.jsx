import React from 'react';

const Weather = ({response}) => {
  const contentStyle = {
      marginBottom: '20px',
      fontSize: '20px', 
      borderStyle: 'none', 
      boxShadow: 'none', 
      wordWrap: 'normal', 
      wordBreak: 'normal', 
      whiteSpace: 'normal',
      color: 'white',
      fontWeight: 'normal',
      textIndent: '10px'
  };
  return (
    <div>
      <div className="ui centered grid" style={{color: 'white'}}>
        <p style={{marginBottom: '50px'}}>{response.text}</p>
      </div>

      <div className="ui segments">
        <div className="ui segment small image">
            <img src={"http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png"} height="100" width="100"/>
        </div>
        <div className="ui segment">{response.data.weather[0].description.split(' ').reduce((acc, val) => (acc + val[0].toUpperCase() + val.slice(1) + ' '), '')}</div>
        <div className="ui segment">{Math.round(9/5 * (response.data.main.temp - 273) + 32)} &#8457;</div>
        <div className="ui segment">Wind: {response.data.wind.speed} mph</div>
      </div>
    </div>
  );
};

export default Weather;