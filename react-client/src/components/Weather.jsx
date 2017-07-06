import React from 'react';

const Weather = ({response}) => {
  const fahrenheitStyle = {fontSize: '40px'};
  const spanStyle = {width: '100px', marginRight:'20px', fontSize: '20px'};
  return (
    <div>
      <div className="ui segment">
        <h2>{response.text}</h2>
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