import styled from "@emotion/styled";
// MUI
import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
// Images
import repartoImg from '../img/info/reparto.jpg';
import descuentosImg from '../img/info/descuentos.jpg';


const InfoPanel = () => {
  const theme = useTheme();
  const desktopView = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box>
      <StyImg desktopView src={repartoImg} alt="Modalidad del reparto" style={{paddingTop: '3.5rem'}} />
      <StyImg desktopView src={descuentosImg} alt="Descuentos disponibles" style={{paddingBottom: '1.5rem'}} />
    </Box>
  )
}

export default InfoPanel;

// Styles

const StyImg = styled.img`
  width: 100%;
  object-fit: cover;
`