import React, { useState } from 'react'
import Header from '../components/Header';
import Hero from '../components/hero/Hero';
import Videos from '../components/videoSection/Videos';
import Priorities from '../components/priorities/Priorities';
import Banner from '../components/Banner';
import LoginModal from '../components/modals/LoginModal';
import Footer from '../components/Footer/Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header isModalOpen={isOpen } setIsModalOpen={setIsOpen}/>
    
      <Hero />
      <Videos />
      <Priorities />
      <Banner />
      <LoginModal isOpen={isOpen } setIsOpen={setIsOpen}/>
      <Footer />
    </>
  )
  
}

export default Home