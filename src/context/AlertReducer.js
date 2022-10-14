import { AlertActions } from "./AlertActions";

export const AlertReducer = (state,action)=>{
    switch(action.type){
        case AlertActions.SET_ALERT: {
            return {...action.payload}
        }
        case AlertActions.REMOVE_ALERT: {
            return {message:"", type: ""};
        }
        default: {
            return state;
        }
    }
}