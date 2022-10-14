import { createContext, useReducer } from "react";
import { removeAlert } from "./AlertActions";
import { AlertReducer } from "./AlertReducer";

export const AlertContext = createContext();

export default function AlertContextProvider({ children }) {
  const initialState = {
    message: "",
    type: "",
  };


  const [state,dispatch] = useReducer(AlertReducer,initialState);

  const setAlert = (message,type)=>{
    dispatch(setAlert(message,type));
    setTimeout(()=>{
      dispatch(removeAlert(message,type));
    },3000)
} 



  return <AlertContext.Provider value={{...state,setAlert}}>{children}</AlertContext.Provider>;
}
