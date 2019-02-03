import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <div>Hello, world! I am home!</div>
      <Link to='/abc'>Any other route!</Link>
    </div>
  );
};

export default Home;
