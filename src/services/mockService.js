import { mockData } from "../mocks/mockData";

const mockService = {
  get: (endpoint, params = {}) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let url = endpoint;
        if (Object.keys(params).length > 0) {
          url += "?";
          url += Object.entries(params)
            .map(([key, value]) => `${key}=${value}`)
            .join("&");
        }
        const data = mockData[url];
        resolve(data);
      }, 1000);
    });
  },
};

export default mockService;
