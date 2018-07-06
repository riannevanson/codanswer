
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Link } from "react-router-dom";

class QuestionItem extends PureComponent {

       
    
    render() {
      return(
      <div> {<Link to={`/${this.props.question}`} >  {this.props.question} </Link>}</div> 
      )
     }

    }


  const mapStateToProps = state => ({
    questions: state.questions
})

  export default connect( mapStateToProps ) (QuestionItem)