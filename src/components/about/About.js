import dataAbout from "../../database/dataAbout";
import AboutDetail from "./AboutDetail";
import "./About.css";
import { useEffect, useState } from "react";
const slides = [{className: 'left', previousButton: false, nextButton: true}, 
                {className: 'center', previousButton: true, nextButton: true},
                {className: 'right', previousButton: true, nextButton: false}]
function About() {
  const [id, setId] = useState(0);
  const [slide, setSlide] = useState(slides[id]);

  function slideLeft() {
    if (id > 0) setId(id - 1);
  };

  function slideRight() {
    if (id < 2) setId(id + 1);
  };

  useEffect(() => {
    setSlide(slides[id])
  }, [id])

  return (
    <>
      <div className="about">
        <img onClick={slideLeft} className={slide.previousButton ? 'previous' : 'hidden'} src='./back.png'></img>
        <div className={'about-wrapper ' + slide.className}>
          {dataAbout.map((element, index) => (
            <AboutDetail key={index} {...element} />
          ))}
        </div>
        <img onClick={slideRight} className={slide.nextButton ? 'next' : 'hidden'} src='./back.png'></img>
      </div>
    </>
  );
}

export default About;
