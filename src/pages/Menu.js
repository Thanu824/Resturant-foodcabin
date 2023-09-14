import React from 'react'
import Layout from'../components/Layout/Layout';
import {Box,Card,CardActionArea,CardMedia,CardContent,Typography} from "@mui/material";
import {Menulist} from "../data/data";
const Menu = () => {
  return (
    <Layout>
       <Box>
        {
        Menulist.map(menu=>(
          <Card>
            <CardActionArea>
              <CardMedia sx={{minHeight:"400px"}} 
              component={"img"} 
              src={menu.image}
               alt={menu.name}/>
               <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
               </CardContent>
            </CardActionArea>
          </Card>
        ))
        }
       </Box>
    </Layout>
  )
}

export default Menu