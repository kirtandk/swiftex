// import React from 'react';
// import { Box, Button, Container, Grid, Typography, styled } from '@mui/material';
// import EastIcon from '@mui/icons-material/East';
// import disposableimg1 from '../../../assets/images/products/Disposable/miniBowl.jpg';
// import disposableimg2 from '../../../assets/images/products/Disposable/miniPlate (1).jpg';
// import disposableimg3 from '../../../assets/images/products/Disposable/minispoon.webp';
// import disposableimg4 from '../../../assets/images/products/Disposable/minifrock.jpg';
// import disposableimg5 from '../../../assets/images/products/Disposable/minibagass.jpg';
// import { useNavigate } from 'react-router-dom';
// import Header from '../../../commoncomponent/header/Header';
// import Navbar from '../../../commoncomponent/header/Navbar';
// import Herosection from '../productlist/DisposabletiHerosaction';
// import Footer from '../../../commoncomponent/footer/Footer';
// import bowl from "../../../assets/images/products/Disposable/bowl.jpg";
// import plate from "../../../assets/images/products/Disposable/plate.jpg";
// import spoon from "../../../assets/images/products/Disposable/spoon.jpg";
// import frocke from "../../../assets/images/products/Disposable/FROCK.jpg";
// import bagasse from "../../../assets/images/products/Disposable/bagasse.jpeg";

// export const data = [
//   {
//     id: 1,
//     img: disposableimg1,
//     img1: bowl,
//     name: "Bowl",
//     containe1:
//       "disposable bowls are crafted with the highest quality materials, designed to meet both sustainability and functionality needs. Available in various sizes, these bowls are perfect for serving soups, salads, and other meals, ideal for catering services, food chains, restaurants, and personal use.",
//     Country: "India",
//     Shelflife: "1 - 3 year",
//     PackagingTyp: "cartons",
//     buyerLocation: "Catering , Events , Retail ",
//     containe2:
//       "Products like Bowl, Forcke, and Plate are crucial for industries and are often traded internationally.",
//   },
//   {
//     id: 2,
//     img: disposableimg2,
//     img1: plate,
//     name: "Plate",
//     containe1:
//       "When exporting disposable plates, there are several key factors and product details that buyers and importers typically seek. Here is important information to include for disposable plate exports",
//     Country: "India",
//     Shelflife: "1 - 3 year",
//     PackagingTyp: "cartons",
//     buyerLocation: "Catering , Events , Retail ",
//     containe2:
//       "Products like Bowl, Forcke, and Plate are crucial for industries and are often traded internationally.",
//   },
//   {
//     id: 3,
//     img: disposableimg3,
//     img1: spoon,
//     name: "Spoon",
//     containe1:
//       "When exporting disposable plates, there are several key factors and product details that buyers and importers typically seek. Here is important information to include for disposable plate exports",
//     Country: "India",
//     Shelflife: "1 - 3 year",
//     PackagingTyp: "cartons",
//     buyerLocation: "Catering , Events , Retail ",
//     containe2:
//       "Products like Bowl, Forcke, and Plate are crucial for industries and are often traded internationally.",
//   },
//   {
//     id: 4,

//     img: disposableimg4,
//     img1: frocke,
//     name: "bagasse ",
//     containe1:
//       "When exporting disposable plates, there are several key factors and product details that buyers and importers typically seek. He re is important information to include for disposable plate exports",
//     Country: "India",
//     Shelflife: "1 - 3 year",
//     PackagingTyp: "cartons",
//     buyerLocation: "Catering , Events , Retail ",
//     containe2:
//       "Products like Bowl, Forcke, and Plate are crucial for industries and are often traded internationally.",
//   },
//   {
//     id: 5,
//     img: disposableimg5,
//     img1: bagasse,
//     name: "bagasse",
//     containe1:
//       "Bagasse bowls are made from the fibrous pulp that remains after extracting juice from sugarcane, making them an eco-friendly and biodegradable alternative to plastic.",
//     Country: "India",
//     Shelflife: "1 - 3 year",
//     PackagingTyp: "cartons",
//     buyerLocation: "Catering , Events , Retail ",
//     containe2:
//       "Products like Bowl, Forcke, and Plate are crucial for industries and are often traded internationally.",
//   },
// ];

// const StyledCard = styled(Box)(({ theme }) => ({
//   position: 'relative',
//   width: '100%',
//   // height: '380px',
//   borderRadius: '18px',
//   overflow: 'hidden',
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
//   '& .overlay': {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     opacity: 0,
//     transition: 'opacity 0.3s ease',
//     pointerEvents: 'none',
//     '&::after': {
//       content: '""',
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-0%, -0%) scale(0)',
//       borderRadius: '18px',
//       width: '100%',
//       height: '100%',
//       backgroundImage: 'linear-gradient(-45deg, #e13f2680 0%, #e13f2680 100%)',
//       transition: 'transform 0.7s ease',
//     },
//     '&:hover::after': {
//       transform: 'translate(-50%, -50%) scale(1)',
//     },
//   },
//   '&:hover .overlay': {
//     opacity: 1,
//     pointerEvents: 'auto',
//   },
//   '&:hover .card-btn': {
//     opacity: 1,
//     transform: 'scale(1)',
//   },
// }));

