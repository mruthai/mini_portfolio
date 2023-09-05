import React, { useState, useEffect } from 'react';

const DisplayGitHub = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username] = useState('mruthai')

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  if (loading) {
    return <p className="text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  return (
    <div>
    <h2 className="text-xl font-semibold mb-4">Public Repositories</h2>
    {repos.length > 5 ? (
      <div>
        <p className="text-gray text-sm">
        {new Date(repos[5].created_at).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
        <strong className="block text-blue-600">{repos[5].name}</strong>
        <p className="text-gray-500">Language: {repos[5].language || 'N/A'}</p>
        <a
        href={repos[5].html_url} // Add the GitHub repository URL here
        target="_blank" // Open the link in a new tab
        rel="noopener noreferrer" // Add recommended security attributes for external links
        className="block text-blue-600 hover:underline"
      >
        Visit Repository
      </a>
      </div>
    ) : (
      <p>No data available at index 5.</p>
    )}
    <div>
    {repos.length > 6 ? (
      <div>
        <p className="text-gray text-sm">
        {new Date(repos[6].created_at).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
        <strong className="block text-blue-600">{repos[6].name}</strong>
        <p className="text-gray-500">Language: {repos[6].language || 'N/A'}</p>
        <a
        href={repos[6].html_url} // Add the GitHub repository URL here
        target="_blank" // Open the link in a new tab
        rel="noopener noreferrer" // Add recommended security attributes for external links
        className="block text-blue-600 hover:underline"
      >
        Visit Repository
      </a>
      </div>
    ) : (
      <p>No data available at index 5.</p>
    )}
    </div>
  </div>
);
};

export default DisplayGitHub;
