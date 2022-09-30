import { USER } from "./actiontype";


const insitState = {
    USER_DATA: {}
}
export  const reducer =(state=insitState,{type,payload})=>{
    switch(type){
      case  USER: {
          return {
               ...state,
               USER_DATA:{...state.USER_DATA,payload}
          }
      }
     
      
      default : 
          return state
      
    }
}