import React, {useEffect, useState} from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_PRODUCTS, LOAD_CURRENCIES } from '../../graphql/queries.js';
import Dashboard from '../Dashboard/Dashboard.jsx';
import Header from '../Header/Header.jsx';
import "./GetProducts.css";
const GetProducts = () => {

  const { error, loading, data } = useQuery(LOAD_PRODUCTS);

  useEffect(() => {
    } , [data]);

  return (
    <div>
      {console.log(data)}
      {data?
        <React.Fragment>
          <Header props={data}/>
          <Dashboard props={data.categories[0].products}/> 
        </React.Fragment>
      : 
        <div className='loading-container'>
          <p className='loading-text'>Loading...</p>
        </div>
      }
    </div>
  );
};

export default GetProducts;
