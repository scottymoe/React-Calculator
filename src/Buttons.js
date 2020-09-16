import React from "react";
import { Button } from 'semantic-ui-react';

export default class Buttons extends React.Component {
  buttonPressed = e => {
    this.props.buttonPressed(e.target.name);
  };
 render() {
     return (
        <Button.Group vertical>
          <Button onClick={this.buttonPressed} name= "0" basic color='blue'>
            0
          </Button>
          <Button onClick={this.buttonPressed} name= "1" basic color='red'>
            1
          </Button>
          <Button onClick={this.buttonPressed} name= "2" basic color='green'>
            2
          </Button>
          <Button onClick={this.buttonPressed} name= "3" basic color='blue'>
            3
          </Button>
          <Button onClick={this.buttonPressed} name= "4" basic color='blue'>
            4
          </Button>
          <Button onClick={this.buttonPressed} name= "5" basic color='blue'>
            5
          </Button>
          <Button onClick={this.buttonPressed} name= "6" basic color='blue'>
            6
          </Button>
          <Button onClick={this.buttonPressed} name= "7" basic color='blue'>
            7
          </Button>
          <Button onClick={this.buttonPressed} name= "8" basic color='blue'>
            8
          </Button>
          <Button onClick={this.buttonPressed} name= "9" basic color='blue'>
            9
          </Button><br/>
          <Button onClick={this.buttonPressed} name= "+" basic color='blue'>
            +
          </Button>
          <Button onClick={this.buttonPressed} name= "-" basic color='blue'>
            -
          </Button>
          <Button onClick={this.buttonPressed} name= "*" basic color='blue'>
            *
          </Button>
          <Button onClick={this.buttonPressed} name= "/" basic color='blue'>
            /
          </Button>
          <Button onClick={this.buttonPressed} name= "=" basic color='blue'>
            =
          </Button>
          <Button onClick={this.buttonPressed} name= "C" basic color='blue'>
            C
          </Button>
          <Button onClick={this.buttonPressed} name= "." basic color='blue'>
            .
          </Button>
          <Button onClick={this.buttonPressed} name= "Back" basic color='blue'>
            Back
          </Button>
        </Button.Group>
     );
    }
  
}
