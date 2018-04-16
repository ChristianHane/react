import React from 'react';
import Incorrect from './Incorrect';

const Header = props => {
  return (
    <div>
    <nav className="navbar navbar-default navbar-fixed-top" style={{paddingTop: 15}}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 text-center">
            <span>Clicky Game</span>
          </div>
          <div className="col-md-4 text-center">
            <span>{props.guessedCorrectly ? 'You guessed correctly' : 'You guessed incorrectly'}</span>
          </div>
          <div className="col-md-4 text-center">
            <span>{`Score: ${props.score}`}</span>
          </div>
        </div>
      </div>
    </nav>
    <header style={{margin: `50, 0, 60, 0`, paddingTop: 100, color: 'white', height: 400, backgroundImage: 'url(http://dzasv7x7a867v.cloudfront.net/product_photos/8879275/CIIIEpicPoster_original.jpg)'}}>
      <p className="text-center" style={{marginBottom: 50, fontSize: 40}}>Clicky Game</p>
      <p className="text-center" style={{fontSize: 30}}>Click on an image to earn points, but don't click on any more than once!</p>
      <Incorrect incorrect={props.guessedCorrectly}/>
    </header>
    </div>
  )
}

export default Header;
