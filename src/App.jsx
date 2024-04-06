import { useState, useEffect, useCallback } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios'

import { NavBar, } from "./components/global/NavBar";
import { Home } from "./pages/Home";
import { Footer } from "./components/global/Footer";
import { Categories } from "./pages/Categories";
import { Product } from "./pages/Product";

function App() {
  let [category, setCategory] = useState("all");
  const navigate = useNavigate();

  // let [bannerData, setBannerData] = useState([]);
  let [bannerImage_1, setBannerImage_1] = useState();
  let [bannerImage_2, setBannerImage_2] = useState();
  let [homeData, setHomeData] = useState([]);
  let [proudFilterData, setProudFilterData] = useState([])
  let [trendingData, setTrendingData] = useState([]);
  let [categoryData, setcategoryData] = useState([]);

  const productURL = `${import.meta.env.VITE_SERVER_URL}/api/products`;

  const fetchBannerData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/bannerImage`);
      const data = res.data;
      // setBannerData(data)
      setBannerImage_1(data[0].image)
      setBannerImage_2(data[1].image)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const fetchHomeData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/homeImage`);
      const data = res.data;
      setHomeData(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchProudData = useCallback(async () => {
    try {
      const res = await axios.get(productURL);
      const data = res.data;
      const filtered = data.slice(0, 8);
      setProudFilterData(filtered);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [productURL]);

  const fetchTrendingData = useCallback(async () => {
    try {
      const res = await axios.get(productURL);
      const data = res.data;
      const filtered = data.slice(8, 20);
      setTrendingData(filtered);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [productURL]);

  const fetchCategoryData = useCallback(async () => {
    try {
      const res = await axios.get(productURL);
      const data = res.data;
      if (category.toLowerCase() === 'all') {
        setcategoryData(data);
      } else {
        const filtered = data.filter(item => item.dataCategory.toLowerCase() === category.toLowerCase());
        setcategoryData(filtered);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [category, productURL]);

  useEffect(() => {
    fetchBannerData();
    fetchHomeData();
    fetchProudData();
    fetchTrendingData()
    fetchCategoryData()
  }, [fetchCategoryData, fetchProudData, fetchTrendingData])

  // when the route changes, always scroll on the top of the page
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    navigate(`/categories/${newCategory.toLowerCase()}`);
  };

  return (
    <>
      <NavBar category={ category } setCategory={ handleCategoryChange } />
      <Routes>
        <Route
          path="/"
          element={ <Home
            setCategory={ handleCategoryChange }
            bannerImage_1={ bannerImage_1 }
            bannerImage_2={ bannerImage_2 }
            homeData={ homeData }
            proudFilterData={ proudFilterData }
            trendingData={ trendingData }
          /> } />
        <Route
          path="/categories/:id"
          element={ <Categories
            category={ category }
            setCategory={ handleCategoryChange }
            categoryData={ categoryData }
          /> } />
        <Route
          path="/product/:id"
          element={ <Product
            trendingData={ trendingData }
          /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
