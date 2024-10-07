import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Aboutus from './pages/Aboutus';
import Services from './pages/Services';
import Products from './pages/Products';
import Cursor from './commoncomponent/cursor/Cursor';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Route, Routes, useLocation } from 'react-router-dom';
import OnionPowder from './components/products/productlist/OnionPowder';
import GarlicPowder from './components/products/productlist/GarlicPowder';
import DisposableItem from './components/products/productlist/Disposableitem';
import BlogsAbout from './components/blog/bloglist/BlogsAbout';
import Loader from './commoncomponent/loading/Loader';
import gsap from 'gsap';
import HomeBack from './commoncomponent/homeback/HomeBack';
import PermissionBox from './commoncomponent/permission/PermissionBox';
import Items from './components/products/Items';
import Gallery from './pages/Gallery'
import PrivacyPolicy from './pages/Privacypolicy';




function App() {

  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    if (loadingComplete) {
      gsap.fromTo('.main-content',
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 1, ease: 'power1.out' }
      );
    }
  }, [loadingComplete]);

  const handlePreloaderComplete = () => {
    setLoadingComplete(true);
  };

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  
  return (
    
    <Box>
      {/* <Cursor /> */}
      <HomeBack />
      {/* <Home />
      <Aboutus />
      <Services />
      <Products />
      <Contact />
      <BlogsAbout /> */}

     <ScrollToTop />
      {/* {!loadingComplete && <Loader onComplete={handlePreloaderComplete} />} */}
      {/* <PermissionBox /> */}
      <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/aboutus' element={<Aboutus />}/>
           <Route path='/services' element={<Services />}/>
           <Route path='/products' element={<Products />}/>
           <Route path='/blog' element={<Blog />}/>
           <Route path='/contact' element={<Contact />}/>
           <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
           <Route path='/gallery' element={<Gallery/>}/>



           {/* Product page */}
           <Route path='/onionpowder' element={<OnionPowder />}/>
           <Route path='/garlicpowder' element={<GarlicPowder />}/>
           <Route path='/disposableitem' element={<DisposableItem />}/>

           {/* items */}
           <Route path='/item/:id' element={<Items/> } />
           {/* Blogs List */}
           <Route path='/bloglist/:id' element={<BlogsAbout />}/>
      </Routes>
    </Box>
  );
}

export default App;