import React from 'react';

const Cleverbot = ({response}) => {
  const divStyle = {width: '400px'};
  return (

    <h2>{response.text}</h2>
  );
};

export default Cleverbot;