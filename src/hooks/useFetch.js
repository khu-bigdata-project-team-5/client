import { useEffect, useState } from "react";
import mockService from "../services/mockService";

const useFetch = (endpoint, options = {}) => {
  const { method = "get", params = {}, body = {} } = options;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const service = mockService;
      let response;
      switch (method.toLowerCase()) {
        case "get":
          response = await service.get(endpoint, { params });
          break;
        case "post":
          response = await service.post(endpoint, { body });
          break;
        case "put":
          response = await service.put(endpoint, { body });
          break;
        case "delete":
          response = await service.delete(endpoint, { params });
          break;
        default:
          response = await service.get(endpoint, { params });
      }
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint, method, JSON.stringify(params), JSON.stringify(body)]);

  return { data, loading, error, fetchData };
};

export default useFetch;
