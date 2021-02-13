import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/ServicesSection';
import * as Data from '../Data';

function Home() {

  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <> 
      <Sidebar links={Data.links} toggle={toggle} isOpen={isOpen}/>

      <Navbar links={Data.links} toggle={toggle} />
      
      <HeroSection title={Data.heroTitle} subtitle={Data.heroSubtitle} />
      
      {
        Data.sections.map((obj) => <InfoSection {...obj} />)
      }

      <Services services={Data.services} />

      <Footer/>

    </>
  );
}

export default Home;
