import React from 'react';
import { GithubUsersProvider } from './commons';
import { HomeLoad } from './pages';

function App() {
  return (
    <GithubUsersProvider>
      <HomeLoad />
    </GithubUsersProvider>
  );
}

export default App;
