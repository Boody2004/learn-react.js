import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoding, setIsLoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoding(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoding(false);
        });
    }, 1000);
  }, [url]);
  return { data, isLoding, error };
};

export default UseFetch;
