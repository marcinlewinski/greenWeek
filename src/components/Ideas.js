import { useState } from 'react';
import Idea from './Idea';
import data from '../database/data';

const Ideas = () => {
  const [search, setSearch] = useState(data);

  const getIdeasFilteredByTitle = (word) => {
    return search.filter((item) => item.title.toLowerCase().includes(word));
  };

  const getFilteredIdeas = (e) => {
    const inputSearch = e.target.value.toLowerCase();

    if (!inputSearch) {
      setSearch(data);
      return;
    }
    const dataFiltered = getIdeasFilteredByTitle(inputSearch);
    setSearch(dataFiltered);
  };

  const handleModal = () => {
    console.log(`Testowa funkcja dla Modal Window`);
  };

  return (
    <div className="ideas">
      <div className="ideas-search">
        <input
          className="ideas-input"
          type="text"
          placeholder="Search by title"
          onChange={getFilteredIdeas}
        />
      </div>
      {search.map((item, index) => (
        <Idea key={index} {...item} handleModal={handleModal} />
      ))}
    </div>
  );
};

export default Ideas;
