import React from 'react';
import WindChart from '../components/WindChart';

const IndexPage = () => {

  return (
    <>
      <style jsx>
        {`
          p {
            text-align: center;
            color: #888;
          }
          h3 {
            color: #555;
          }
        `}
      </style>
      <div style={{ marginBottom: '2rem' }}>
        <h2>Hope it's a Great day to fly!</h2>
      </div>
      <div>
        <WindChart numRec={30} />
      </div>
    </>
  );
};

export default IndexPage;
