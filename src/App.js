import React from 'react';
import { Titlelabel } from './Label';
import { ComponentList } from './ComponentList';
import { Form } from './Form';
import './App.css';

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: []
    }
  }

  updateArray = (value) => {
    let newArray=[];
    let j = 1;
    for(let i = 0; i < value; i++){
      newArray.push(j+i);
    }
    this.setState({numbers: newArray});
  }

  render() {
    return (
      <div className="App">
        <Titlelabel title="Key and Array" />
        <Form onClick={this.updateArray}/>
        <ComponentList numbers={this.state.numbers} />
      </div>
    );
  }
}

export default App;
