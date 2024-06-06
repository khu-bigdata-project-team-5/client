import { useEffect, useState } from "react";
import mockService from "../services/mockService";
import { ENDPOINTS } from "../api/endpoints";

const useLectures = () => {
  const [lectures, setLectures] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const service = mockService;
        const response = await service.get(`${ENDPOINTS.LECTURES}`);
        setLectures(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { lectures, loading, error };
};

export default useLectures;
