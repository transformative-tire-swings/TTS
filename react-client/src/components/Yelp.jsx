import React from 'react';

const Yelp = ({response}) => {
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
        <p style={{marginBottom: '50px'}}>I recommend {response.data.name}</p>
      </div>

      <div className="ui centered item">
          <div className="ui medium circular image">
            <img src={response.data.image}/>
          </div>
          <div className="ui content">
          <div className="ui description" style={contentStyle}>Rating: {response.data.rating}</div>
          <div className="ui description" style={contentStyle}>Price: {response.data.price}</div>
          <div className="ui description" style={contentStyle}>Address: {response.data.address}</div>
          <div className="ui description" style={contentStyle}>Phone Number: {response.data.phone}</div>
          <div className="ui description" style={contentStyle}>  
          <a href={response.data.website}>More Information about {response.data.name}</a>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Yelp;