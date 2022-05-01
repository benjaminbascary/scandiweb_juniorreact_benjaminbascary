import React, {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_PRODUCTS, LOAD_CURRENCIES } from '../../graphql/queries.js';
import Dashboard from '../Dashboard/Dashboard.jsx';
import "./GetProducts.css";
const GetProducts = () => {

  const { error, loading, data } = useQuery(LOAD_PRODUCTS);

  const { currencies_error, currencies_loading, currencies_data} = useQuery(LOAD_CURRENCIES);

  useEffect(() => {
    } , [data]);

  return (
    <div>
      {console.log(currencies_data)}
      {data? 
        <Dashboard props={data.categories[0].products}/> 
      : 
        <div className='loading-container'>
          <p className='loading-text'>Loading...</p>
        </div>
      }
    </div>
  );
};

export default GetProducts;
