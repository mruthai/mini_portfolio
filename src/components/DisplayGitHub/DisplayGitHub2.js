import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataProvider';

const DisplayGitHub2 = () => {
    const { githubData, loading, error } = useContext(DataContext);

    if (loading) {
        return <p className="text-gray-600">Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">Error: {error.message}</p>;
    }

    return (
            <div>
                {githubData.length > 38 ? (
                    <div className="container py-5">
                        <a
                            href={githubData[38].html_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block text-blue-600 hover:underline mt-2"
                        >
                            Visit Example Repository ➤
                        </a>
                    </div>
                ) : (
                    <p>No data available at index 38.</p>
                )}
            </div>
       
    );
};

export default DisplayGitHub2;
