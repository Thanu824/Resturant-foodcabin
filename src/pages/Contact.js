import React from 'react'
import Layout from'./../components/Layout/Layout';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import{Box,Typography,TableHead,TableRow,TableCell,TableBody,Table,TableContainer,Paper} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my:5,ml:10,"& h4":{fontweight:"bold",mb:2}}}>
        <Typography>
        <h1> Contact Page</h1>
        </Typography>
        <p><b>Our Time </b></p>
       <p> Monday-Friday 10.00 am -10.00 pm</p>
       <p> Weekends & Poyadays : 7.30 am - 10.30 pm</p>
       <br/>
       <p><b>Our Address </b></p>
       <p>  No.54,Ramakrishna Road,Wellawatte, </p>
       <p> Columbo 00600,Sri Lanka</p>
      </Box>
      <Box sx={{m:3,width:"500px",ml:5,"@media(max-width:600px)" :{width:"300px"},}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:"black", color:"white"}} align="center">
                   Contact details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                   <TableBody>
                    <TableRow>
                      <TableCell>
                          <SupportAgentIcon sx={{color:"red",pd:1}}/> 123456789(torollfree) 
                      </TableCell>
                             </TableRow>
                                 <TableRow>
                                   <TableCell>
                                     <EmailIcon sx={{color:"black",pd:1}}/> foodcabin@gmail.com
                                       </TableCell>
                                         </TableRow>
                <TableRow>
                      <TableCell>
                          <PhoneIcon sx={{color:"black",pd:1}}/> 0777773456
                      </TableCell>
                    </TableRow>
                   </TableBody>
            </TableBody>
          </Table>
           </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact