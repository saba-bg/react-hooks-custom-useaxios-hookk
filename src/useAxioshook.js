import { useState, useEffect } from "react";

function useAxioshook({ api, metod, url, data = null, config = null }) {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState("");
  const [error1, setError1] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        api[metod](url, JSON.parse(config), JSON.parse(data))
          .then((res) => {
            setResponse(res.data);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (err) {
        setError1(err);
      }
    };
    fetchData();
  }, [api, metod, url, data , config]);
  return { response, isLoading, error1 };
}

export default useAxioshook;
