import React from "react";
import ReactDOM from "react-dom";
import Media from "react-media";
import { createGlobalStyle, ThemeProvider } from "styled-components/macro";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const apiUrl = process.env.REACT_APP_API_URL;
const logoUrl = process.env.REACT_APP_LOGO_URL;
const shopName = process.env.REACT_APP_SHOP_NAME;
const showImages = !(process.env.REACT_APP_SHOW_IMAGES === "false");
const backLinkUrl = process.env.REACT_APP_BACK_LINK_URL;

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text}
}`;

const dark = {
  background: "#212224",
  text: "#CBC8C8"
};
const light = {
  background: "white",
  text: "black"
};

ReactDOM.render(
  <Media query={{ prefersColorScheme: "dark" }}>
    {userPrefersDarkTheme => (
      <ThemeProvider theme={userPrefersDarkTheme ? dark : light}>
        <GlobalStyle />
        <App
          apiUrl={apiUrl}
          logoUrl={logoUrl}
          backLinkUrl={backLinkUrl}
          shopName={shopName}
          showImages={showImages}
        />
      </ThemeProvider>
    )}
  </Media>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
