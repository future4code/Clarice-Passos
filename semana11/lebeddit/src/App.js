import React from "react"
import theme from "./constants/theme";
import Router from "./routes/Router"
import { ThemeProvider } from "@material-ui/styles";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

const App = () => {

  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout": "Login")

  return(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
        <Router rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
          </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
