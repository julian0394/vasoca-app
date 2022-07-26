import React, { useState } from 'react';
import { 
  Accordion, 
  AccordionDetails, 
  AccordionSummary, 
  Button, 
  ButtonGroup, 
  FormControl, 
  InputLabel, 
  List, 
  ListItem, 
  ListItemText, 
  MenuItem, 
  Paper, 
  Radio, 
  Select, 
  Slider, 
  Typography 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import imgSabor from '../img/products/premium/tonyMontana.jpg';
import styled from '@emotion/styled';
import RadioGroup from '@mui/material/RadioGroup';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { AddShoppingCart as CartIcon }  from '@mui/icons-material';
import { useEffect } from 'react';

const ProductItem = ({ 
    name,
    category, 
    shortDesc,
    longDesc,
    img,
    mint,
    line,
    prices,
  }) => {
  // Var used to know the first radiobutton value and reset the state
  const firstPrice = Object.values(prices[0]);

  // State on Price and size
  const [size, setSize] = useState(0);
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

  // Updates counter value each time it changes
  useEffect( () => {
    setPrice(counter * size);
  }, [counter, size])
  
  // Updates the value of the RadioGroup to the lower (first) price
  useEffect( () => {
    setSize(firstPrice[0]);
  }, [])

  // Set every state to default 
  const resetState = () => {
    setSize(firstPrice);
    setNicValue(3);
    setMintOption(false);
    setCounter(1);
  }

  /* State of accordion open/close */
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleAddToCartButton = () => {
    if( counter > 0 ) 
      resetState();
    else
    setAccordionOpen(false);
  }

  return (
    <StyAccordion expanded={accordionOpen}>
      <AccordionSummary
        expandIcon={ <ExpandMoreIcon sx={{color: 'gray', fontSize: '3rem'}} /> }
        aria-controls="panel1a-content"
        id="panel1a-header"
        onClick={ () => setAccordionOpen( !accordionOpen ) }
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <StyFlavorImg src={img ? img : imgSabor} alt="Visual flavor" />
        <StyTextWrapper>
          <Typography variant="h5" component="span">{name}</Typography>
          <Typography>{shortDesc}</Typography>
          <Typography sx={{color: 'gray', fontStyle: 'italic'}}>{category}</Typography>
        </StyTextWrapper>
      </AccordionSummary>

      <AccordionDetails>
        <StyDescription>{longDesc}</StyDescription>
        <StyExtraData>Proporción 70% VG - 30% PG.</StyExtraData>
        <StyExtraData>
          { line === 'lowCost' ? 'Producto elaborado con esencias nacionales.' : 'Producto elaborado con esencias importadas de EEUU.'}
        </StyExtraData>
      
        <StyDivider />

        <Typography variant="h6">Opciones de tamaño</Typography>
        <StySizeContainer>
          <List>
            {/* Table header */}
            <ListItem sx={{borderBottom: '1px solid lightgray'}}>               
              <ListItemText primary={''} />
              <ListItemText sx={{fontStyle: 'italic'}} primary={'Tamaño'} />
              <ListItemText sx={{fontStyle: 'italic'}} primary={'Precio unitario'} />                 
            </ListItem>

            <RadioGroup name="radio-price" value={size} onChange={handleSizeChange}>
              {
                prices.map( singlePrice => {
                  const productPrice = Object.values(singlePrice);
                  const ProductSize = Object.keys(singlePrice);
                  // if( size === 0 ) setSize(productPrice[0])
                  
                  return (
                    <ListItem key={productPrice[0]} sx={{borderBottom: '1px solid lightgray'}}>               
                      <Radio selected sx={{marginRight: '2rem'}} value={productPrice[0]} />                   
                      <ListItemText primary={ProductSize[0]} />
                      <ListItemText primary={`$${productPrice[0]}`} />                 
                    </ListItem>
                  )
                })
              }
            </RadioGroup>
          </List>
        </StySizeContainer>

        <StyDivider />

        <Typography variant="h6">Graduación de nicotina (mg/ml)</Typography>
        <StyNicContainer>
          <Slider
            aria-label="nic"
            defaultValue={nicValue}
            value={nicValue}
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

        {
          mint &&
          <StyMintWrapper>
            <StyDivider />
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
        }
        
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

        <Button 
          variant="contained" 
          sx={{marginTop: '2rem', width: '100%', padding: '1rem 0'}} 
          startIcon={counter > 0 && <CartIcon />} 
          onClick={handleAddToCartButton}
        >
          { counter > 0 ? 'Agregar al carrito' : 'Cerrar panel' }
        </Button>

      </AccordionDetails>
    </StyAccordion>
  )
}




// Styles

const StyAccordion = styled(Accordion)`
  border-radius: 10px;
  background-color: white;
  border: 2px solid lightgray;
  margin: 1rem 0;
  outline: none;
  box-shadow: none;
`

const StyTextWrapper = styled.div`
  margin-left: 1.5rem;
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
  margin-right: 15px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
  /* border: none; */
  
  p {
    font-weight: bold;
  }
`

const StyMintWrapper = styled.div``

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
  padding: 4px;
`

export default ProductItem;