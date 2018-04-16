import React from 'react';

const Incorrect = props => {
  if(props.incorrect) {
    return (
      <p className="text-center" style={{fontSize: 30, backgroundColor: 'red'}}>You already clicked that one!</p>    
    )
  } else {
    return null;
  }
}

export default Incorrect;
