import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

function Newscomponent(props) {
  const [article, setarticle] = useState([]);
  const [loading, setloading] = useState(true);
  const [pageno, setpageno] = useState(1);
  const [total_article, settotal_article] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    const loader = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageno}&pageSize=${props.pagesize}`;
      let data = await fetch(url);

      let parsedData = await data.json();

      setarticle(parsedData.articles);
      settotal_article(parsedData.total_article);
      setloading(false);
    };
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    loader();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      pageno + 1
    }&pageSize=${props.pagesize}`;
    setpageno(pageno + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticle(article.concat(parsedData.articles));
    settotal_article(parsedData.total_article);
  };

  return (
    <>
      <h1
        className="text-center"
      >
        NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length !== total_article}
        loader={<Spinner />}
      >
        {loading && <Spinner />}
        <div className="container">
          <div className="row">
            {article.map((element) => {
              return (
                <div className="col-md-4 " key={element.url}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

Newscomponent.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

Newscomponent.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default Newscomponent;
