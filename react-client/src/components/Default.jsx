import React from 'react';

const DefaultContent = ({response}) => {
  // const paragraphStyle = {width: '270px'};
  return (
    <p>{response.text}</p>
  );
};

export default DefaultContent;



