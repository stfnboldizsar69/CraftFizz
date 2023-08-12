import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import WebshopGrid from './WebshopGrid';
import AboutUsSection from './AboutUsSection';
import './WebshopGrid.css';
import './Header.css';
import './Hero.css';
import './AboutUsSection.css'
import img1 from "../public/asd.jpg";
import img2 from "../public/pepe.jpg";
import img3 from "../public/asd.jpg";
import img4 from "../public/pepe.jpg";
import img5 from "../public/asd.jpg";
import img6 from "../public/pepe.jpg";  


function App() {
  const images = [img1, img2, img3, img4, img5, img6]

  return (
    <>
      <Header></Header>
      <Hero images={images}></Hero>
      <AboutUsSection></AboutUsSection>
      <WebshopGrid></WebshopGrid>
    </>
  )
}

export default App