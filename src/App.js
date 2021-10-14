import './App.css';
import { youtubeAPIKey } from './key'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'


function App() {
  return (
    
    <div className="container-fluid">
      <div className = 'row'>
        <div className = 'col-md-3'>

        </div>
        <div className = 'col-md-6' align = "center">
          <VideoPlayer videoId = {'5qap5aO4i9A'}/>
        </div>
        <div className = 'col-md-3'>

        </div>
      </div>
    </div>
  );
}

export default App;
