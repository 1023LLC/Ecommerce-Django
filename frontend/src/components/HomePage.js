import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/actions/categoriesActions';
import { fetchProducts } from '../redux/actions/productsActions';
import CategoryList from './CategoryList';
import FlashSaleProducts from './FlashSaleProducts';
import TopSellingProducts from './TopSellingProducts';
import CategoryProducts from './CategoryProducts';

const HomePage = () => {

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);
    const products = useSelector((state) => state.products);

    useEffect(()=> {
        dispatch(fetchCategories());
        dispatch(fetchProducts());
    }, [dispatch]);
    
  return (
    <>
        
    </>
  )
}

export default HomePage