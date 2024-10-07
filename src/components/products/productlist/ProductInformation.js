import React from "react";
import productinfo from "../../../assets/images/products/Productinfo.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../../../commoncomponent/header/Header";
import Navbar from "../../../commoncomponent/header/Navbar";
import Herosection from "../../products/Herosection";
import Footer from "../../../commoncomponent/footer/Footer";



function ProductInformation() {
  return (
    <Box>
    <Header />
    <Navbar />
    <Herosection />
    <Box sx={{ py: { xs: 10, sm: 5, md: 5 } }}>

      <Container maxWidth='xl'>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "32px", sm: "40px", md: "52px" },
              fontWeight: "600",
              textAlign: "center",
              fontFamily:"'Public Sans', sans-serif",
            }}
          >
            Product Information
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "24px", md: "30px" },
              textAlign: "center",
              color:'#808080',
              fontFamily:"'Public Sans', sans-serif",
              pt: { xs: 3, sm: 4, md: 5 },
            }}
          >
            Grains (like wheat and rice), fruits (such as bananas and apples),
            and
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "24px", md: "30px" },
              textAlign: "center",
              color:'#808080',
              fontFamily:"'Public Sans', sans-serif",
            }}>
            vegetables (like tomatoes and potatoes) are commonly imported and
            exported.
          </Typography>
        </Box>

        <Box sx={{ mt: { xs: 5, sm: 10, md: 15 } }}>
          <Grid container item xs={12} spacing={10} display={"flex"} justifyContent={"center"}>
            <Grid item xs={12} md={6} lg={6}>
              <Box>
                <img
                  src={productinfo}
                  alt="Product"
                  class="img-fluid"
                  style={{ width: "100%", borderRadius: "10px"}}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} display={"flex"} alignItems={"center"}>
              <Box>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "22px", md: "25px" },
                    fontWeight: "600",
                    pt: 3,
                    fontFamily:"'Public Sans', sans-serif"
                  }}
                >
                  Product Name: Loren Ipsum
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "22px", md: "25px" },
                    fontWeight: "600",
                    pt: 7,
                    fontFamily:"'Public Sans', sans-serif"
                  }}
                >
                  Country of Origin: Loren Ipsum
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "22px", md: "25px" },
                    fontWeight: "600",
                    pt: 7,
                    fontFamily:"'Public Sans', sans-serif"
                  }}
                >
                  Shelf Life: Loren Ipsum
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "22px", md: "25px" },
                    fontWeight: "600",
                    pt: 7,
                    fontFamily:"'Public Sans', sans-serif"
                  }}
                >
                  Packaging Type: Loren Ipsum
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "22px", md: "25px" },
                    fontWeight: "600",
                    pt: 7,
                    fontFamily:"'Public Sans', sans-serif"
                  }}
                >
                  Preferred Buyer Location: Loren Ipsum
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box py={10}>
          <Typography sx={{textAlign: "center",fontSize:{lg:"25px",md:"25px",xs:"18px"},color:'#808080',fontFamily:"'Public Sans', sans-serif"}}>Products like coal, iron ore, and rare earth elements are crucialfor various industries and are often </Typography>
          <Typography sx={{textAlign: "center",fontSize:{lg:"25px",md:"25px",xs:"18px"},color:'#808080',fontFamily:"'Public Sans', sans-serif"}}>traded internationally. Crudeoil, natural gas, and renewable energy products are significant </Typography>
          <Typography sx={{textAlign: "center",fontSize:{lg:"25px",md:"25px",xs:"18px"},color:'#808080',fontFamily:"'Public Sans', sans-serif"}}>commodities in global trade.</Typography>
        </Box>
      </Container>
    </Box>
    <Footer />
    </Box>
  );
}

export default ProductInformation;
