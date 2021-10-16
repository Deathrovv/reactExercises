import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null); //for the blogs
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) throw Error("Could not fetch data for new resource");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    console.log("useEffect ran");
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
