
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import QuestionItem from './QuestionItem'

class QuestionList extends PureComponent {
  renderquestion(question){
    
  }
    render() {
      return(
        <ul>
      { this.props.questions.map((question)=><QuestionItem question= {question} /> ) }
      </ul>
      )
     }

    }


  const mapStateToProps = state => ({
    questions: state.questions
})

  export default connect( mapStateToProps ) (QuestionList)