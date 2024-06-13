const baseUrl = "https://dev.infou.store/api";

const apiService = {
  async get(endpoint, params) {
    try {
      let url = `${baseUrl}${endpoint}`;
      if (Object.keys(params).length > 0) {
        url += `?${new URLSearchParams(params).toString()}`;
      }
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default apiService;
