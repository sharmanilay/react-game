import React, { Component } from 'react';
import ButtonGroup from './ButtonGroup'; 
import './App.css';

class App extends Component {
  handleClick (count) {
    let buttons =  document.getElementsByTagName('button');

    if (buttons.length >0) {
      let  playingZone = document.getElementById("box");
      if (buttons[0].innerHTML!='' && buttons[1].innerHTML!='' && buttons[2].innerHTML!='' && buttons[0].innerHTML == buttons[1].innerHTML && buttons[0].innerHTML == buttons[2].innerHTML) {
        playingZone.innerHTML = buttons[0].innerHTML + ' WINS';
      } else if (buttons[3].innerHTML!='' && buttons[4].innerHTML!='' && buttons[5].innerHTML!='' && buttons[3].innerHTML == buttons[4].innerHTML && buttons[4].innerHTML == buttons[5].innerHTML) {
        playingZone.innerHTML = buttons[3].innerHTML + ' WINS';
      } else if (buttons[6].innerHTML!='' && buttons[7].innerHTML!='' && buttons[8].innerHTML!='' && buttons[6].innerHTML == buttons[7].innerHTML && buttons[7].innerHTML == buttons[8].innerHTML) {
        playingZone.innerHTML = buttons[6].innerHTML + ' WINS';
      } else if (buttons[0].innerHTML!='' && buttons[3].innerHTML!='' && buttons[6].innerHTML!='' && buttons[0].innerHTML == buttons[3].innerHTML && buttons[0].innerHTML == buttons[6].innerHTML) {
        playingZone.innerHTML = buttons[0].innerHTML + ' WINS';
      } else if (buttons[1].innerHTML!='' && buttons[4].innerHTML!='' && buttons[7].innerHTML!='' && buttons[1].innerHTML == buttons[4].innerHTML && buttons[1].innerHTML == buttons[7].innerHTML) {
        playingZone.innerHTML = buttons[1].innerHTML + ' WINS';
      } else if (buttons[2].innerHTML!='' && buttons[5].innerHTML!='' && buttons[8].innerHTML!='' && buttons[2].innerHTML == buttons[5].innerHTML && buttons[2].innerHTML == buttons[8].innerHTML) {
        playingZone.innerHTML = buttons[2].innerHTML + ' WINS';
      } else if (buttons[0].innerHTML!='' && buttons[4].innerHTML!='' && buttons[8].innerHTML!='' && buttons[0].innerHTML == buttons[4].innerHTML && buttons[0].innerHTML == buttons[8].innerHTML) {
        playingZone.innerHTML = buttons[0].innerHTML + ' WINS';
      } else if (buttons[2].innerHTML!='' && buttons[4].innerHTML!='' && buttons[6].innerHTML!='' && buttons[2].innerHTML == buttons[4].innerHTML && buttons[2].innerHTML == buttons[6].innerHTML) {
        playingZone.innerHTML = buttons[2].innerHTML + ' WINS';
      } else if (count>=9) {
        playingZone.innerHTML = 'DRAW';
      }
    }
    
  }
  render() {
    return (
      <div className="App">
        <div className="Box" id="box">
            <ButtonGroup calcWinner={this.handleClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
