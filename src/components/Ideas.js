import Idea from './Idea';
import data from '../database/data';

const Ideas = () => {
  return (
    <div className="ideas">
      <div className="ideas-search">
        <input className="ideas-input" type="text" />
      </div>
      {data.map((item, index) => (
        <Idea key={index} {...item} />
      ))}
    </div>
  );
};

export default Ideas;
