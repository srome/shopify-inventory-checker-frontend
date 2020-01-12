import React from "react";
import ProductListing from "../ProductListing";

const SoldOut = ({ shopName }) => (
  <div className="soldOut">
    <h3>{shopName} has no products in stock right now.</h3>
    <h5>Please check back later.</h5>
  </div>
);

const ProductGrid = ({ data = {}, shopName }) => (
  <div className="productGrid">
    {Object.entries(data).length ? (
      Object.entries(data).map(([location, products]) => (
        <div className="productCard" key={location}>
          <div className="productDetails">
            <h3>{location}</h3>
            {products.map(product => (
              <ProductListing key={product.productName} product={product} />
            ))}
          </div>
        </div>
      ))
    ) : (
      <SoldOut shopName={shopName} />
    )}
  </div>
);

export default ProductGrid;
