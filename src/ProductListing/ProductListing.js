import React, { useState } from "react";

const Quantity = ({ quantity }) =>
  quantity >= 6 ? (
    <div className="quantity inStock">In Stock</div>
  ) : (
    <div className="quantity">
      {quantity <= 0 ? "Sold Out" : `${quantity} Available`}
    </div>
  );

const ProductListing = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const { productName, description, quantity } = product;
  return (
    <div className="productListing">
      <div className="productSummary">
        <div>
          <span
            className="expander"
            onClick={() => setExpanded(prevExpanded => !prevExpanded)}
          >
            {expanded ? "➖" : "➕"}
          </span>
          {productName}
        </div>
        <Quantity quantity={quantity} />
      </div>
      {expanded && <div className="productDescription">{description}</div>}
    </div>
  );
};

export default ProductListing;
