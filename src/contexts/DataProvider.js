import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [githubData, setGithubData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username] = useState('mruthai')

useEffect(() => {
  const fetchGitHubData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub repositories');
      }
      const data = await response.json();
      setGithubData(data);
      console.log(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }
  fetchGitHubData();

}, [])
  

  return (
    <DataContext.Provider value={{ githubData, loading, error, }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
