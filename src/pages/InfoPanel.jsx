import styled from "@emotion/styled";
import { Box } from "@mui/material";

const InfoPanel = () => {
  return (
    <Box flex={1.5} sx={{backgroundColor: 'pink'}}>
      <StyTitulo>InfoPanel</StyTitulo>
    </Box>
  )
}

export default InfoPanel;

// Styles
const StyTitulo = styled.h1`
  padding-top: 3.5rem;
`