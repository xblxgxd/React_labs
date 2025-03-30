import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Header from './components/Header/header'
import Main from './pages/Main/main'
import ThirdBanner from './components/ThirdBanner/thirdBanner'
import ProductsContainer from './components/ProductsContainer/productsContainer'
import Video from './components/Video/video'
import Slider from './components/Slider/slider'
import Advantages from './components/Advantages/advantages'
import Footer from './components/Footer/footer'


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Main/>}/> 
      <ThirdBanner/>
      <SectionContainer/>
      <ProductsContainer/>
      <Video/>
      <Slider/>
      <Advantages/>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
