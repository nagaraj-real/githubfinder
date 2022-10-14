import { createContext,useReducer } from "react";
import { gitHubReducer } from "./GitHubReducer";

export const GitHubContext = createContext();

export default function GitHubProvider({ children }) {

  const initialState = {
    users: [],
    user:{},
    loading: false,
    repos: []
  };

  const [state, dispatch] = useReducer(gitHubReducer, initialState);


  return (
    <GitHubContext.Provider value={{...state,dispatch}}>{children}</GitHubContext.Provider>
  );
}
