import { convertLength } from '@mui/material/styles/cssUtils';
import React, { useContext, createContext, useReducer } from 'react';

export const GithubUsersContext = createContext();

export function useGithubContext() {
  return useContext(GithubUsersContext);
}

const initialValues = {
  searchParam: '',
  githubUsers: [],
};

const actions = {
  SET_SEARCH_PARAM: 'SET_SEARCH_PARAM',
  SET_GITHUB_USERS: 'SET_GITHUB_USERS',
};

const reducer = (state, action) => {
  // console.log({ action, state });
  switch (action.type) {
    case actions.SET_SEARCH_PARAM: {
      console.log(action.config);
      return {
        ...state,
        searchParam: action.payload,
      };
    }

    case actions.SET_GITHUB_USERS: {
      console.log(action.payload);
      return {
        ...state,
        githubUsers: action.payload,
      };
    }
    default:
      return state;
  }
};

export const GithubUsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const value = {
    searchParam: state.searchParam,
    githubUsers: state.githubUsers,
    setSearchParam: (value) => {
      dispatch({ type: actions.SET_SEARCH_PARAM, payload: value, config: {} });
    },
    setGithubUsers: (value) => {
      dispatch({ type: actions.SET_GITHUB_USERS, payload: value });
    },
  };

  return (
    <GithubUsersContext.Provider value={value}>
      {children}
    </GithubUsersContext.Provider>
  );
};
