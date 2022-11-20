import axios from 'axios';

export default class FakeYoutubeClient {
  async mostPopular() {
    return axios.get('./data/mostPopular.json');
  }

  async search() {
    return axios.get('./data/search.json');
  }

  async detail() {
    return axios.get('/data/videoDetail.json');
  }

  async relatedVideo() {
    return axios.get('/data/relatedVideo.json');
  }

  async comment() {
    return axios.get('/data/comment.json');
  }
}
