import React from 'react';
import { GithubUsersProvider } from './commons';
import { HomePage } from './pages';

function App() {
  return (
    <GithubUsersProvider>
      <HomePage />
    </GithubUsersProvider>
  );
}

export default App;
