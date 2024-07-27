import "./LoadingScreen.css";

export const LoadingScreen = () => {
  return (
    <app-loadingscreen>
      <div className="loading-overlay">
        <div className="loading-message">
          <i className="fas fa-spinner fa-spin"></i>
          <div>Carregando...</div>
        </div>
      </div>
    </app-loadingscreen>
  );
};
