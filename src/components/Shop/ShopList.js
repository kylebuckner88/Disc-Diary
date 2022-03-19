import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopCard } from './ShopCard';
import { getAllShops } from '../../modules/ShopManager';

export const ShopList = () => {
  
  const [shops, setShops] = useState([]);

  const navigate = useNavigate();

  const getShops = () => {
   
    return getAllShops().then(shopsFromAPI => {
      setShops(shopsFromAPI)
    });
  };

  
  useEffect(() => {
    getShops();
  }, []);


  return(
    <>
      
      <div className="container-cards">
        {shops.map(shop =>
          <ShopCard 
          key={shop.id} 
          shop={shop} />
        )}
      </div>
    </>
  );
        }