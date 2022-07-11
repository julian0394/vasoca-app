import { useState } from "react";
// Style
import { createTheme, ThemeProvider } from "@mui/material";
// Componens
import Nav from "./Nav";
import AppBody2 from "./AppBody2";
import '../sty.css'

function App() {

  const theme = createTheme({
    status: {
      danger: 'orange[500]',
    },
  });

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Nav setDrawerOpen={setDrawerOpen} />
        <AppBody2 drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      </ThemeProvider>
    </>
  );
}

export default App;
