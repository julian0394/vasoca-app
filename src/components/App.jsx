import { useEffect, useState } from "react";
// Style
import { createTheme, ThemeProvider } from "@mui/material";
// Componens
import Nav from "./Nav";
import AppBody from "./AppBody";
import '../sty.css'
// Firebase
import { fetchProductData } from "../db/controller";
// Redux
import store from "../appState/store";
import { Provider } from "react-redux";
import { useDispatch } from 'react-redux'
import { initState } from "../appState/slices/productSlice";

function App() {
  const dispatch = useDispatch();

  useEffect( () => {
    fetchProductData('lines').then( data => {
      dispatch( initState(data) );
    });
  }, [dispatch] );

  const theme = createTheme({
    status: {
      danger: 'orange[500]',
    },
  });

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Nav setDrawerOpen={setDrawerOpen} />
          <AppBody drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
