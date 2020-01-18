import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { lighten } from "polished";
import { logger } from "../logging";
import ProductListing from "../ProductListing";

const StyledSoldOut = styled.div`
  text-align: center;
`;

const SoldOut = ({ shopName }) => (
  <StyledSoldOut>
    <h3>{shopName} has no products in stock right now.</h3>
    <h5>Please check back later.</h5>
  </StyledSoldOut>
);

const ProductCard = styled.div`
  border: 1px solid #ccc;
  box-shadow: 2px 6px 25px rgba(0, 0, 0, 0.1);
  background-color: ${props => lighten(0.1, props.theme.background)};
  color: ${props => lighten(0.1, props.theme.text)};
  width: 80%;
`;

const ProductDetails = styled.div`
  padding: 1em;
`;

const StyledProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1em;
  justify-items: center;
`;

const ProductGrid = ({ data = {}, shopName }) => {
  const inventory = Object.entries(data);
  useEffect(() => {
    if (!inventory.length) {
      logger.info("No inventory returned from api.");
    }
  }, [inventory]);

  return (
    <StyledProductGrid>
      {inventory.length ? (
        inventory.map(([location, products]) => (
          <ProductCard key={location}>
            <ProductDetails>
              <h3>{location}</h3>
              {products.map(product => (
                <ProductListing key={product.productName} product={product} />
              ))}
            </ProductDetails>
          </ProductCard>
        ))
      ) : (
        <SoldOut shopName={shopName} />
      )}
    </StyledProductGrid>
  );
};

export default ProductGrid;
