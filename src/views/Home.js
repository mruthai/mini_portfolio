import React from 'react'
import DisplayGitHub from '../components/DisplayGitHub/DisplayGitHub';
import DataProvider from '../contexts/DataProvider';

const Home = () => {



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Full stack software developer</h1>
      <div className="space-y-4">
      <DataProvider>
        <DisplayGitHub />
      </DataProvider>
      </div>
    </div>
  );
};


export default Home