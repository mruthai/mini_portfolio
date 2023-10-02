import React, { useContext } from 'react';
import { DataContext } from '../../contexts/DataProvider';
import { DiGithubBadge } from 'react-icons/di'

const DisplayGitHub = () => {
    const { githubData, loading, error } = useContext(DataContext);

    if (loading) {
        return <p className="text-gray-600">Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">Error: {error.message}</p>;
    }

    return (
        <div className="md:mx-44 md:my-48 ">
            <div className="mt-5 flex flex-row md:gap-5 gap-1">
                < DiGithubBadge className="text-3xl" />
                <h2 className="font-serif text-2xl underline decoration-yellow-500 font-semibold mb-4">GitHub Public Repositories</h2>
            </div>
            <div className="my-5 md:w-2/3 md:mx-0 mx-5">
                <p>In this section, several of my GitHub repositories showcase the skills I have learned and Coding Temple's software development boot camp- including how to access data through an API. The information below, the title, the date, the language used, and the repository link are from GitHub's API. </p>
            </div>
            <div className="flex md:flex-row flex-col items-center mb:mb-0 mb-10 md:gap-10 gap-0">
                {githubData.length > 5 ? (
                    <div className=" md:w-1/3 md:mx-0 mx-5 md:py-10 py-5 ">
                        <p className="text-gray-400 text-sm border-gray-400 border-l-2 px-1 mb-3">
                            {new Date(githubData[5].created_at).toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                        <strong className="block text-gray-950 text-lg">{githubData[5].name}</strong>
                        <p className="mt-3">
                            I built a React-based microservice app for farmers, aiding grain and livestock decisions by merging stock prices and user data in Firestore.
                            It's in early development and deployed on Netlify for testing.
                        </p>
                        <p className="text-gray-500 mt-4">Language Used: {githubData[5].language || 'N/A'}</p>
                        <a
                            href={githubData[5].html_url} // Add the GitHub repository URL here
                            target="_blank" // Open the link in a new tab
                            rel="noopener noreferrer" // Add recommended security attributes for external links
                            className="block text-blue-600 hover:underline mt-2"
                        >
                            Visit Repository ➤
                        </a>
                    </div>
                ) : (
                    <p>No data available at index 5.</p>
                )}
             
                    {githubData.length > 6 ? (
                        <div className=" md:w-1/3 md:mx-0 mx-5 md:py-10 py-5">
                            <p className="text-gray-400 text-sm border-gray-400 border-l-2 px-1 mb-3">
                                {new Date(githubData[6].created_at).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                            <strong className="block text-gray-950 text-lg">{githubData[6].name}</strong>
                            <p>
                                I built a Django Jewelry application to understand better how this Python framework is structured.
                                The goal was to learn more about Django and apply that knowledge to assist with developing a custom ERP for a potential client.
                            </p>
                            <p className="text-gray-500 mt-4">Language Used: {githubData[6].language || 'N/A'}</p>
                            <a
                                href={githubData[6].html_url}
                                target="_blank" // Open the link in a new tab
                                rel="noopener noreferrer" // Add recommended security attributes for external links
                                className="block text-blue-600 hover:underline mt-2"
                            >
                                Visit Repository ➤
                            </a>
                        </div>
                    ) : (
                        <p>No data available at index 6.</p>
                    )}
                
                
                    {githubData.length > 1 ? (
                        <div className=" md:w-1/3 md:mx-0 mx-5 md:py-10 py-5">
                            <p className="text-gray-400 text-sm border-gray-400 border-l-2 px-1 mb-3">
                                {new Date(githubData[1].created_at).toLocaleDateString(undefined, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </p>
                            <strong className="block text-gray-950 text-lg">{githubData[1].name}</strong>
                            <p>
                                Mid-way through my boot camp I was exposed to developing an ERD to comprehend how data is stored and retrieved through the sequence query language.
                            </p>
                            <p className="text-gray-500 mt-4">Language Used: {githubData[1].language || 'N/A'}</p>
                            <a
                                href={githubData[1].html_url} // Add the GitHub repository URL here
                                target="_blank" // Open the link in a new tab
                                rel="noopener noreferrer" // Add recommended security attributes for external links
                                className="block text-blue-600 hover:underline mt-2"
                            >
                                Visit Repository ➤
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
