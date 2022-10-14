import { GitHubActions } from "./GitHubActions"

export const gitHubReducer = (state,action)=>{
    switch(action.type){
        case GitHubActions.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case GitHubActions.GET_USER_AND_REPOS:
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                loading: false
            }
        case GitHubActions.CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        case GitHubActions.SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default: return state;
    }
}