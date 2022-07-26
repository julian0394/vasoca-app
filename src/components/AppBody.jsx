// Components
import Sidebar from "./Sidebar";
import InfoBlock from './InfoBlock';
// MUI
import { Box, Drawer, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
// Redux
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const AppBody2 = ({ drawerOpen, setDrawerOpen }) => {
  const theme = useTheme();
  const desktopView = useMediaQuery(theme.breakpoints.up('md'));
  const productList = useSelector( state => state.products );
  console.log(productList);

  return (
    <Stack>
      { /* Sidebar solo desktop, en mobile es Drawer */
        desktopView 
        ? 
          <Box flex={0.9} sx={{borderRight: '1px solid lightgray', /*width: '250px',*/ paddingTop: '60px', height: '90vh'}}>
            <Sidebar 
              setDrawerOpen={setDrawerOpen}
            />
          </Box>
        :
          <Drawer // TODO: cerrar drawer al clickear Backdrop
            open={drawerOpen}
            anchor="left"
          >
            <Sidebar 
              drawerOpen={drawerOpen} 
              setDrawerOpen={setDrawerOpen}
            />
          </Drawer>
      }
      <main>
        <InfoBlock />

        {/* 
          TODO: 
          - Si la 'List' maeneja props de sticky mantiene el titulo de la categoria.
          - ListTitle?) nombre de linea, mapeo de items, repetir.
        */}

        {/* Lista de productos */}
        { 
          productList.map( line => {
            if( !line.info.disabled ) {
              return (
                <div key={line.id} id={line.info.screen}>
                  {/* Titulo de la linea */}
                  <Typography variant="h6" component="h2" sx={{marginLeft: '10px'}}>
                    {line.name}
                  </Typography>
                  { /* Tarjetas de sabores de esa linea */
                    line.flavors.map( flavor => (
                      <ProductItem
                        key={flavor.name}
                        name={flavor.name}
                        category={flavor.category}
                        shortDesc={flavor.shortDescription}
                        longDesc={flavor.longDescription}
                        img={flavor.img}
                        mint={flavor.mint}
                        line={line.info.screen}
                        prices={line.info.price}
                      />
                    ))
                  }
                </div>
              )
            }
          })          
        }
      </main>
    </Stack>
  )
}

export default AppBody2;