import React, { Component } from 'react';
import AskQuestion from './components/AskQuestion';
import QuestionList from './components/QuestionList';
import Question from './components/Question'
import { BrowserRouter as Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AskQuestion />
          <QuestionList />
          <Route path="/:question" component={ Question } />

      </div>
    );
  }
}

export default App;
