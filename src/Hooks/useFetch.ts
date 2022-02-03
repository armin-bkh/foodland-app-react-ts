import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};


export default useFetch;