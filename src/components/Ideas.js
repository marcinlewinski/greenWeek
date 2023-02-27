import Idea from './Idea';

const Ideas = () => {
  const data = [
    {
      title: 'Title-1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img: 'https://static.boredpanda.com/blog/wp-content/uploads/2014/07/plastic-bottles-recycling-ideas-11.jpg',
    },
    {
      title: 'Title-2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img: 'https://cdn.rwd.group/coda-plastics.co.uk/img/jpg/blog/c3ab6d9f1dbda82ae31b7819303d5516.jpg',
    },
    {
      title: 'Title-3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img: 'https://www.nspackaging.com/wp-content/uploads/sites/4/2019/03/shutterstock_1492626947.jpg',
    },
  ];

  return (
    <div className="ideas">
      {data.map((item, index) => (
        <Idea key={index} {...item} />
      ))}
    </div>
  );
};

export default Ideas;
