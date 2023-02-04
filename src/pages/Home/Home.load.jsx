import React, { useContext, useEffect, useState } from 'react';
import { GithubUsersContext } from '../../commons';
import { HomePage } from './Home';

export const HomeLoad = () => {
  const { githubUsers, searchParam } = useContext(GithubUsersContext);

  useEffect(() => {
    console.log({ githubUsers, searchParam });
  }, [githubUsers, searchParam]);

  return <HomePage />;
};
