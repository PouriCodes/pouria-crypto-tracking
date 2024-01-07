import React, { useState } from 'react';
import { useEffect } from 'react';
import Spinner from '../components/ui/Spinner.component';
import axios from 'axios';
import { baseUrl } from '../constants/api';
import CoinsComponent from '../components/coins/Coins.component';

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    axios(baseUrl)
      .then((response) => {
        setLoading(false);
        // console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        setError('An error occured');
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Crypto Tracking by P</h1>
          <h4>A place to search for your next dream</h4>
          <h4>Good events always accure by you, yourself!</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          {loading ? (
            <Spinner />
          ) : error !== '' ? (
            <h1>{error}</h1>
          ) : (
            <CoinsComponent data={data} />
          )}
        </div>
      </div>

      {/* <Spinner /> */}
    </div>
  );
};

export default HomePage;
