import React, {useEffect, useState} from 'react'
import { useQuery, gql } from '@apollo/client';
import { LOAD_PRODUCTS } from '../../graphql/queries.js';
import Dashboard from '../Dashboard/Dashboard.jsx';

const GetProducts = () => {

  const { error, loading, data } = useQuery(LOAD_PRODUCTS);

  useEffect(() => {
    } , [data]);

  return (
    <div>
      {data? 
        <Dashboard props={data.categories[0].products}/> 
      : 
        <p>Loading...</p>}
    </div>
  )
} 

export default GetProducts;
