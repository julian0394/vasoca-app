// Components
import Sidebar from "./Sidebar";
import InfoPanel from '../pages/InfoPanel';
// MUI
import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
// Assets
import flavorList from "../flavorList";
import styled from "@emotion/styled";
// Redux
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const AppBody2 = ({ drawerOpen, setDrawerOpen }) => {
  return (
    <Stack>
      {/* Sidebar solo desktop, en mobile es Drawer */}
      <Sidebar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <main>
        <InfoPanel />

        {/* 
          TODO: 
          - Si la 'List' maeneja props de sticky mantiene el titulo de la categoria.
          - ListTitle?) nombre de linea, mapeo de items, repetir.
        */}

        {/* Lista de productos */}
        {
          flavorList.map( line => {
            return <div key={line.info.screen} id={line.info.screen}>
              <Typography  variant="h6" component="h2">{line.info.name}</Typography>
              {
                line.flavors.map( flavor => {
                  return (
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
                  )
                })
              }
            </div>
          })
        }
      </main>
    </Stack>
  )
}

// Styles

const StyTitleBar = styled(AppBar)`
  display: flex;
  justify-content: center;
  margin-top: 3.5rem;
  height: 3rem;
  width: 100%;
  text-transform: uppercase;
  background-color: white;
`

const StyTitle = styled(Toolbar)`
  height: 1rem;
  display: flex;
  align-items: center;
`

export default AppBody2;