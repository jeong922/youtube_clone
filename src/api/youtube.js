export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async mostPopular() {
    const response = await this.apiClient.mostPopular({
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
        regionCode: 'kr',
      },
    });
    return response.data.items;
  }

  async search(keyword) {
    const response = await this.apiClient.search({
      params: { part: 'snippet', maxResults: 25, type: 'video', q: keyword },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  async channelInfo(channelId) {
    const response = await this.apiClient.channelInfo({
      params: { part: 'snippet', id: channelId },
    });
    return response.data.items[0].snippet.thumbnails.default.url;
  }

  async detail(id) {
    const response = await this.apiClient.detail({
      params: {
        part: 'snippet',
        regionCode: 'kr',
        id: id,
      },
    });
    return response.data.items[0];
  }

  async relatedVideo(videoId) {
    const response = await this.apiClient.relatedVideo({
      params: {
        part: 'snippet',
        maxResults: 25,
        relatedToVideoId: videoId,
        type: 'video',
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  async comment(videoId) {
    const response = await this.apiClient.comment({
      params: {
        part: 'snippet',
        maxResults: 20,
        order: 'relevance',
        videoId: videoId,
      },
    });
    return response.data.items;
  }
}
