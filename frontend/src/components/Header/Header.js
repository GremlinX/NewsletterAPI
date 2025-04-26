import "./Header.css";

export const Header = ({
  onSetQuery,
  onClickSearch,
  selectedOption,
  onSelectOption,
  viewType,
  onSetViewType,
}) => {
  const handleChangeViewType = (event) => onSetViewType(event.target.value);

  return (
    <header className="header">
      <div className="header__left">
        <div className="header__search-wrapper">
          <input
            type="text"
            className="header__search-input"
            onChange={onSetQuery}
            placeholder="🔍 Search for news..."
          />
        </div>

        <select
          className="header__select"
          value={selectedOption}
          onChange={onSelectOption}
        >
          <option value="">All sources</option>
          <option value="cnn.com">CNN</option>
          <option value="gov.br">gov.br</option>
          <option value="nytimes.com">The New York Times</option>
        </select>

        <button className="header__btn" onClick={onClickSearch}>
          Search
        </button>
      </div>

      <div className="header__view-toggle">
        <button
          className={`header__toggle-btn ${
            viewType === "all" ? "active" : ""
          }`}
          value="all"
          onClick={handleChangeViewType}
        >
          All
        </button>
        <button
          className={`header__toggle-btn ${
            viewType === "paginated" ? "active" : ""
          }`}
          value="paginated"
          onClick={handleChangeViewType}
        >
          Paginated
        </button>
      </div>
    </header>
  );
};
