import React, { useState } from "react";
import styled from "styled-components/macro";
import { darken } from "polished";

const ActualQuantity = styled.div`
  color: palevioletred;
  white-space: nowrap;
`;

const InStock = styled(ActualQuantity)`
  color: ${props => props.theme.text};
`;

const Quantity = ({ quantity }) =>
  quantity >= 6 ? (
    <InStock>In Stock</InStock>
  ) : (
    <ActualQuantity>
      {quantity <= 0 ? "Sold Out" : `${quantity} Available`}
    </ActualQuantity>
  );

const ProductListing = styled.div`
  padding: 0.75em 0.25em;
  &:nth-child(even) {
    background-color: ${props => darken(0.1, props.theme.background)};
  }
`;

const ProductSummary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25em;
`;

const Expander = styled.span`
  cursor: pointer;
  font-family: monospace;
  font-size: 1.5em;
  padding-right: 0.5em;
`;

const ProductDescription = styled.div`
  max-width: 80%;
  padding: 0.25em 0.25em 0.25em 1.75em;
`;

const ProductListingContainer = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const { productName, description, quantity } = product;
  return (
    <ProductListing>
      <ProductSummary>
        <div>
          <Expander onClick={() => setExpanded(prevExpanded => !prevExpanded)}>
            {expanded ? "-" : "+"}
          </Expander>
          {productName}
        </div>
        <Quantity quantity={quantity} />
      </ProductSummary>
      {expanded && <ProductDescription>{description}</ProductDescription>}
    </ProductListing>
  );
};

export default ProductListingContainer;
