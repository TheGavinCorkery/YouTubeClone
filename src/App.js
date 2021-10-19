import './App.css';
import { youtubeAPIKey } from './key'
import React, { Component } from 'react';
import axios from 'axios';
import TitleBar from './components/TitleBar/TitleBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import SearchResultsList from './components/SearchResultsList/SearchResultsList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      videoID: null,
      videoInfo: {
        title: "",
        description: "",
        views: "",
        channelTitle: "",
      },
      videoComments: [],
      replies: []
    }
  }

  baseURL = 'https://www.googleapis.com/youtube/v3/'
  searchURL = 'https://www.googleapis.com/youtube/v3/search'
  commentURL = 'http://127.0.0.1:8000/comments/'
  replyURL = 'http://127.0.0.1:8000/commentsection/'


  playSelectedVideo = (video) => {
    this.setState({
      videoID: video.id.videoId,
      videoInfo: {
        title: video.snippet.title,
        description: video.snippet.description,
        channelTitle: video.snippet.channelTitle
      },
      replies: []
    })
    this.getRelatedVideos(video.id.videoId)
    this.getVideoComments(video.id.videoId)
    this.getReplies(video.id.videoId)
    this.getVideoInformation(video.id.videoId)
  }

  getRelatedVideos = async (videoID) => {
    try {
      const response = await axios.get(this.searchURL, {
        params: {
          key: youtubeAPIKey,
          type: "video",
          maxResults: 5,
          part: "snippet",
          relatedToVideoId: videoID,
        }
      })
      this.setState({
        searchResults: response.data.items
      })
    }
    catch(err) {
      console.log("🚀 ~ file: App.js ~ line 62 ~ App ~ getRelatedVideos= ~ err", err)
    }
  }

  getSearchResults = async (query) => {
    try {
      const response = await axios.get(this.searchURL, {
        params: {
          q: query.searchQuery,
          key: youtubeAPIKey,
          type: "video",
          maxResults: 5,
          part: "snippet",
          kind: "youtube#searchListResponse",
          regionCode: "US",
          order: "viewCount"
        }
      })
      this.setState({
        searchResults: response.data.items
      })
    }
    catch(err){
      console.log("🚀 ~ file: App.js ~ line 86 ~ App ~ getSearchResults= ~ err", err)
      
    }
  }

  postComment = async (comment) => {
    try {
      let videoId = this.state.videoID
      await axios.post(`${this.commentURL}${videoId}/`, {
        message: comment.message,
        video: videoId
      })
      console.log(comment)
      this.getVideoComments(videoId)
      this.getReplies(videoId)
    }
    catch(err){
      console.log("🚀 ~ file: App.js ~ line 103 ~ App ~ postComment= ~ err", err)
    }
  }

  postReply = async (reply, commentId) => {
    try{
      await axios.post(`${this.commentURL}reply/${commentId}`, {
        message: reply.message
      })
    }catch (err) {
      console.log("🚀 ~ file: App.js ~ line 103 ~ App ~ postComment= ~ err", err)
    }
  } 

  getReplies = async(videoId) => {
    try{
        let replies = await axios.get(`${this.replyURL}${videoId}/`)
        this.setState({
          replies: replies.data
        })
    }catch (err) {
      console.log("🚀 ~ file: App.js ~ line 124 ~ App ~ getReplies=async ~ err", err)
    }
}

  likeComment = async (vote, commentId) => {
    try {
      await axios.patch(`${this.commentURL}${commentId}/${vote}`)
      this.getVideoComments(this.state.videoID)
    }
    catch(err){
    console.log("🚀 ~ file: App.js ~ line 106 ~ App ~ likeComment= ~ err", err)
    }
    
  }
  getVideoComments = async (videoId) => {
    try {
      const response = await axios.get(`${this.commentURL}${videoId}/`)
      this.setState({
        videoComments: response.data
      })
    }
    catch(err){
      console.log("🚀 ~ file: App.js ~ line 114 ~ App ~ getVideoComments= ~ err", err)
    }
  }

  getVideoInformation = async (videoId) => {
    try {
      const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?key=${youtubeAPIKey}&id=${videoId}&part=statistics`)
      console.log(response)
      this.setState({
        videoInfo: {
          title: this.state.videoInfo.title,
          description: this.state.videoInfo.description,
          channelTitle: this.state.videoInfo.channelTitle,
          views: response.data.items[0].statistics.viewCount
        }
      })
    } catch (err) {
      console.log('Error in videoInformation', err)
    }
    }

  render() {
    return (
      <div className="container-fluid">
        <TitleBar searchResults={this.getSearchResults} />
        <div className="row">
          <div className="col-md-9">
            {this.state.videoID != null && <VideoPlayer replies = {this.state.replies} postReply = {this.postReply} videoId={this.state.videoID} videoInfo={this.state.videoInfo} videoComments={this.state.videoComments} postComment = {this.postComment} likeComment={this.likeComment}/>}
          </div>
          <div className="col-md-3">
            <SearchResultsList playVideo={this.playSelectedVideo} results={this.state.searchResults} />
          </div>
          {/* <p>{this.state.searchResults}</p> */}
        </div>
      </div>

    );
  }
}

export default App;