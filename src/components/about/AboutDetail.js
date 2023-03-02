import "./AboutDetails.css";

function AboutDetail({ img, title, description }) {
  return (
    <>
      <div className="about-detail">
        <div className="image-wrapper" style={{ backgroundImage: `url(${img})` }}>
          
          <div className="about-decoration">
            <div className="about-content">
              <i></i>
              <h1 className="about-title">{title}</h1>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutDetail;
