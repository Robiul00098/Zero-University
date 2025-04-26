import React from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <HomePage />
      </Layout>
    </ThemeProvider>
  );
}

export default App;