import Workshop from './Workshop';
import dataWorkshops from '../../database/dataWorkshops';

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
