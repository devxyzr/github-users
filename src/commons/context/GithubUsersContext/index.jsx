import React, { useContext, createContext, useReducer } from 'react';

export const GithubUsersContext = createContext();

export function useGithubContext() {
  return useContext(GithubUsersContext);
}

const initialValues = {
  searchParam: '',
  githubUsers: [],
  githubUserDetail: {},
  isVisibleDetail: false,
};

const actions = {
  SET_SEARCH_PARAM: 'SET_SEARCH_PARAM',
  SET_GITHUB_USERS: 'SET_GITHUB_USERS',
  SET_GITHUB_USER_DETAIL: 'SET_GITHUB_USER_DETAIL',
  SET_IS_VISIBLE: 'SET_IS_VISIBLE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_SEARCH_PARAM: {
      return {
        ...state,
        searchParam: action.payload,
      };
    }

    case actions.SET_GITHUB_USERS: {
      return {
        ...state,
        githubUsers: action.payload,
      };
    }
    case actions.SET_GITHUB_USER_DETAIL: {
      return {
        ...state,
        githubUserDetail: action.payload,
      };
    }
    case actions.SET_IS_VISIBLE: {
      return {
        ...state,
        isVisibleDetail: action.payload,
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
    githubUserDetail: state.githubUserDetail,
    isVisibleDetail: state.isVisibleDetail,
    setSearchParam: (value) => {
      dispatch({ type: actions.SET_SEARCH_PARAM, payload: value });
    },
    setGithubUsers: (value) => {
      dispatch({ type: actions.SET_GITHUB_USERS, payload: value });
    },
    setGithubUserDetail: (value) => {
      dispatch({ type: actions.SET_GITHUB_USER_DETAIL, payload: value });
    },
    setIsVisible: (value) => {
      dispatch({ type: actions.SET_IS_VISIBLE, payload: value });
    },
  };
  return (
    <GithubUsersContext.Provider value={value}>
      {children}
    </GithubUsersContext.Provider>
  );
};
