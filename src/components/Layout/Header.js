import React,{useState}from 'react'
import{AppBar,Box,Drawer,Toolbar,Typography,IconButton,Divider} from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link} from 'react-router-dom';
import '../../styles/HeaderStyle.css';
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  const[mobileOpen,setMobileOpen]=useState(false)
  const handleDrawerToggle=()=>{
  setMobileOpen(!mobileOpen)
  }
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}}> 
        <Typography 
            color={'goldenrod'}
            variant='h6' 
            component="div" 
            sx={{flexGrow:1, my:2}}
            > 
              <FastfoodIcon/>
              My Resturant </Typography>
               <Divider/>
                <ul className="mobile-navigation">
                  <li>
                    <Link to={'/'}> Home</Link>
                  </li>
                  <li>
                    <Link to={'/menuu'}> Menu</Link>
                  </li>
                  <li>
                    <Link to={'/about'}> About</Link>
                  </li>
                  <li>
                    <Link to={'/contact'}> Contact </Link>
                  </li>
                </ul>
              </Box>
    
  )
  return (
    <>
        <Box>
          <AppBar component={'nav'} sx={{bgcolor:"white"}}>
            <Toolbar>
              <IconButton color="inherrit" aria-label="open drawer" edge="start" sx={{mr:2,display:{sm:"none"},
            }}
            onClick={handleDrawerToggle}>
                   <MenuIcon/>
              </IconButton>
            <Typography 
            color={'goldenrod'}
            variant='h6' 
            component="div" 
            sx={{flexGrow:1}}
            > 
              <FastfoodIcon/>
              My Resturant </Typography>
              <Box sx={{display:{xs:'none',sm:'block'} }}>
                <ul className="navigation-menu">
                  <li>
                    <Link to={'/'}> Home</Link>
                  </li>
                  <li>
                    <Link to={'/menuu'}> Menu</Link>
                  </li>
                  <li>
                    <Link to={'/about'}> About</Link>
                  </li>
                  <li>
                    <Link to={'/contact'}> Contact </Link>
                  </li>
                </ul>
              </Box>
            </Toolbar>
          </AppBar>
          <Box comonent="nav">
             <Drawer varient="temporary" open={mobileOpen} onclose={handleDrawerToggle}
             sx={{display:{xs:"block",sm:"none"},"&.MuiDrawer-paper":{
              boxSizing:"border-box",
              width:"240px",
             }}}>
              {drawer}
             </Drawer>
          </Box>
          <Box>
          
          <Toolbar/>
          </Box>
         
        </Box>
    </>
  )
}

export default Header;