// const CardButton = styled(Button)(({ theme }) => ({
//   position: 'absolute',
//   bottom: '42%',
//   left: '35%',
//   transform: 'translate(-50%, 50%)',
//   fontWeight: 600,
//   padding: '10px 20px',
//   fontSize: '14px',
//   backgroundColor: 'transparent',
//   color: '#ffffff',
//   border:"2px solid white",
//   borderRadius: '10px',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   cursor: 'pointer',
//   // zIndex: 1,
//   opacity: 0,
//   boxShadow: 'none',
//   transition: 'all 0.9s cubic-bezier(0.23, 1, 0.320, 1)',
//   '&:hover': {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   '&:active': {
//     transform: 'scale(0.95)',
//   },
// }));

// function DisposableItem() {

//   const navigate = useNavigate()

//   return (
//     <Box>
//     <Header />
//     <Navbar />
//     <Herosection />
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//       }}
//       py={5}
//     >
//       <Typography
//         sx={{
//           fontSize: { lg: "52px", md: "52px", xs: "40px" },
//           fontWeight: "600",
//           fontFamily: "'Public Sans', sans-serif",
//         }}
//       >
//         Disposable Item
//       </Typography>
//     </Box>
//     <Container maxWidth="xl">
//       <Grid
//         container
//         spacing={3}
//         item
//         xs={12}
//         pb={10}
//         sx={{
//           display: "flex",
//           justifyContent: {
//             lg: "start",
//             md: "start",
//             sm: "start",
//             xs: "center",
//           },
//         }}
//       >
//         {data.map((item) => (
//           <Grid item xs={12} sm={6} md={4} lg={4} key={item.id}>
//             <StyledCard
//               sx={{ marginBottom: { lg: "26px", md: "18px", xs: "5px" } }}
//             >
//               <Box
//                 component="img"
//                 src={item.img}
//                 alt=""
//                 sx={{ width: "538px", height: "337px", objectFit: "cover" }}
//               />
//               <CardButton
//                 className="card-btn"
//                 sx={{ fontFamily: "'Public Sans', sans-serif" }}
//                 onClick={() => navigate(`/item/${item.id}`)}
//               >
//                 Read More...
//               </CardButton>
//               <Box className="overlay" />
//             </StyledCard>
//             <Box sx={{ marginLeft: "15px" }}>
//               <Typography
//                 sx={{
//                   fontFamily: "'Public Sans', sans-serif",
//                   fontSize: { lg: "28px", md: "24px", xs: "20px" },
//                   fontWeight: "600",
//                 }}
//               >
//                 {item.name}
//               </Typography>
//               <Typography
//                 sx={{
//                   borderBottom: "3px solid black",
//                   width: "16%",
//                   marginBottom: "50px",
//                 }}
//               />
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//     <Footer />
//   </Box>
//   );
// }

// export default DisposableItem

// New 19-09-2024

import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import disposableimg1 from "../../../assets/images/products/Disposable/miniBowl.jpg";
import disposableimg2 from "../../../assets/images/products/Disposable/miniPlate.jpg";
import disposableimg3 from "../../../assets/images/products/Disposable/minispoon.webp";
import disposableimg4 from "../../../assets/images/products/Disposable/minifrock.jpg";
import disposableimg5 from "../../../assets/images/products/Disposable/minibagass.jpg";
import { useNavigate } from "react-router-dom";
import Header from "../../../commoncomponent/header/Header";
import Navbar from "../../../commoncomponent/header/Navbar";
import Herosection from "../../../components/products/productlist/DisposabletiHerosaction";
import Footer from "../../../commoncomponent/footer/Footer";
import bowl from "../../../assets/images/products/Disposable/bowl.jpg";
import plate from "../../../assets/images/products/Disposable/plate.jpg";
import spoon from "../../../assets/images/products/Disposable/spoon.jpg";
import frocke from "../../../assets/images/products/Disposable/FROCK.jpg";
import bagasse from "../../../assets/images/products/Disposable/bagasse.jpeg";

