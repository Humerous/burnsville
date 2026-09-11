import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeHero from '../components/home/HomeHero';
import ShopByHeat from '../components/home/ShopByHeat';
import HomeProductShowcase from '../components/home/HomeProductShowcase';
import BrandProofStrip from '../components/home/BrandProofStrip';
import NewsletterSignup from '../components/home/NewsletterSignup';
import Meta from '../components/Meta';
import { listProducts } from '../actions/productActions';
import './home-screen.css';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products = [] } = productList;

  useEffect(() => {
    dispatch(listProducts('', 1));
  }, [dispatch]);

  return (
    <>
      <Meta />
      <div className='burnsville-home-framework'>
        <HomeHero />
        <ShopByHeat />
        <HomeProductShowcase
          loading={loading}
          error={error}
          products={products}
        />
      </div>
      <BrandProofStrip />
      <NewsletterSignup />
    </>
  );
};

export default HomeScreen;
