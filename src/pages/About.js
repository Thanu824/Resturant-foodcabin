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
             Welcome to My Resturant
          </Typography>
          <p>
            The food cabin resturant
          </p>
          <br/>
          <p> 
            This is the about page
          </p>
           </Box>
    </Layout>
  )
}

export default About;