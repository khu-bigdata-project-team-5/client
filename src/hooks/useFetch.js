import { useEffect, useState } from "react";
import apiService from "../services/apiService";
import mockService from "../services/mockService";

const useFetch = (endpoint, options = {}) => {
  const {
    isMocked = false,
    method = "get",
    params = {},
    body = {},
    dependencies = {},
  } = options;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [
    isMocked,
    endpoint,
    method,
    JSON.stringify(params),
    JSON.stringify(body),
    JSON.stringify(dependencies),
  ]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const service = isMocked ? mockService : apiService;
      let response;
      switch (method) {
        case "GET":
          response = await service.get(endpoint, params);
          break;
        case "POST":
          response = await service.post(endpoint, body);
          break;
        case "PUT":
          response = await service.put(endpoint, body);
          break;
        case "DELETE":
          response = await service.delete(endpoint, params);
          break;
        default:
          response = await service.get(endpoint, params);
      }
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useFetch;
