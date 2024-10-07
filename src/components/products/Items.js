import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../../commoncomponent/header/Header";
import Navbar from "../../commoncomponent/header/Navbar";
import Herosection from "../products/Herosection";
import Footer from "../../commoncomponent/footer/Footer";
import { data } from "./productlist/Disposableitem";
import { OnionPow } from "./productlist/OnionPowder";
import { garlicItems } from "./productlist/GarlicPowder";
import { product } from "./OurProduct";
import { useNavigate, useParams } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import disposableVideo1 from "../../assets/video/BowlVideo.mp4";
import disposableVideo2 from "../../assets/video/PlateVideo.mp4";
import disposableVideo3 from "../../assets/video/spoonVideo.mp4";
import disposableVideo4 from "../../assets/video/FrockeVideo.mp4";
import disposableVideo5 from "../../assets/video/BagassVideo.mp4";
import disposableVideo6 from "../../assets/video/RedOnionVideo.mp4";
import disposableVideo7 from "../../assets/video/WhiteOnionPow.mp4";
import disposableVideo8 from "../../assets/video/DehydratedOnionVideo.mp4";
import disposableVideo9 from "../../assets/video/OnionCrem.mp4";
import disposableVideo10 from "../../assets/video/Dehydrated.mov";
import disposableVideo11 from "../../assets/video/aluminium.mp4";
import disposableVideo12 from "../../assets/video/Cotton.mp4";

function Items() {
  const { id } = useParams();
  console.log(id);

  // Find matching data in both `data` and `OnionPow`
  const dataDetails = data.find((item) => item.id == id);
  const onionDetails = OnionPow.find((item) => item.id == id);
  const Product = product.find((item) => item.id == id);
  const garlicItemsDetails = garlicItems.find((item) => item.id == id);

  // Combine both results into one object
  const details = dataDetails || onionDetails || garlicItemsDetails || Product; // Prioritize `dataDetails`, or use `onionDetails` if not found

  console.log(details);

  const navigate = useNavigate();

  const videoList = [
    { id: "1", videoSrc: disposableVideo1 },
    { id: "2", videoSrc: disposableVideo2 },
    { id: "3", videoSrc: disposableVideo3 },
    { id: "4", videoSrc: disposableVideo4 },
    { id: "5", videoSrc: disposableVideo5 },
    { id: "6", videoSrc: disposableVideo6 },
    { id: "7", videoSrc: disposableVideo7 },
    { id: "8", videoSrc: disposableVideo8 },
    { id: "9", videoSrc: disposableVideo9 },
    { id: "10", videoSrc: disposableVideo10 },
    { id: "11", videoSrc: disposableVideo11 },
    { id: "12", videoSrc: disposableVideo12 },
  ];

  const videoData = videoList.find((video) => video.id === id);
  return (
    <Box>
      <Header />
      <Navbar />
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", sm: "70vh", md: "80vh" }, // Responsive height
          overflow: "hidden",
        }}
      >
        {/* Background Video */}
        {videoData && (
          <video
            src={videoData.videoSrc} // Dynamically load video based on ID
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
            }}
          />
        )}

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.34)", // Black with 34% opacity
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
            <Typography variant="h5"
              sx={{
                fontSize: { xs: "18px", sm: "20px", md: "25px" }, // Responsive font size
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              Home
            </Typography>
            <Typography>
              <Typography variant="h5"
                onClick={() => navigate("/products")}
                sx={{
                  fontSize: { xs: "18px", sm: "20px", md: "25px" }, // Responsive font size
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <ArrowForwardIcon
                  sx={{
                    color: "red",
                    fontSize: { xs: "18px", sm: "20px", md: "25px" }, // Responsive icon size
                    mx: 1, // Margin-left and margin-right
                  }}
                />
                Product
              </Typography>
            </Typography>
            <Typography>
              <Typography variant="h5"
                onClick={() => navigate("/products")}
                sx={{
                  fontSize: { xs: "18px", sm: "20px", md: "25px" }, // Responsive font size
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <ArrowForwardIcon
                  sx={{
                    color: "red",
                    fontSize: { xs: "18px", sm: "20px", md: "25px" }, // Responsive icon size
                    mx: 1, // Margin-left and margin-right
                  }}
                />
                {details?.name}
              </Typography>
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{ py: { xs: 10, sm: 5, md: 5 } }}>
        <Container sx={{maxWidth:{lg:"xl",xs:"lg"}}}>
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { lg: "56px", sm: "46px", xs: "36px" },
                fontWeight: "600",
                textAlign: "center",
                fontFamily: "'Public Sans', sans-serif",
              }}
            >
              Product Information
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                textAlign: "center",
                color: "#808080",
                fontFamily: "'Public Sans', sans-serif",
                pt: { xs: 3, sm: 4, md: 5 },
              }}
            >
              {details?.containe1}
            </Typography>
          </Box>

          <Box sx={{ mt: { xs: 5, sm: 10, md: 15 } }}>
            <Grid
              container
              item
              xs={12}
              spacing={10}
              display={"flex"}
              justifyContent={"center"}
            >
              <Grid item xs={12} md={6} lg={6}>
                <Box>
                  <img
                    src={details?.img1}
                    alt="Product"
                    className="img-fluid"
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} display={"flex"} alignItems={"center"}>
                <Box>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "18px",
                      fontWeight: "600",
                      pt: 3,
                      fontFamily: "'Public Sans', sans-serif",
                    }}
                  >
                    Product Name:
                    <Typography
                      sx={{
                        fontSize:"18px",
                        fontWeight: "500",
                        ml: 1,
                        color: "#999999",
                        fontFamily: "'Public Sans', sans-serif",
                      }}
                    >
                      {details?.name}
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "18px",
                      fontWeight: "600",
                      pt: 7,
                      fontFamily: "'Public Sans', sans-serif",
                    }}
                  >
                    Country of Origin:
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "500",
                        ml: 1,
                        color: "#999999",
                        fontFamily: "'Public Sans', sans-serif",
                      }}
                    >
                      {details?.Country}
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize:"18px",
                      fontWeight: "600",
                      pt: 7,
                      fontFamily: "'Public Sans', sans-serif",
                    }}
                  >
                    Shelf Life:
                    <Typography
                      sx={{
                        fontSize:"18px",
                        fontWeight: "500",
                        ml: 1,
                        color: "#999999",
                        fontFamily: "'Public Sans', sans-serif",
                      }}
                    >
                      {details?.Shelflife}
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "18px",
                      fontWeight: "600",
                      pt: 7,
                      fontFamily: "'Public Sans', sans-serif",
                    }}
                  >
                    Packaging Type:
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "500",
                        ml: 1,
                        color: "#999999",
                        fontFamily: "'Public Sans', sans-serif",
                      }}
                    >
                      {details?.PackagingTyp}
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "18px",
                      fontWeight: "600",
                      pt: 7,
                      fontFamily: "'Public Sans', sans-serif",
                    }}
                  >
                    Preferred Buyer Location:
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "500",
                        ml: 1,
                        color: "#999999",
                        fontFamily: "'Public Sans', sans-serif",
                      }}
                    >
                      {details?.buyerLocation}
                    </Typography>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box py={10}>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "20px",
                color: "#808080",
                fontFamily: "'Public Sans', sans-serif",
              }}
            >
              {details?.containe2}
            </Typography>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Items;
