import './App.css';
import { youtubeAPIKey } from './key'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import TitleBar from './components/TitleBar/TitleBar';
import { useState } from 'react';



function App() {

  const [searchQuery, setSearchQuery]

  return (
    
    
    <div className="container-fluid">
      <TitleBar />
      <VideoPlayer videoId = {'5qap5aO4i9A'}/>
    </div>
  );
}

export default App;