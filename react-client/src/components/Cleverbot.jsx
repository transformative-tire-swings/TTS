import React from 'react';

const Cleverbot = ({response}) => {
  const divStyle = {width: '400px'};
  return (
    <div className='response'>
      <p>{response.text}</p>
    </div>
  );
};

export default Cleverbot;