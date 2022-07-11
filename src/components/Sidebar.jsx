import { 
  Box, 
  Button, 
  Divider, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,  
  ThemeProvider, 
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
import productList from '../productList';
import infoList from "../info";
// Style
import styled from "@emotion/styled";
// Redux
import { routeChanged } from "../appState/slices/routeSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "../appState/store";
import { useTheme } from "@emotion/react";


const Sidebar = ({ drawerOpen, setDrawerOpen }) => {
  const dispatch = useDispatch();
  const { route } = useSelector( state => state.route );
  const theme = useTheme();

  const handleLinkPressed = newRoute => {
    setDrawerOpen(false);
    // // dispatch(routeChanged(newRoute));
    // store.dispatch(routeChanged({route: newRoute}))
    console.log(route);
  }

  const desktopView = useMediaQuery(theme.breakpoints.up('md'));

  const sidebarContent = () => { //TODO: posible ClickAwayListener para cerrar  
    return (
      <>
        {/* CABECERA ( Cruz y titulo) */}
        { !desktopView &&
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ width: '2.5rem', margin: '9px' }}>
              <CloseIcon onClick={ () => setDrawerOpen(false) } />
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
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={ () => handleLinkPressed(item.screen) }>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
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
              onClick={ () => handleLinkPressed('infoPanel') }
              children="Ver información"
              selected
            />
          </ListItem>

          <ListItem>
            <StyButton 
              variant="contained" 
              sx={buttonStyle} 
              startIcon={<ShoppingCartRoundedIcon />}
              onClick={ () => handleLinkPressed('carrito') }
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
              :
                ( /* TODO: Agregar key y funcionalidad de ListItem seleccionado */
                  <Tooltip title={item.tooltip}>
                    <ListItem disablePadding>
                      <ListItemButton 
                        component="a"
                        href={item.route} 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={ () => setDrawerOpen(false) }
                        selected={item.active}>
                        <ListItemIcon>
                          <item.icon />
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  </Tooltip>
                )
                )) }  
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

  return (
    <>
      {
        desktopView 
        ? 
          <Box flex={0.9} sx={{borderRight: '1px solid lightgray', /*width: '250px',*/ paddingTop: '60px', height: '90vh'}}>
            { sidebarContent() }
          </Box>
        :
          <Drawer // TODO: cerrar drawer al clickear Backdrop
            open={drawerOpen}
            anchor="left"
          >
            { sidebarContent() }
          </Drawer>
      }
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
