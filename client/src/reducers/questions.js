
import { ASK_QUESTION, } from '../actions/questions'

const questions = ( state = [], action ) => {
  switch (action.type) {
    case ASK_QUESTION:
      return  [...state, action.payload]
    default:
      return state
  }
}

export default questions