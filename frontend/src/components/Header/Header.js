import { useState } from "react";
import "./Header.css";

export const Header = ({onSetQuery, onClickSearch, selectedOption, onSelectOption, viewType, setViewType}) => {

  

  const handleChangeViewType = (event) => {
    setViewType(event.target.value);
  };

  return (
    <app-header>
      <nav className="header__navbar">
        <div className="header__container">
          <input
            className="header__input"
            type="text"
            id="query"
            onChange={onSetQuery}
            placeholder="Search for news"
          ></input>

          <select
            className="header__form-select"
            value={selectedOption}
            onChange={onSelectOption}
          >
            <option defaultValue={""} value={""}>
              All sources
            </option>
            <option value="cnn.com">CNN</option>
            <option value="gov.br">gov.br</option>
            <option value="nytimes.com">The New York Times</option>
          </select>
        </div>

        <div>
          <button className="header__btn-primary" onClick={onClickSearch}>
            Search news
          </button>
        </div>

        <div className="header__form-check">
          <label className="header__form-check__label">
            <input
              type="radio"
              name="viewType"
              value="all"
              checked={viewType === 'all'}
              onChange={handleChangeViewType}
            />
            All
          </label>
          <label className="header__form-check__label">
            <input
              type="radio"
              name="viewType"
              value="paginated"
              checked={viewType === 'paginated'}
              onChange={handleChangeViewType}
            />
            Paginated
          </label> 
        </div>
      </nav>
    </app-header>
  );
};
