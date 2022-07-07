// Components
import Sidebar from "./Sidebar";
import Carrito from '../pages/Carrito';
import InfoPanel from '../pages/InfoPanel';
// MUI
import { AppBar, Stack, Toolbar } from "@mui/material";
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
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
      <main>
        <InfoPanel />

        {/* 
          TODO: 
          - Renderizar una 'List' de 'ProductItem'
          - Si la 'List' maeneja props de sticky mantiene el titulo de la categoria.
          - ListTitle?) nombre de linea, mapeo de items, repetir.
        */}
        
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />



        {/* Lista de productos */}
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