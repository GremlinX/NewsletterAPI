import "./Card.css";
export const Modal = ({ title, image, text, url, publish_date }) => {
  return (
    <app-modal>
      <div className="modal__container">
        <h1 className="modal__title">{title}</h1>
        <img className="modal__image" src={image} alt={title} />
        <p className="modal__text">{text}</p>
        <p className="modal__url">{url}</p>
        <p className="modal__publishDate">{publish_date}</p>
      </div>
    </app-modal>
  );
};
