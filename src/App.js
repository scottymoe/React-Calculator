import React from 'react';
import './App.css';
// import { Button, Table} from "semantic-ui-react";
import {Container, Divider} from "semantic-ui-react"
import Buttons from "./Buttons";
import Result from "./Result";
import "./styles.css";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      result: ""
    }
  }
  state = {
    result: " "
  }
  buttonPressed = buttonName =>{
    this.setState({
      result: buttonName
    });
  }
  
  // calculate = () => {
  //     this.setState({
  //       result: eval (this.state.result)
  //     });
  //}
  render(){
    return(
      <Container >
        <Result result={this.state.result}/>
      <Divider vertical></Divider>
        <Buttons buttonPressed={this.buttonPressed}/>
      </Container>
    );
  }
}
// const styles = {
//   container: {
//        // position: "relative",
//         width: "300px",
//         height:"300px",
//         backgroundColor: "grey",
//         border: "2px solid",
//   },
//   // .result {
//   //         height:"200px",
//   //         border: "30px",
//   //         textAlign: "left",
//   // },
// };

export default App;
