import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components/macro";
import ProductGrid from "./ProductGrid";

const LogoContainer = styled.div`
  position: sticky;
  top: 0;
  background: white;
  margin: 1em 0;
  text-align: center;
`;

const BackLink = styled.div`
  position: absolute;
  float: left;
  padding-left: 1em;
  font-size: 0.75em;
  & a {
    color: black;
    cursor: pointer;
    text-decoration: none;
  }
`;

const Logo = styled.img`
  ${BackLink} ~ & {
    margin-top: 1em;
  }
`;

const App = ({ apiUrl, backLinkUrl, logoUrl, shopName, showImages }) => (
  <>
    <Helmet>
      <title>{`${shopName} Inventory`}</title>
    </Helmet>
    <div>
      <LogoContainer>
        {backLinkUrl && (
          <BackLink>
            <a href={backLinkUrl}>
              <span role="img" aria-label="Back">
                ◀️
              </span>{" "}
              {shopName}
            </a>
          </BackLink>
        )}
        {logoUrl ? (
          <Logo src={logoUrl} alt={shopName} title={shopName} />
        ) : (
          <h2>{shopName}</h2>
        )}
      </LogoContainer>
      <ProductGrid
        apiUrl={apiUrl}
        shopName={shopName}
        showImages={showImages}
      />
    </div>
  </>
);

export default App;
