import React from 'react';

const Yelp = ({response}) => {
	console.log('Yelp response:', response);
  return (
  	<div>

      <div className="ui centered grid" style={{color: 'white'}}>
        <p style={{marginBottom: '50px'}}>I recommend {response.data.name}</p>
      </div>

      <div className="ui centered item">
          <div className="ui medium image">
            <img src={response.data.image}/>
          </div>
          <div className="middle aligned content">
            <p>Rating: {response.data.rating}</p>
            <p>Price: {response.data.price}</p>
            <p>Address: {response.data.address}</p>
            <p>Phone Number: {response.data.phone}</p>
            
            <a href={response.data.website}>More Information about {response.data.name}</a>

          </div>
      </div>
    </div>
  );
};

export default Yelp;