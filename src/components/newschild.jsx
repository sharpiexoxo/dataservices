import React from "react";
import { useState, useEffect } from "react";
import { NewsAPI } from "../helpers/newsapi";

const GetNews = () => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState("Biden");

  const [update, setUpdate] = useState();

  useEffect(() => {
    setNews();

    NewsAPI(search)
      .then((data) => {
        if (data) {
          console.log(data);

          setNews(data);
          setError(false);
        } else {
          console.log("Der er sket en fejl");

          setError(true);
          setNews();
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, [update]);

  return (
    <div>
      <h1 className="headline">Top articles</h1>

      <div className="search-container">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          defaultValue={search}
          placeholder="Search here"
        />

        <button
          disabled={!search ? true : false}
          onClick={() => setUpdate(!update)}
        >
          Search
        </button>
      </div>

      {news && (
        <div className="news-container">
          {news.articles.map((n, i) => (
            <div className="news-child" key={i}>
              <h2>{n.title}</h2>
              <p>{n.description}</p>
              <img src={n.urlToImage} alt="" />
              <a href={n.url} target="_blank">
                Read more...
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetNews;
