import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import WebshopGrid from './WebshopGrid';
import AboutUsSection from './AboutUsSection';
import Footer from './Footer';
import './WebshopGrid.css';
import './Header.css';
import './Hero.css';
import './AboutUsSection.css';
import './Footer.css';
import img1 from "../public/CraftFizz_kepek2_1.svg";
import img2 from "../public/CraftFizz_kepek2_2.svg";
import img3 from "../public/CraftFizz_kepek2_3.svg";


function App() {
  const images = [img1, img2, img3]

  return (
    <>
      <Header></Header>
      <Hero images={images}></Hero>
      <AboutUsSection></AboutUsSection>
      <WebshopGrid></WebshopGrid>
      <Footer></Footer>
    </>
  )
}

export default App