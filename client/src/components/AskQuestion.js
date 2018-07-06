
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getQuestion } from '../actions/questions'

class AskQuestion extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
        
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.props.getQuestion(this.state.value);
      }

    render() {
      return(
    <form onSubmit={this.handleSubmit}>
        <label>
          What do you want to know?
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
         )
       }
  }




  

  const mapDispatchToProps = dispatch => ({
    getQuestion: base => dispatch(getQuestion(base))
  })

  export default connect( null, mapDispatchToProps ) (AskQuestion)