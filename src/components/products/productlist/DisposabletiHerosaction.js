import React from "react";
import { Box, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import disposable from '../../../assets/video/Disposableitem.mp4'
import { useNavigate } from "react-router-dom";



function Herosection() {

const navigate = useNavigate()

  return (
    <>
      

      <Box
        sx={{
          
          position: "relative",
          height: { xs: "60vh", sm: "70vh", md: "80vh" }, // Responsive height
          overflow: "hidden",
         
        }}
      >
        {/* Background Video */}
        <video
          src={disposable}
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
            filter: "grayscale(10%) blur(1px)", 
            // Apply filter effects// Ensure video stays behind other content
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, -1, 0.34)", // Black with 50% opacity
            zIndex: 0, // Ensure overlay is above the video but below text
          }}
        />
        <Container
          maxWidth="xl"
          sx={{
            position: "relative", // Make sure container is above the video
            zIndex: 1,
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "42px", md: "52px" }, // Responsive font size
              fontWeight: "600",
              mb: 2, // Margin-bottom
            }}
          >
            Product
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "20px", md: "25px" }, // Responsive font size
                display: "flex",
                alignItems: "center",
                cursor:"pointer"
              }}
              onClick={() => navigate("/")}
            >
              Home
              <ArrowForwardIcon
                sx={{
                  color: "red",
                  fontSize: { xs: "18px", sm: "20px", md: "25px" }, // Responsive icon size
                  mx: 1, // Margin-left and margin-right
                }}
              />
              Product
            </Typography>
          </Box>
        </Container>
      </Box>

      
    </>
  );
}

export default Herosection;
