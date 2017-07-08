import React from 'react';

const Yelp = ({response}) => {
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
      textIndent: '10px'
  };
  let stars = [];
  for (var i = 1; i <= response.data.rating; i++) {
    stars.push('star');
  }
  if (response.data.rating % 1 > 0) {
    stars.push('star half');
  }
  let dollars = [];
  for (var i = 1; i <= response.data.price.length; i++) {
    dollars.push('dollar');
  }

  return (
  	<div>
        <div className="ui centered grid" style={{color: 'white'}}>
        <p style={{marginBottom: '50px'}}>{response.text}</p>
        </div>

        <div className="ui grid">
        <div className="ui centered eight wide column">
        <div className="ui segment">
        <div className="ui fluid image">
        <div className="ui green right ribbon label">
        {dollars.map((dollar) => {
          return <i className={dollar + " icon"}></i>
        })}
        </div>
        <div className="ui yellow ribbon label">
        {stars.map((star, index) => {
          return <i className={star + " icon"}></i>
        })}
        </div>
          <img src={response.data.image}/>
        </div>
        <div style={contentStyle}>Phone Number: {response.data.phone}</div>
        <div style={contentStyle}>Address: {response.data.address}</div>
        <div style={contentStyle}>  
          <a href={response.data.website}>More Information about {response.data.name}</a>
        </div>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Yelp;

      

      // <div className="ui centered item">
      //     <div className="ui medium circular image">
      //       <img src={response.data.image}/>
      //     </div>
      //     <div className="ui content">
      //     <div className="ui description" style={contentStyle}>Rating: {response.data.rating}</div>
      //     <div className="ui description" style={contentStyle}>Price: {response.data.price}</div>
      //     <div className="ui description" style={contentStyle}>Address: {response.data.address}</div>
      //     <div className="ui description" style={contentStyle}>Phone Number: {response.data.phone}</div>
      //     <div className="ui description" style={contentStyle}>  
      //     <a href={response.data.website}>More Information about {response.data.name}</a>
      //     </div>
      //     </div>
      // </div>