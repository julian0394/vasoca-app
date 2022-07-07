import { useState, useEffect } from "react";
// Components
import Sidebar from "./Sidebar";
import Carrito from '../pages/Carrito';
import InfoPanel from '../pages/InfoPanel';
import Insumos from '../pages/Insumos';
import LowCost from '../pages/LowCost';
import NicSalt from '../pages/NicSalt';
import Premium from '../pages/Premium';
import Tradicional from '../pages/Tradicional';
// MUI
import { AppBar, Box, Button, Container, IconButton, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
// Assets
import flavorList from "../flavorList";
import styled from "@emotion/styled";
// Redux
import { useSelector } from "react-redux";

const AppBody = ({ drawerOpen, setDrawerOpen }) => {

  const { route } = useSelector( state => state.route );
  
  const flavors = flavorList;
  
  return (
    <Box /*sx={{width: '100vw', overflowY: 'none'}}*/>
      {/* <StyTitleBar position="fixed" sx={{mt: '3.5rem', height: '3rem', width:'100%'}}>
        <StyTitle>
          <Typography 
            variant="subtitle1" 
            component="span" 
            sx={{ml: 6, color: 'black', fontWeight: 'medium', letterSpacing: 0.5}}
          >
            {'Linea_actual'}
          </Typography>
        </StyTitle>
      </StyTitleBar> */}

      <Stack 
        sx={{flexDirection: {sm: 'column', lg: 'row'}}} 
        justifyContent="space-between" 
        height="100vh"
      >
        <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />

        <Box flex={3} style={{backgroundColor: 'lightblue'}}>
          holo main
        </Box>

        <InfoPanel />

      </Stack>
    </Box>
  )
} 

// Styles

const StyTitleBar = styled(AppBar)`
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;
  height: 3rem;
  width: 100%;
  background-color: #e7e7e7;
`

const StyTitle = styled(Toolbar)`
  height: 1rem;
  display: flex;
  align-items: center;
`

const stackStyle = {
  flexDirection: {
    sm: 'column', 
    md: 'row'
  }
}

export default AppBody;
