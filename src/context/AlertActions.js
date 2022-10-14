export const AlertActions = {
    SET_ALERT : "SET_ALERT",
    REMOVE_ALERT: "REMOVE_ALERT"
}


const setAlert = (message,type)=>{
    return{
      type: AlertActions.SET_ALERT,
      payload: {message,type}
    }
} 

const removeAlert = (message,type)=>{
    return {
      type: AlertActions.REMOVE_ALERT,
      payload: {message,type}
    };
   
} 

export {setAlert,removeAlert};