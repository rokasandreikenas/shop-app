import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import AppNavigation from './src/navigations/AppNavigation';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
};

export default App;
