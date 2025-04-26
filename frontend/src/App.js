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
    news: [],
    // news: fakeData.news, // Apenas para testes 🟡
    content: []
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
      const response = await requestNews(query, source, viewType, currentPage);
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
          onSetViewType={setViewType}
        />

        <div className="news">
          {!isLoaded ? ( <LoadingScreen /> ) : viewType === "all" ? 
            (
              news.news && news.news.map((v, i) => (
                <Card
                  key={"cardKey_" + i}
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
                <div key={i}>
                  {/* The JSON return in another format instead of something accessible with "news.news"
                  it should be news.content */}
                  <Card
                    key={"cardPageKey_" + i}
                    image={v.image}
                    source={v.url}
                    title={v.title}
                    text={v.text}
                    publish_date={v.publish_date}
                  />
                  <Paginator
                    key={"paginatorKey_" + i}
                    length={(news.news ?? []).length}
                    postsPerPage={postsPerPage}
                    handlePagination={handlePagination}
                    currentPage={currentPage}
                  />
                </div>
            )))
          }
        </div>

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
