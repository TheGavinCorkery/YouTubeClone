import './App.css';
import { youtubeAPIKey } from './key'
import React, { Component } from 'react';
import axios from 'axios';
import TitleBar from './components/TitleBar/TitleBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import SearchResultsList from './components/SearchResultsList/SearchResultsList';



// URL = `https://www.googleapis.com/youtube/v3/search?q=${searchQuery}&key=${youtubeAPIKey}&type=video&maxResults=3`

class App  extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [],
      videoID: null,
     }
  }

  baseURL = 'https://www.googleapis.com/youtube/v3/'
  searchURL = 'https://www.googleapis.com/youtube/v3/search'

  // latestSearchResults =  null

  getSearchResults = async (query) => {
    // const params = {
    //   "q": query,
    //   "key": youtubeAPIKey,
    //   "type": "video",
    //   "maxResults": 3
    // }
    // let response = await axios.get(`${this.URL}search?${params}`)
    const response = await axios.get(this.searchURL, {
      params: {
        q: query,
        key: youtubeAPIKey,
        type: "video",
        maxResults: 3
      }
    })
    console.log(response.data.items)
    console.log(response.data.items[0].id.videoId)
    // this.latestSearchResults = [response.data]
    this.setState({
      searchResults: response.data.items
    })
  }



  render() { 
    return ( 
      <div className="container-fluid">
          {console.log(this.state.searchResults)}
        <TitleBar searchResults={this.getSearchResults}/>
        <SearchResultsList results={this.state.searchResults} />
        {/* <p>{this.state.searchResults}</p> */}
        {/* <VideoPlayer videoId = {''}/> */}
      </div>

     );
  }
}
 
export default App ;
