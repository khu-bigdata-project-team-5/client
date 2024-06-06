import { mockData } from "../mocks/mockData";

const buildQueryString = (params) => {
  return Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&");
};

const mockService = {
  get: (endpoint, { params } = {}) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let url = endpoint;
        if (params && Object.keys(params).length > 0) {
          const queryString = buildQueryString(params);
          url += `?${queryString}`;
        }
        const data = mockData[url];
        resolve({ data });
      }, 1000);
    });
  },
};

export default mockService;
