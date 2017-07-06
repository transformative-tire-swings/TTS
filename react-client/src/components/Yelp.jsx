import React from 'react';

const Yelp = ({response}) => {
	console.log('Yelp response:', response);
  return (
  	<div>
      <div className="ui segment">
        <h2>I recommend: {response.data.name}</h2>
      </div>
      <div className="ui horizontal segments">
        <div className="ui segment small image">
            <img src={response.data.image} height="300" width="300"/>
        </div>
        <div className="ui segments">
        <div className="ui segment">Rating: {response.data.rating}</div>
        <div className="ui segment">Price: {response.data.price}</div>
        <div className="ui segment">Address: {response.data.address}</div>
        <div className="ui segment">Phone: {response.data.phone}</div>
        </div>
      </div>
    </div>
  );
};

export default Yelp;