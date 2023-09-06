import React, { useContext} from 'react';
import { DataContext } from '../../contexts/DataProvider'; 

const DisplayGitHub = () => {
    const { githubData, loading, error } = useContext(DataContext);

    if (loading) {
        return <p className="text-gray-600">Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">Error: {error.message}</p>;
    }

    return (
        <div className="container border-2 w-80 rounded-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Public Repositories</h2>
            {githubData.length > 5 ? (
                <div className="container border-black rounded-md py-1">
                    <p className="text-gray text-sm">
                        {new Date(githubData[5].created_at).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </p>
                    <strong className="block text-blue-600">{githubData[5].name}</strong>
                    <p className="text-gray-500">Language: {githubData[5].language || 'N/A'}</p>
                    <a
                        href={githubData[5].html_url} // Add the GitHub repository URL here
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
            <div className="container py-4">
                {githubData.length > 6 ? (
                    <div>
                        <p className="text-gray text-sm">
                            {new Date(githubData[6].created_at).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                        <strong className="block text-blue-600">{githubData[6].name}</strong>
                        <p className="text-gray-500">Language: {githubData[6].language || 'N/A'}</p>
                        <a
                            href={githubData[6].html_url} // Add the GitHub repository URL here
                            target="_blank" // Open the link in a new tab
                            rel="noopener noreferrer" // Add recommended security attributes for external links
                            className="block text-blue-600 hover:underline"
                        >
                            Visit Repository
                        </a>
                    </div>
                ) : (
                    <p>No data available at index 6.</p>
                )}
            </div>
            <div>
                {githubData.length > 1 ? (
                    <div>
                        <p className="text-gray text-sm">
                            {new Date(githubData[1].created_at).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                        <strong className="block text-blue-600">{githubData[1].name}</strong>
                        <p className="text-gray-500">Language: {githubData[1].language || 'N/A'}</p>
                        <a
                            href={githubData[1].html_url} // Add the GitHub repository URL here
                            target="_blank" // Open the link in a new tab
                            rel="noopener noreferrer" // Add recommended security attributes for external links
                            className="block text-blue-600 hover:underline"
                        >
                            Visit Repository
                        </a>
                    </div>
                ) : (
                    <p>No data available at index 38.</p>
                )}
            </div>
        </div>
    );
};

export default DisplayGitHub;
