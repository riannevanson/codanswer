
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Question extends PureComponent {
    

    render() {
      return(
       <div> that is the question</div>

      )
     }

    }



  export default connect( null ) (Question)