import React from 'react';

const Loading = ({response}) =>  {
  return (
    <div>
      <p>{response.text}</p>
      <div className="ui inverted active inline loader"></div>
    </div>
  );
}

export default Loading;

