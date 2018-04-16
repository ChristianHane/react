import React from 'react';

const CharacterCard = props => {
  return (
    <div className="col-md-3">
      <img onClick={props.onClick} style={{width: 100, cursor: 'pointer', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%', marginBottom: 20}} alt="" src={props.character.image} data-id={props.character.id}/>
    </div>
  )  
}

export default CharacterCard;
