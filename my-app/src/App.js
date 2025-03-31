import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Header from './components/Header/header'
import MainComp from './pages/Main/main'
import SkateboardsComp from './pages/skateboards'
import AccessoriesComp from "./pages/accessories";
import InfoComp from "./pages/info";
import Footer from './components/Footer/footer'



function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<MainComp/>}/> 
      <Route path="/skateboards"element={<SkateboardsComp/>}/>
      <Route path="/accessories"element={<AccessoriesComp/>}/>
      <Route path="/info"element={<InfoComp/>}/>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
