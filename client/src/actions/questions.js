export const ASK_QUESTION = 'ASK_QUESTION'


 export const getQuestion = (base) => {
   return{
     type:'ASK_QUESTION',
      payload:base
   }
 }

