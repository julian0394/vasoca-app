import React, { useRef, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, ButtonGroup, Divider, FormControl, FormControlLabel, InputLabel, List, ListItem, ListItemButton, ListItemText, MenuItem, Paper, Radio, Select, Slider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import imgSabor from '../img/products/premium/tonyMontana.jpg';
import styled from '@emotion/styled';
import RadioGroup from '@mui/material/RadioGroup';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {AddShoppingCartRoundedIcon as cartIcon} from '@mui/icons-material/AddShoppingCartRounded';
import { useEffect } from 'react';

const ProductItem = () => {
  // TODO: General state
  const defaultState = {
    size: 500,
    nicValue: 3,
    mintOption: false,
    counter: 1
  }
  const [itemState, setItemState] = useState(defaultState);

  // State on Price and size
  const [size, setSize] = useState(500);
  const handleSizeChange = e => {
    setSize(e.target.value);
  };

  // State on Nic
  const [nicValue, setNicValue] = useState(3);
  const handleSliderChange = e => {
    setNicValue(e.target.value);
  };

  // State of Mint
  const [mintOption, setMintOption] = useState(false);
  const handleMintOption = (event) => {
    setMintOption(event.target.value);
  };

  // State of Amount
  const [counter, setCounter] = useState(1);
  const handleCounterChange = operation => {
    if(operation === 'minus' && counter >= 1) setCounter(counter - 1);
    else if(operation === 'plus') setCounter(counter + 1);
  }

  // State of Counter
  const [price, setPrice] = useState(0);

  useEffect( () => {
    setPrice(counter * size);
  }, [counter, size])

  return (
    <StyAccordion>
        <AccordionSummary
          expandIcon={ <ExpandMoreIcon sx={{color: 'gray', fontSize: '3rem'}} /> }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <StyFlavorImg src={imgSabor} alt="Visual flavor" />
          <StyTextWrapper>
            <Typography variant="h5" component="span">Tony Montana - Clon Tribeca</Typography>
            <Typography>Increible tabaco dulce</Typography>
          </StyTextWrapper>

        </AccordionSummary>
        <AccordionDetails>
          <StyDescription>
            Clon Tribeca. Sabor intenso a tabaco rubio con toques de caramelo y vainilla. Un  sabor redondo, nada seco y en nariz es espectacular. Es el líquido por   excelencia para muchos vapeadores.
          </StyDescription>
          <StyExtraData>Proporción 70% VG - 30% PG.</StyExtraData>
          <StyExtraData>Producto elaborado con esencias importadas de EEUU.</StyExtraData>
        
          <StyDivider />

          <StySizeContainer>
            <Typography variant="h6">Opciones de tamaño</Typography>
            <List>
              <ListItem sx={{borderBottom: '1px solid lightgray'}}>               
                <ListItemText primary={''} />
                <ListItemText sx={{fontStyle: 'italic'}} primary={'Tamaño'} />
                <ListItemText sx={{fontStyle: 'italic'}} primary={'Precio unitario'} />                 
              </ListItem>
              <RadioGroup name="radio-price" defaultValue={size} onChange={handleSizeChange}>
                <ListItem sx={{borderBottom: '1px solid lightgray'}}>               
                  <Radio sx={{marginRight: '2rem'}} value="500" />
                  <ListItemText primary={'30ml'} />
                  <ListItemText primary={'$500'} />                 
                </ListItem>
                <ListItem sx={{borderBottom: '1px solid lightgray'}}>                 
                  <Radio sx={{marginRight: '2rem'}} value="900" />
                  <ListItemText primary={'60ml'} />
                  <ListItemText primary={'$900'} />               
                </ListItem>
                <ListItem sx={{borderBottom: '1px solid lightgray'}}>              
                  <Radio sx={{marginRight: '2rem'}} value="1700" />
                  <ListItemText primary={'120ml'} />
                  <ListItemText primary={'$1700'} />              
                </ListItem>
              </RadioGroup>
            </List>
          </StySizeContainer>

          <StyDivider />

          <Typography variant="h6">Graduación de nicotina (mg/ml)</Typography>
          <StyNicContainer>
            <Slider
              aria-label="nic"
              defaultValue={nicValue}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={6}
              onChange={handleSliderChange}
              sx={{marginLeft: '10px', marginTop: '25px'}}
            />

            <StyNicSelected sx={{width: '2rem'}}>
              <Typography>{nicValue}</Typography>
            </StyNicSelected>
          </StyNicContainer>

          <StyDivider />

          <StyMintWrapper>
            <Typography variant="h6"> 
              <AcUnitIcon fontSize='sm' /> Opción MINT
            </Typography>
            <Typography sx={{fontStyle: "italic", paddingBottom: '1rem'}}>Este sabor se puede pedir con unas gotitas de mentol.</Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Mint</InputLabel>
              <Select
                id="mint-select"
                value={mintOption}
                label="Age"
                onChange={handleMintOption}
                sx={{marginBottom: "1rem"}}
              >
                <MenuItem value={false}>NO</MenuItem>
                <MenuItem value={true}>SI</MenuItem>
              </Select>
            </FormControl>
          </StyMintWrapper>

          <StyDivider />

          <StyAmountWrapper >
            <div>
              <Button variant="contained" onClick={ () => handleCounterChange('minus') }>
                <RemoveIcon />
              </Button>
              <StyAmount variant="contained">{counter}</StyAmount>
              <Button variant="contained" onClick={ () => handleCounterChange('plus') }>
                <AddIcon />
              </Button>
            </div>
            <div>
              <Typography variant="h6" textAlign="center"> Subtotal: {<br />} ${price}</Typography>
            </div>
          </StyAmountWrapper>

          <Button variant="contained" sx={{marginTop: '2rem', width: '100%', padding: '1rem 0'}} startIcon={<cartIcon />} onClick={1 /*TODO: */}>
            Agregar al carrito
          </Button>

        </AccordionDetails>
      </StyAccordion>
  )
}

// Styles

const StyAccordion = styled(Accordion)`
  border-radius: 5px;
  background-color: white;
  border: 2px solid lightgray;
  margin: 1rem 0;
  outline: none;
  box-shadow: none;
`

const StyTextWrapper = styled.div`
  padding-left: 2rem;
`

const StyFlavorImg = styled.img`
  width: 8rem;
  object-fit: cover;
`

const StyDescription = styled(Typography)`
  padding-bottom: 1rem;
`

const StyExtraData = styled(Typography)`
  padding-bottom: 0.5rem;
  font-style: italic;
`

const StyDivider = styled.hr`
  color: darkblue;
  border: 1px solid darkblue;
`

const StySizeContainer = styled.div`
  padding-bottom: 0.5rem;
`

const StyNicContainer = styled.div`
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
`

const StyNicSelected = styled(Paper)`
  margin-left: 25px;
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
  
  p {
    font-weight: bold;
  }
`

const StyMintWrapper = styled.div`

`

const StyAmountWrapper = styled(ButtonGroup)`
margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const StyAmount = styled(Button)`
  background-color: #e8e8e8;
  pointer-events: none;
  color: black;
  font-size: 1rem;
`

export default ProductItem;