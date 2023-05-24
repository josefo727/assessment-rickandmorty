import axios from 'axios';

class ApiService {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL,
    });
  }

  async get(url, config = {}) {
    try {
      const response = await this.client.get(url, config);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}

export default ApiService;
