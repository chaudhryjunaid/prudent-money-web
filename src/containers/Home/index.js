import React from 'react';
import Balance from '../../components/Balance';

const Home = (props) => {
  return (
    <div>
      <Balance amount={100} currency="PKR" />
    </div>
  );
};

export default Home;
