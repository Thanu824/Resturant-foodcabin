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
          <Typography variant="h4">
            Welcome to the food cabin resturant
          </Typography>
          <p>
             No.54,Ramakrishna Road,Wellawatte,Columbo 00600,Sri Lanka Shantharuban was established in the year 2004 on the concept of a unique vegetarian resturant providing the discerning clientele in Colombo and suburbs with top class South India and North India cuisine with a matching ambience
            </p>
            <br/>
            <p>We have catered to the lovers of quality Indial Vegetarian food for over a decade
            </p>
          <br/>
          <p> 
            Our resolve in maintaining high standards in service, is borne by the fact that more than 80% of our clients are repeat customers emphasizing high levels of customer loyalty
          </p>
          <br/>
          <p>
           We are commited to a non compromising attitude in the quality of our food and excellence in our service.
          </p>
           </Box>
    </Layout>
  )
}

export default About;