import axios from 'axios';

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_API_KEY },
    });
  }

  async mostPopular(params) {
    return this.httpClient.get('videos', params);
  }

  async search(params) {
    return this.httpClient.get('search', params);
  }

  async channelInfo(params) {
    return this.httpClient.get('channels', params);
  }

  async detail(params) {
    return this.httpClient.get('videos', params);
  }

  async relatedVideo(params) {
    return this.httpClient.get('search', params);
  }

  async comment(params) {
    return this.httpClient.get('commentThreads', params);
  }
}
