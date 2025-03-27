import logo from './logo.svg';
import './App.css';
import {Component} from "react";
import Header from './components/Header/header'
import FirstBanner from './components/FirstBanner/firstBanner'
import CooperationBlock from './components/CooperationBlock/cooperationblock'
import SecondBanner from './components/SecondBanner/secondBanner'
import ThirdBanner from './components/ThirdBanner/thirdBanner'
import SectionContainer from './components/SectionContainer/sectionContainer'
import ProductsContainer from './components/ProductsContainer/productsContainer'
import Video from './components/Video/video'
import Slider from './components/Slider/slider'
import Advantages from './components/Advantages/advantages'
import Footer from './components/Footer/footer'
// class App extends Component
// {

// }

function App() {
  return (
    <>
    
    <Header/>
    <FirstBanner/>
    <CooperationBlock/>
    <SecondBanner/>
    <ThirdBanner/>
    <SectionContainer/>
    <ProductsContainer/>
    <Video/>
    <Slider/>
    <Advantages/>
    <Footer/>
    </>
  );
}

export default App;
