import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Observer } from 'gsap/Observer';
import { Box, Typography, Modal, Backdrop } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import img from '../../src/assets/images/home/1.png';
import dog from '../../src/assets/images/home/Mask1.png'
import dog2 from '../../src/assets/images/home/Mask2.png'
import Navbar from '../commoncomponent/header/Navbar';
import Header from '../commoncomponent/header/Header';

gsap.registerPlugin(Observer);

const imageUrls = [

  dog,
  dog2,
  dog,
  dog2,
  dog,
  dog2,
  dog,
  dog2,
 
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const imagesRef = useRef([]);
  const navigate = useNavigate();  
  const radius = 250;
  const progress = useRef({ value: 0 }).current;
  const imagePadding = 10;
  const autoplayRef = useRef(null);
  const autoplaySpeed = 3;

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpenModal = (url) => {
    setSelectedImage(url);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    const updateCarousel = () => {
      imagesRef.current.forEach((image, index) => {
        const theta = index / imagesRef.current.length - progress.value;
        const x = -Math.sin(theta * Math.PI * 2) * (radius + imagePadding);
        const y = Math.cos(theta * Math.PI * 2) * (radius + imagePadding);
        image.style.transform = `translate3d(${x}px, 0px, ${y}px) rotateY(${360 * -theta}deg)`;
      });
    };

    Observer.create({
      target: carousel,
      type: "wheel,pointer",
      onPress: () => {
        carousel.style.cursor = 'grabbing';
        gsap.killTweensOf(progress);
      },
      onRelease: () => {
        carousel.style.cursor = 'grab';
        autoplayRef.current.restart();
      },
      onChange: (self) => {
        const p = self.event.type === 'wheel' ? self.deltaY * -0.0005 : self.deltaX * 0.05;
        gsap.to(progress, {
          duration: 100,
          ease: 'power4.out',
          value: `+=${p}`,
          onUpdate: updateCarousel,
        });
      }
    });

    autoplayRef.current = gsap.to(progress, {
      value: '+=1',
      ease: 'none',
      duration: 100 / autoplaySpeed,
      repeat: -1,
      onUpdate: updateCarousel,
    });

    return () => {
      gsap.ticker.remove(updateCarousel);
      autoplayRef.current.kill();
    };
  }, [progress]);

  return (
    
    <Box>
    <Box>
    <Header/>
    <Navbar/>
    </Box>

        <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        transform: 'rotateX(-15deg) translateY(-70px)',
        transformStyle: 'preserve-3d',
        perspective: 800,
        borderRadius: '10px',
        userSelect: 'none',
        cursor: 'grab',
      }}
      ref={carouselRef}
    >
      <Box>
        <Typography variant="h6">
          <img src={img} alt="description" style={{ width: '80%', height: 'auto', marginBottom: "25%" }} />
        </Typography>
      </Box>
      {imageUrls.map((url, index) => (
        <Box
          key={index}
          
          ref={el => imagesRef.current[index] = el}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            margin: '-100px 0 0 -100px',
            width: 200,
            height: 200,
            transform: 'translate3d(0, 0, -10px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            transformOrigin: '50% 50%',
            overflow: 'hidden',
            borderRadius: 2,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
          onClick={() => handleOpenModal(url)}
        >
          <img
            src={url}
            alt={`Carousel Image ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              border: '2px solid #fff',
              borderRadius: '10px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </Box>
      ))}

      {/* Modal for large image display */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            outline: 'none',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Large Image"
              style={{ maxWidth: '100vw', maxHeight: '100vh', borderRadius: '10px' }}
            />
          )}
        </Box>
      </Modal>
    </Box>
    </Box>
  );
};

export default Carousel;
