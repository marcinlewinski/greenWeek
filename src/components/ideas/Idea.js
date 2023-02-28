import "./Idea.css";
const Idea = ({ img, title, description, handleModal }) => {
  return (
    <div className="idea">
      <div className="image-wrapper">
        <img className="idea-img" src={img} alt="{title}" />
      </div>
      <div className="text-wrapper">
        <div className="idea-content">
          <h1 className="idea-title">{title}</h1>
          <p className="idea-description">{description}</p>
        </div>
        <button type="submit" className="idea-btn" onClick={handleModal}>
          Discover more!
        </button>
      </div>
    </div>
  );
};

export default Idea;
