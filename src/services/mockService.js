import { mockData } from "../mocks/mockData";

const mockService = {
  get: (endpoint) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: mockData[endpoint] });
      }, 1000);
    });
  },
};

export default mockService;
