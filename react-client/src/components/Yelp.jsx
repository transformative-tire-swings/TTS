import React from 'react';

class Yelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: this.props.response.data,
      current: this.props.response.data[0]
    };
    // this.nextRestaurant = this.nextRestaurant.bind(this);
  
    console.log('state.res', this.state.restaurants);
  }
  render() {

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

    let stars = [];
    for (var i = 1; i <= this.state.current.rating; i++) {
      stars.push('star');
    }
    if (this.state.current.rating % 1 > 0) {
      stars.push('star half');
    }
    let dollars = [];
    for (var i = 1; i <= this.state.current.price.length; i++) {
      dollars.push('dollar');

    }

    return (
      <div>
        <div className="ui centered grid">
          <div style={{color: 'white', marginBottom: '30px', textAlign: 'center'}} className="ui centered row">{this.props.response.text}</div>
          <div className="ui six wide column">
            <div className="ui centered row">
              <div className="ui segment">
                <div className="ui fluid image">
                  <div style={{marginLeft: '0'}} className="ui green right ribbon label">
                    {dollars.map((dollar) => {
                      return <i className={dollar + ' icon'}></i>;
                    })}
                  </div>
                  <div style={{marginLeft: '0'}} className="ui yellow ribbon label">
                    {stars.map((star, index) => {
                      return <i className={star + " icon"}></i>;
                    })}
                  </div>
                  <img style={{maxHeight: '300px'}} src={this.props.response.data.image}/>
                </div>
                <div style={contentStyle}>{this.props.response.data.address}</div>
                <div style={contentStyle}>{this.props.response.data.phone}</div>
                <div style={contentStyle}>  
                  <a href={this.props.response.data.website}>More Information about {this.props.response.data.name}</a>
                </div>
              </div>
            </div>
          </div>
          <i className="inverted arrow right icon"></i>
        </div>
      </div>
    );
  }
}

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