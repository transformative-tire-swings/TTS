import React from 'react';

const Yelp = ({response}) => {
	console.log('Yelp response:', response);
  return (
  	<div>

      <div className="ui centered grid" style={{color: 'white'}}>
        <p style={{marginBottom: '50px'}}>I recommend {response.data.name}</p>
      </div>

      <div className="ui raised segments">
        <div className="ui horizontal segments">
          <div className="ui segment small image">
            <img src={response.data.image} height="350" width="350"/>
          </div>
          <div className="ui segments">
            <div className="ui black inverted segment"><p>Rating: {response.data.rating}</p></div>
            <div className="ui black inverted segment"><p>Price: {response.data.price}</p></div>
            <div className="ui black inverted segment"><p>Address: {response.data.address}</p></div>
            <div className="ui black inverted segment"><p>Phone Number: {response.data.phone}</p></div>
            <div className="ui black inverted segment">
              <a href={response.data.website}>More Information about {response.data.name}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yelp;