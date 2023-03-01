import Workshop from './Workshop';
import dataWorkshops from '../../database/dataWorkshops';
import './Workshops.css'

const Workshops = () => {
  return (
    <div className="workshops">
      {dataWorkshops.map((item, index) => (
        <Workshop key={index} {...item} />
      ))}
    </div>
  );
};

export default Workshops;
