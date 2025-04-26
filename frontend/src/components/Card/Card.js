import "./Card.css";

export const Card = ({ image, source, title, text, publish_date }) => {
  const convertDate = (publish_date) => {
    const date = new Date(publish_date);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "America/Sao_Paulo",
    };
    return new Intl.DateTimeFormat("pt-BR", options).format(date);
  };

  return (
    <article className="card">
      <div className="card__image-wrapper">
        <img className="card__image" src={image} alt={title} />
      </div>
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__text">{text}</p>
        <div className="card__meta">
          <span>
            <strong>Publish Date:</strong> {convertDate(publish_date)}
          </span>
          <span>
            <strong>Source:</strong>{" "}
            <a href={source} target="_blank" rel="noreferrer">
              {source}
            </a>
          </span>
        </div>
      </div>
    </article>
  );
};
