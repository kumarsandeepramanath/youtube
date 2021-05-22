import React, { useEffect, useState } from 'react';
import Search from './Search';
import VideoList from './videoList';
import youtube from '../apis/youtube';

const App = () => {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const search = async () => {
      const response = await youtube.get('/search', {
        params: {
          q: 'buildings',
        },
      });
      let result = response.data.items;
      setSearchResult(result);
    };
    search();

    console.log(setSearchResult);
  }, []);
  return (
    <div>
      <h2>Youtube Application</h2>
      <Search />
      <VideoList />
    </div>
  );
};

export default App;
