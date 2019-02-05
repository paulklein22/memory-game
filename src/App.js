import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Image from './components/Image';
import Images from './components/Images.json';
import './App.css';

import Bith1 from './images/bith1.jpg';
import Bith2 from './images/bith2.jpg';
import Bom from './images/bom.jpg';
import Dannik from './images/dannik.jpg';
import Drevazan from './images/drevazan.jpg';
import Duros from './images/duros.jpg';
import Feltipern from './images/feltipern.jpg';
import Greedo from './images/greedo.jpg';
import Hemdazon from './images/hemdazon.jpg';
import Jawa1 from './images/jawa1.jpg';
import Kabe from './images/kabe.jpg';
import Ketwol from './images/ketwol.jpg';
import Labria from './images/labria.jpg';
import Melas from './images/melas.jpg';
import Momawnadon from './images/momawnadon.jpg';
import Moorseerian from './images/moorseerian.jpg';
import Muftak from './images/muftak.jpg';
import Myo from './images/myo.jpg';
import Pondababa from './images/pondababa.jpg';
import Zutton from './images/zutton.jpg';

class App extends Component {
  state = {
    currentScore: 0,
    topScore: 0,
    message: 'Good Luck!',
    clicked: []
  };

  shuffleArray = array => {
    let imgArray = Images;

    for (let i = 0; i < imgArray.length; i++) {
      let random = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[random]] = [imgArray[random], imgArray[i]];
    }
    return imgArray;
  };

  pickImg = name => {
    let clicked = this.state.clicked;

    if (clicked.indexOf(name) === -1) {
      this.setState({
        clicked: clicked.concat(name),
        currentScore: this.state.currentScore + 1,
        topScore:
          this.state.currentScore + 1 > this.state.topScore
            ? this.state.currentScore + 1
            : this.state.topScore,
        message: 'Good guess, keep going!'
      });
      this.shuffleArray();
    } else {
      this.setState({
        message: 'Game Over! Click an alien to play again',
        currentScore: 0,
        clicked: []
      });
    }
  };

  imageChoice = name => {
    switch (name) {
      case 'Bith1':
        return `${Bith1}`;
      case 'Bith2':
        return `${Bith2}`;
      case 'Bom':
        return `${Bom}`;
      case 'Dannik':
        return `${Dannik}`;
      case 'Drevazan':
        return `${Drevazan}`;
      case 'Duros':
        return `${Duros}`;
      case 'Feltipern':
        return `${Feltipern}`;
      case 'Greedo':
        return `${Greedo}`;
      case 'Hemdazon':
        return `${Hemdazon}`;
      case 'Jawa1':
        return `${Jawa1}`;
      case 'Kabe':
        return `${Kabe}`;
      case 'Ketwol':
        return `${Ketwol}`;
      case 'Labria':
        return `${Labria}`;
      case 'Melas':
        return `${Melas}`;
      case 'Momawnadon':
        return `${Momawnadon}`;
      case 'Moorseerian':
        return `${Moorseerian}`;
      case 'Muftak':
        return `${Muftak}`;
      case 'Myo':
        return `${Myo}`;
      case 'Pondababa':
        return `${Pondababa}`;
      default:
        return `${Zutton}`;
    }
  };

  render() {
    return (
      <div>
        <Navbar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Header />
        <Main>
          {this.shuffleArray(Images).map(image => (
            <Image
              src={this.imageChoice(image.name)}
              name={image.name}
              key={image.name}
              pickImg={this.pickImg}
            />
          ))}
        </Main>
      </div>
    );
  }
}

export default App;
