import axios from 'axios';

export const GitHubActions = {
  GET_USERS: "GET_USERS",
  GET_USER_AND_REPOS: "GET_USER_AND_REPOS",
  CLEAR_USERS: "CLEAR_USERS",
  SET_LOADING: "SET_LOADING",
};

const GITHUB_TOKEN = process.env.REACT_APP_GTHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const GITHUB = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
    }
})

const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text });
  const response = await GITHUB.get(`/search/users?${params}`)
  return {
    type: GitHubActions.GET_USERS,
    payload: response?.data?.items,
  };
};

const getUserAndRepos = async (login) => {
  const [user,repos] = await Promise.all([GITHUB.get(`/users/${login}`),GITHUB.get(`/users/${login}/repos`)]);
  return {
    type: GitHubActions.GET_USER_AND_REPOS,
    payload: {user:user.data,repos:repos.data}
  }
};

const clearUsers = () => {
  return {
    type: GitHubActions.CLEAR_USERS,
  };
};

const setLoading = () => {
  return {
    type: GitHubActions.SET_LOADING,
  };
};

export { getUserAndRepos, searchUsers, clearUsers, setLoading };
