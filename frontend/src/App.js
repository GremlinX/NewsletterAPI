import React, { useEffect, useState } from "react";
import { requestNews } from "./service/service";
import { fakeData } from "./service/fakeData";

import "./App.css";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
import { Paginator } from "./components/Paginator/Paginator";

const isNullOrUndefined = (variable) => {
  if(variable === undefined || null)  { return true; } return false;
}

function App() {
  const initialValue = {
    // news: [],
    news: fakeData.news // Apenas para testes 🟡
  };

  const [isLoaded, setLoaded] = useState(true);

  const [news, setNews] = useState(initialValue);

  const [query, setQuery] = useState(null);

  const [source, setSource] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = isNullOrUndefined(news.news) ? null : news.news.slice(indexOfFirstPost, indexOfLastPost);

  const [viewType, setViewType] = useState('all'); // 'paginated' or 'all'

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handleChangeSelectOption = (event) => {
    setSource(event.target.value);
  };

  const onChangeInput = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoaded(false);
      const response = await requestNews(query, source);
      setNews(response ?? []);
    } catch (error) {
      if (error.response) {
        console.error("Error fetching news:", error.response.status);
      } else if (error.request) {
        console.error("Error fetching news: No response from server");
      } else {
        console.error("Error fetching news:", error.message);
      }
    } finally {
      setLoaded(true);
    }
  };

  return (
    <div className="app-main">
      <div className="app__container">
        <Header
          onSetQuery={onChangeInput}
          onClickSearch={handleSearch}
          source={source}
          onSelectOption={handleChangeSelectOption}
          viewType={viewType}
          setViewType={setViewType}
        />

        <div className="news">
          {!isLoaded ? ( <LoadingScreen /> ) : viewType === "all" ? 
          (
            news.news && news.news.map((v, i) => (
              <Card
                key={i}
                image={v.image}
                source={v.url}
                title={v.title}
                text={v.text}
                publish_date={v.publish_date}
              />
            ))
          )
          :
          (
            currentPosts && currentPosts.map((v, i) => (
              <>
              <Card
                key={i}
                image={v.image}
                source={v.url}
                title={v.title}
                text={v.text}
                publish_date={v.publish_date}
              />
              <Paginator
                length={(news.news ?? []).length}
                postsPerPage={postsPerPage}
                handlePagination={handlePagination}
                currentPage={currentPage}
              />
        </>
            ))
          )}
        </div>

        

        {/* <div className="news">
          {isLoaded && news.news.map((v, i) => (
            <div key={i}>
              <p>ID: {v.id}</p>
              <p>Title: {v.title}</p>
              <p>Text: {v.text}</p>
              <p>Summary: {v.summary}</p>
              <p>url: {v.url}</p>
              <p>Image: {v.image}</p>
              <p>Publish Date: {v.publish_date}</p>
              <p>Authors: {v.authors}</p>
              <p>Language: {v.language}</p>
              <p>Source Country: {v.source_country}</p>
              <p>Sentiment: {v.sentiment}</p>
            </div>
          ))}
        </div> */}
        <div className="error">
          {news.status}
          {news.code}
          {news.message}
        </div>
      </div>
    </div>
  );
}

export default App;
