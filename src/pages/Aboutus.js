import { Box } from '@mui/material';
import React from 'react';
import AboutCompany from '../components/aboutus/AboutCompany';
import Aboutinfo from '../components/aboutus/Aboutinfo';
import Herosection from '../components/aboutus/Herosection';
import Header from '../commoncomponent/header/Header';
import Navbar from '../commoncomponent/header/Navbar';
import Footer from '../commoncomponent/footer/Footer';


function Aboutus() {
  return (
    <Box>
        <Header />
        <Navbar />
        <Herosection />
        <AboutCompany />
        <Aboutinfo />
        <Footer />
    </Box>
  );
}

export default Aboutus;
