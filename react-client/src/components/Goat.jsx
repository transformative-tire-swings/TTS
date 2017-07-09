import React from 'react';


const Goat = ({response}) => {
  return (
    <div>
      <div className="ui centered grid">
        <div style={{color: 'white', marginBottom: '30px', textAlign: 'center'}} className="ui centered row">{response.text.slice(0, 37)}</div>

        <div className="ui centered six wide column">
          <div className="ui segment">
            <div className="ui fluid image">
              <img style={{maxHeight: '300px'}} src='../libs/goat.gif'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goat;
