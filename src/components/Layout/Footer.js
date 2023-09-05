import React from 'react';
import{Box,Typography} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center',bgcolor:"black",color:"white", p:3}}>
        <Box
            sx={{
                my:3,
                "& svg":{
                    fontSize:"60px",
                    cursor:"pointer",
                    mr:2,
                },
                "& svg:hover":{
                    color:"goldenrod",
                    transform:"translateX(5px)",
                    transition:"all 400ms"
                }
            }}>
        
        {/*icons*/}
          <InstagramIcon/>
          <TwitterIcon/>
          <GitHubIcon />
          <YouTubeIcon/>
        </Box>
         <Typography 
         varient="h5"
          sx={{"@media(max-width:600px)":{
            fontSize:"1rem",
            },
            }}> 
            All Right Reserved
         </Typography>
    </Box>
    </>
  )
}

export default Footer