import React from "react";
import { useState, useEffect } from "react";

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch("http://api.tvmaze.com/search/shows?q=Vikings")
      .then((response) => response.json())
      .then((json) => setSeries(json));
  }, []);

  return <div>The length of series array = {series.length}</div>;
};

export default Series;
