import { 
  Box, 
  Button, 
  Divider, 
  IconButton, 
  List, 
  ListItem,  
  ListItemButton, 
  ListItemIcon, 
  ListItemText,  
  Tooltip, 
  Typography, 
  useMediaQuery
} from "@mui/material"
// Icons
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
// Assets
// import productList from '../productList';
import infoList from "../info";
// Style
import styled from "@emotion/styled";
// Redux
import { useSelector } from "react-redux";
import { useTheme } from "@emotion/react";
// Scroll
import { Link } from "react-scroll";


const Sidebar = ({ setDrawerOpen }) => {
  const theme = useTheme();
  const productList = useSelector( state => state.products);
  
  const handleLinkPressed = newRoute => {
    setDrawerOpen(false);
    // // dispatch(routeChanged(newRoute));
    // store.dispatch(routeChanged({route: newRoute}))
  }

  const desktopView = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      {/* CABECERA ( Cruz y titulo) */}
      { !desktopView &&
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ width: '2.5rem', margin: '9px' }} onClick={ () => setDrawerOpen(false) }>
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" component="span">Vasoca Vape</Typography>
        </Box>
      }

      <Divider />

      {/* PRODUCTOS - Lista de productos */}
      <List sx={{ width: '100%' }}>
        <ListItem>
          <Typography variant="h6" component="span">PRODUCTOS</Typography>
        </ListItem>
                  
        { productList.map( item => (
          <Link key={item.id} to={item.info.screen} smooth={true} offset={-70} duration={500} isDynamic={true}>
            <ListItem disablePadding>
              <ListItemButton disabled={item.info.disabled} onClick={ () => handleLinkPressed(item.info.screen) }>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        )) }
      </List>
        
      <Divider />

      {/* BOTONES (info y carrito) */}
      <List sx={{margin: '1rem 0'}}>       
        <ListItem>
          <StyButton 
            variant="contained" 
            sx={buttonStyle} 
            startIcon={<InfoOutlinedIcon />} 
            onClick={ () => handleLinkPressed('infoPanel') } // TODO: 
            children="Ver información"
            selected
          />
        </ListItem>

        <ListItem>
          <StyButton 
            variant="contained" 
            sx={buttonStyle} 
            startIcon={<ShoppingCartRoundedIcon />}
            onClick={ () => handleLinkPressed('carrito') } // TODO: 
            children="Ver carrito"
          />        
        </ListItem> 
      </List>

      <Divider />

      {/* CONTACTO (medios de contacto) */}
      <List sx={{mt: '1rem'}}>
        <ListItem>
          <Typography variant="h6" component="span">CONTACTO</Typography>
        </ListItem>
        { infoList.map( item => (
          item.tooltip === 'QR Whatsapp'  //TODO: renderizar esto segun dispositivo (solo pc)
            ? null
            : (
              <Tooltip title={item.tooltip} key={item.id}>
                <ListItem disablePadding>
                  <ListItemButton 
                    component="a"
                    href={item.route} 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={ () => setDrawerOpen(false) }
                    selected={item.active}
                  >
                    <ListItemIcon>
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              </Tooltip>
            )
          )) 
        }  
      </List>

      <Divider />

      {/* HORARIO DE ATENCION */}
      <List sx={{mt: '1rem'}}>   
        <ListItem>
          <ListItemIcon>
            <QueryBuilderIcon />
          </ListItemIcon>
          <ListItemText primary="Lunes a Viernes de 10 a 18hs" />
        </ListItem>          
      </List>
    </>
  )
}

// Styles

const buttonStyle = {
  width: '100%',
  padding: '.6rem 0'
}

const StyButton = styled(Button)`
  border-radius: 12px 1px;
`

export default Sidebar;
