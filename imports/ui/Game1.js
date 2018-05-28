import React, { Component } from 'react';
import { Header, Segment, Button } from 'semantic-ui-react';

export default class GameOne extends Component {

  constructor(props){
    super(props)
    this.state = {
      randNum: 0,
      chineseNum: 0,
      wordNum: ["zero"]
    }
  }

  randNumb = (event) => {
    let min = 0;
    let max = 9;
    let random = (Math.floor(Math.random() * (max - min + 1)) + min);
    let chineseN = random.toLocaleString('zh-u-nu-hanidec');


    this.setState({
      randNum: random,
      chineseNum: chineseN
    })
  }

  pick = (event) => {

    let min = 0;
    let max = 9;
    //let random = (Math.floor(Math.random() * (max - min + 1)) + min);

    getWord = (number) => {
    
    let word = {
      '0': 'zero',
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four', 
      '5': 'five', 
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine',
    }
    return word[number]
  }

  let numToWord = getWord(this.state.randNum)

  let arr = []
  arr.push(this.state.randNum)

  while (arr.length != 3){
    let random = (Math.floor(Math.random() * (max - min + 1)) + min);
      if (random != arr[0]) {
        arr.push(random);
      }
  }
  
  console.log(arr)

  this.setState({
      wordNum: numToWord
    })
  }

/*
  pick = (event) => {

    let word = null;

    switch (this.state.randNum){
      case 0:
        word = 'zero'
        break;
      case 1:
        word = 'one'
        break;
      case 2:
        word = 'two'
        break;
      case 3:
        word = 'three'
        break;
      case 4:
        word = 'four'
        break;
      case 5:
        word = 'five'
        break;
      case 6:
        word = 'six'
        break;
      case 7:
        word = 'seven'
        break;
      case 8:
        word = 'eight'
        break;
      case 9:
        word = 'nine'
        break;
    }

    this.setState({
      wordNum: word
    })
  }
*/

  
  render() {
    return(
    <Segment>
      <Button color='red' size='huge' onClick={this.randNumb.bind(this)}>{this.state.chineseNum}</Button>
      <Button color='blue' size='huge' onClick={this.pick.bind(this)}>{this.state.wordNum}</Button>
    </Segment>
    );
  }

}
