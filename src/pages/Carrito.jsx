import { Button, ButtonGroup, TextField } from "@mui/material";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { useState } from "react";
import styled from "@emotion/styled";

const Carrito = () => {

  const [number, setNumber] = useState(0);
  
  const handleButton = (op) => {
    if(op === '-' && number > 0)
      setNumber(number - 1)
    else if (op === '+')
      setNumber(number + 1)
  }

  return (
    <div style={{marginTop: '5rem'}}>
      <StyTitulo>Carrito</StyTitulo>
      <ButtonGroup aria-label="outlined button group">
        <Button sx={buttonStyle} onClick={ () => handleButton('-') }> 
          <RemoveRoundedIcon /> 
        </Button>

        <Button sx={selectionStyle}>{number}</Button>

        <Button sx={buttonStyle} onClick={ () => handleButton('+') }>
          <AddRoundedIcon /> 
        </Button>
      </ButtonGroup>
    </div>
  )
}

// Style
const selectionStyle = {
  pointerEvents: 'none', 
  color: 'black',
}

const buttonStyle = {
  padding: 0
}

const StyTitulo = styled.h1`
  color: red;
  margin-top: 5rem;
`

export default Carrito;