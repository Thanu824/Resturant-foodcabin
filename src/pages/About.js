import React from 'react'
import Layout from'./../components/Layout/Layout';
import{Box,Typography} from "@mui/material";
const About = () => {
  return (
    <Layout>
        <Box sx={{
          my:15,
          textAlign:"center",
          p:2,
          "& h4":{
            fontWeight:"bold",
            my:2,
            fontsSize:"2rem",
          },
             "& p":{
              textAlign:"justify",
             },
             "&media(max-width:600px)":{
              mt:0,
              "& h4":{
              fontSize:"1rem",
             },
            },
        }}>
          <Typography varient="h4">
             About Us
          </Typography>
          <p> <b>
            Welcome to the food cabin resturant
            </b> No.54,Ramakrishna Road,Wellawatte,Columbo 00600,Sri Lanka Shantharuban was established in the year 2004 on the concept of a unique vegetarian resturant providing the discerning clientele in Colombo and suburbs with top class South India and North India cuisine with a matching ambience
            </p>
          <br/>
          <p> 
            
          </p>
           </Box>
    </Layout>
  )
}

export default About;