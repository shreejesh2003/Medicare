import { Result } from "postcss";
import {createContext, useContext,useEffect,useReducer} from "react"

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null
  };
  
// const initialState = {
//     user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
//     role: localStorage.getItem('role') || null,
//     token: localStorage.getItem('token') || null
//   };


export const authContext=createContext(initialState)



const authReducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN_START':
        return {
          ...state,
          user: null,
          role: null,
          token: null,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: {
            ...action.payload.user,
            name: action.payload.name 
        // Update the user's name
          },
          token: action.payload.token,
          role: action.payload.role
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
          role: null,
          token: null,
        };
      default:
        return state;
    }
  };
export const AuthContextProvider=({children})=>{
   const [state,dispatch]=useReducer(authReducer,initialState)
   useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
    localStorage.setItem('token', state.token);
    localStorage.setItem('role', state.role);
  }, [state]);

// useEffect(() => {
//     localStorage.setItem('user', JSON.stringify(state.user));
//     localStorage.setItem('token', state.token);
//     localStorage.setItem('role', state.role);
//   }, [state]);
   return <authContext.Provider value={{user:state.user,token:state.token,role:state.role,dispatch}}>
    {children}
   </authContext.Provider>
}