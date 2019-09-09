import React from "react";
import { Helmet } from "react-helmet";
import ProductGrid from "./ProductGrid";
import "./App.css";

const App = ({ apiUrl, backLinkUrl, logoUrl, shopName, showImages }) => (
  <>
    <Helmet>
      <title>{`${shopName} Inventory`}</title>
    </Helmet>
    <div className="App">
      <div className="logoContainer">
        {backLinkUrl && (
          <div className="backLink">
            <a href={backLinkUrl}>
              <span role="img" aria-label="Back">
                ◀️
              </span>{" "}
              {shopName}
            </a>
          </div>
        )}
        {logoUrl ? (
          <img className="logo" src={logoUrl} alt={shopName} title={shopName} />
        ) : (
          <h2>{shopName}</h2>
        )}
      </div>
      <ProductGrid
        apiUrl={apiUrl}
        shopName={shopName}
        showImages={showImages}
      />
    </div>
  </>
);

export default App;
