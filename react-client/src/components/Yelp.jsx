import React from 'react';

class Yelp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: this.props.response.data,
      idx: 0,
      current: this.props.response.data[0]
    };
    this.nextRestaurant = this.nextRestaurant.bind(this);
    this.backRestaurant = this.backRestaurant.bind(this);
  
    console.log('IDX IN CONSTR', this.state.idx);
  }

  nextRestaurant() {
    console.log('IDX', this.state.idx);
    this.setState({
      idx: this.state.idx === 4 ? 4 : this.state.idx + 1
    }, () => {
      this.setState({
        current: this.props.response.data[this.state.idx]
      });
    });
  }

  backRestaurant() {
    console.log('IDX', this.state.idx);
    this.setState({
      idx: this.state.idx === 0 ? 0 : this.state.idx - 1
    }, () => {
      this.setState({
        current: this.props.response.data[this.state.idx]
      });
    });
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

          <div style={{color: 'white', marginBottom: '30px', textAlign: 'center'}} className="ui centered row">{this.state.current.text}</div>

          <div className="ui two wide column" style={{textAlign: 'center', padding: '170px 0'}}>
            <i className="inverted arrow left icon" onClick={this.backRestaurant}></i>
          </div>

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
                      return <i className={star + ' icon'}></i>;
                    })}
                  </div>
                  <img style={{maxHeight: '300px'}} src={this.state.current.image}/>
                </div>
                <div style={contentStyle}>{this.state.current.address}</div>
                <div style={contentStyle}>{this.state.current.phone}</div>
                <div style={contentStyle}>  
                  <a href={this.state.current.website}>More Information about {this.state.current.name}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="ui two wide column" style={{textAlign: 'center', padding: '170px 0'}}>
            <i className="inverted arrow right icon" onClick={this.nextRestaurant}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Yelp;