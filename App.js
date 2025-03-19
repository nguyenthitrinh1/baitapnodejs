import React from 'react';
import { AuthProvider } from './useAuthor';
import Router from './text';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
