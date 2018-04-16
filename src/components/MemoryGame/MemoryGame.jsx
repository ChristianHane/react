import React from 'react';
import characterArrays from '../../characters.json';
import CharacterCard from '../CharacterCard/CharacterCard.jsx';
import Header from '../Header.jsx';

class MemoryGame extends React.Component {
  state = {
    score: 0,
    characterArrays: characterArrays,
    guessedCorrectly: true,
  }

  handleClick = event => {
    const clickedId = Number(event.target.attributes.getNamedItem("data-id").value);

    const concatCharArray = [...this.state.characterArrays[0], ...this.state.characterArrays[1], ...this.state.characterArrays[2], ...this.state.characterArrays[3]];
    const shuffledArray = this.shuffle(concatCharArray);
    const clickedItem = shuffledArray.findIndex(character => Number(character.id) === clickedId);

    if(shuffledArray[clickedItem].clicked === "true") {
      const newArray = [[shuffledArray[0], shuffledArray[1], shuffledArray[2], shuffledArray[3]], [shuffledArray[4], shuffledArray[5], shuffledArray[6], shuffledArray[7]], [shuffledArray[8], shuffledArray[9], shuffledArray[10], shuffledArray[11]], [shuffledArray[12], shuffledArray[13], shuffledArray[14], shuffledArray[15]]];            
      this.gameOver(newArray);
    } else {
      shuffledArray[clickedItem].clicked = "true";
      const newArray = [[shuffledArray[0], shuffledArray[1], shuffledArray[2], shuffledArray[3]], [shuffledArray[4], shuffledArray[5], shuffledArray[6], shuffledArray[7]], [shuffledArray[8], shuffledArray[9], shuffledArray[10], shuffledArray[11]], [shuffledArray[12], shuffledArray[13], shuffledArray[14], shuffledArray[15]]];            
      this.changeState(newArray);
    }
  }

  changeState = (newArray) => {
    const state = { ...this.state };
    state.score = this.state.score + 1;
    state.characterArrays = newArray;
    state.guessedCorrectly = true;    
    this.setState(state);
  }

  gameOver = newArray => {
    const state = {...this.state};
    state.score = 0;
    state.guessedCorrectly = false;
    state.characterArrays = newArray.map(characters => (characters.map(character => ({
      id: character.id,
      image: character.image,
      clicked: "false",
    }))));
    this.setState(state);
  }

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  render() {
    return (
      <div style={{backgroundColor: 'rgb(169,169,169)'}}>
        <Header gussedCorrectly={this.state.guessedCorrectly} score={this.state.score}/>
        <div className="container" style={{marginTop: 50}}>
          {this.state.characterArrays.map((characters, index) => {
            return (
              <div className="row" style={{height: 300}} key={index}>
                {characters.map((character) => {
                  return(
                    <CharacterCard 
                      key={character.id}
                      character={character}
                      onClick={this.handleClick}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default MemoryGame;
