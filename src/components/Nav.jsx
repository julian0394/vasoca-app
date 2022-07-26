import { useState } from 'react';
// Logo
// import logo from '../img/logoVasoca.png';
// MUI 
import { 
  AppBar, 
  Badge, 
  IconButton, 
  Toolbar, 
  Typography, 
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';
// MUI icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// Styles
import styled from '@emotion/styled';
// Router
import { useNavigate } from 'react-router-dom';

const Nav = ({ setDrawerOpen }) => {
  /* Router */
  const navigate = useNavigate();

  /* Theme */
  const theme = useTheme();

  /* Searchbar State */
  const [isSearching, setIsSearching] = useState(false);
  
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = e => {
    const value = e.target.value;
    setInputValue( value );
  }
  
  const handleEscPress = e => {
    // console.log(e.key)
    if( e.key === 'Escape' && inputValue === '')  
    setIsSearching(false);
  }
  
  const desktopView = useMediaQuery(theme.breakpoints.up('md'));

  /* Dark Mode */
  const [darkMode, setDarkMode] = useState(false);

  if( isSearching && !desktopView ) {
    return (
      <AppBar position="fixed" sx={{height: '3.5em'}}>
        <Toolbar>
          <Box sx={{width: '100%', display: 'flex'}}>
            <IconButton
              onClick={ () => setIsSearching(false)}
              size="large"
              edge="start"
              color="inherit"
              sx={buttonStyle}
            > 
              <KeyboardBackspaceIcon />
            </IconButton>
            <StyInput 
              placeholder='Buscar productos' 
              type="search"
              onKeyDown={handleEscPress}
              value={inputValue}
              onChange={handleInputChange}
            />
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
  else {
    return (
      <AppBar sx={{height: '3.5em', position: "fixed", top: '0'}}>
        <Toolbar sx={{height: '100%'}}>
          { !desktopView &&
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={buttonStyle}
              onClick={ () => setDrawerOpen(true) }
            >
              <MenuIcon />
            </IconButton>
          }
  
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            VASO
          </Typography>
  
          {
            desktopView
            ?
              <StyDesktopInputWrapper>
                <StySearchIcon />
                <StyDesktopInput 
                  placeholder='Buscar productos'
                  type="search"
                  onKeyDown={handleEscPress}
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </StyDesktopInputWrapper>
            :
              <Tooltip title="Buscar">
                <IconButton
                  onClick={ () => setIsSearching(true)}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={buttonStyle}
                >
                  <SearchIcon />
                </IconButton>
              </Tooltip>
          }
  
          <Tooltip title="Ver información">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={buttonStyle}
              onClick={ () => navigate('/') }
            >
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Cambiar tema">
            <IconButton
              onClick={ () => setDarkMode( !darkMode ) }
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={buttonStyle}
            >
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
  
          <Tooltip title="Ver carrito">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={buttonStyle}
              onClick={ () => navigate('carrito') }
            >
              <Badge badgeContent={2} color="error">
                <ShoppingCartRoundedIcon />
              </Badge>
            </IconButton>
          </Tooltip> 
        </Toolbar>
      </AppBar>
    )
  }
}

// Styles
const buttonStyle = { 
  marginRight: 1,
}

const StyInput = styled.input`
  width: 100%;
  background-color: #3B8AD9;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0 1.5rem;
  padding-top: 0;
  border: 1px solid transparent;
  outline: none;
  color: white;

  &::placeholder {
    color: lightgray;
  }
  &:hover {
    background-color: #5398DD;
  }
  &:focus {
    border-color: darkblue;
    background-color: #5398DD;
  }
`

const StyDesktopInputWrapper = styled(Box)`
  width: 30%;
  margin-right: 20px;
  position: relative;
  display: flex;
  align-items: center;
`

const StySearchIcon = styled(SearchIcon)`
  position: absolute;
  margin-left: 15px;
  `

const StyDesktopInput = styled(StyInput)`
  width: 100%;
  display: block;
  padding: 7px;
  padding-left: 45px;
`

export default Nav;
