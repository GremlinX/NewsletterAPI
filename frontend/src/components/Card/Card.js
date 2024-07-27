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
      timeZone: "America/Sao_Paulo", // Especifique o fuso horário brasileiro, se necessário
    };

    return new Intl.DateTimeFormat("pt-BR", options).format(date);
  };

  return (
    <app-card>
      <div className="card__container">
        <div className="card__imageContainer">
          <img className="card__image" src={image} alt={title} />
        </div>
        <div className="card__body">
          <h1>{title.toUpperCase()}</h1>
          <p className="card__text">{text}</p>
          <p className="card__text">
            <b>Publish Date: </b>
            {convertDate(publish_date)}
          </p>
          <p className="card__text">
            <b>Source: </b>
            <a href={source}>{source}</a>
          </p>
        </div>
      </div>
    </app-card>
  );
};