export const data = [
  {
    id: 1,
    img: disposableimg1,
    img1: bowl,
    name: "Bowl",
    containe1:
      "disposable bowls are crafted with the highest quality materials, designed to meet both sustainability and functionality needs. Available in various sizes, these bowls are perfect for serving soups, salads, and other meals, ideal for catering services, food chains, restaurants, and personal use.",
    Country: "India",
    Shelflife: "1 - 3 year",
    PackagingTyp: "cartons",
    buyerLocation: "Catering , Events , Retail ",
    containe2:
      "Products like Bowl, Forcke, and Plate are crucial for industries and are often traded internationally.",
  },
  {
    id: 2,
    img: disposableimg2,
    img1: plate,
    name: "Plate",
    containe1:
      "When exporting disposable plates, there are several key factors and product details that buyers and importers typically seek. Here is important information to include for disposable plate exports",
    Country: "India",
    Shelflife: "1 - 3 year",
    PackagingTyp: "cartons",
    buyerLocation: "Catering , Events , Retail ",
    containe2:
      "Products like Bowl, Forcke, and Plate are crucial for industries and are often traded internationally.",
  },
  {
    id: 3,
    img: disposableimg3,
    img1: spoon,
    name: "Spoon",
    containe1:
      "When exporting disposable plates, there are several key factors and product details that buyers and importers typically seek. Here is important information to include for disposable plate exports",
    Country: "India",
    Shelflife: "1 - 3 year",
    PackagingTyp: "cartons",
    buyerLocation: "Catering , Events , Retail ",
    containe2:
      "Products like Bowl, Forcke, and Plate are crucial for industries and are often traded internationally.",
  },
  {
    id: 4,
    img: disposableimg4,
    img1: frocke,
    name: "Frocke ",
    containe1:
      "When exporting disposable plates, there are several key factors and product details that buyers and importers typically seek. He re is important information to include for disposable plate exports",
    Country: "India",
    Shelflife: "1 - 3 year",
    PackagingTyp: "cartons",
    buyerLocation: "Catering , Events , Retail ",
    containe2:
      "Products like Bowl, Forcke, and Plate are crucial for industries and are often traded internationally.",
  },
  {
    id: 5,
    img: disposableimg5,
    img1: bagasse,
    name: "bagasse",
    containe1:
      "Bagasse bowls are made from the fibrous pulp that remains after extracting juice from sugarcane, making them an eco-friendly and biodegradable alternative to plastic.",
    Country: "India",
    Shelflife: "1 - 3 year",
    PackagingTyp: "cartons",
    buyerLocation: "Catering , Events , Retail ",
    containe2:
      "Products like Bowl, Forcke, and Plate are crucial for industries and are often traded internationally.",
  },
];

const CustomCard = styled(Box)(({ backgroundImg, isClicked }) => ({
  position: "relative",
  width: "100%",
  height: "300px",
  backgroundImage: `url(${backgroundImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  transition: "all 0.6s cubic-bezier(0.23, 1, 0.320, 1)",
  "&:hover .content-box": {
    opacity: 1,
    transform: "translate(-0%, 0%)",
  },
  "& .content-box": {
    opacity: isClicked ? 1 : 0,
    transform: isClicked ? "translate(-0%, 0%)" : "translate(50%, 50%)",
  },
}));
const ContentBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "0",
  left: "0",
  width: "100%",
  height: "100%",
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  borderRadius: "20px",
  backgroundColor: "#e13f2680",
  opacity: 0,
  transition: "opacity 0.7s ease-in-out, transform 0.7s ease-in-out",
  "&:before": {
    content: '""',
    position: "absolute",
    bottom: -43,
    right: -43,
    background: `linear-gradient(135deg,#e13f2680)`,
    height: 62,
    width: 62,
    borderRadius: "50%",
    transition: "transform 0.35s ease-out",
  },
  "&:hover:before": {
    transform: "scale(28)",
  },
}));

function DisposableItem() {
  const navigate = useNavigate();
  return (
    <Box>
      <Header />
      <Navbar />
      <Herosection />
      <Box padding={"100px 0"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { lg: "56px", sm: "46px", xs: "36px" },
              fontWeight: "600",
              fontFamily: "'Public Sans', sans-serif",
            }}
          >
            Disposable Item
          </Typography>
        </Box>
        <Container sx={{ maxWidth: { lg: "xl", sm: "lg" } }}>
          <Grid container spacing={4}>
            {data.map((item, index) => (
              <Grid
              mt={5}
                item
                xs={12}
                sm={6}
                lg={4}
                onClick={() => navigate(`/item/${item.id}`)}
              >
                <CustomCard backgroundImg={item.img}>
                  <ContentBox className="content-box">
                    <Button
                      sx={{
                        fontFamily: "'Public Sans', sans-serif",
                        border: "1px solid white",
                        color: "white",
                        ":hover": { backgroundColor: "rgba(0, 0, 0, 0.5)" },
                        padding: "10px",
                      }}
                    >
                      Read More...
                    </Button>
                  </ContentBox>
                </CustomCard>
                <Typography
                  sx={{
                    borderBottom: "3px solid black",
                    marginLeft: "10px",
                    paddingTop: "10px",
                    fontWeight: "600",
                    fontSize: "26px",
                    fontFamily: "'Public Sans', sans-serif",
                    width: "15%",
                  }}
                >
                  {item.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
export default DisposableItem;
