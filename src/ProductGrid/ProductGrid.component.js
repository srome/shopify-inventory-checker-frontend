import React from "react";

const Quantity = ({ quantity }) =>
  quantity >= 6 ? (
    <div className="quantity inStock">In Stock</div>
  ) : (
    <div className="quantity">
      {quantity <= 0 ? "Sold Out" : `${quantity} Available`}
    </div>
  );

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
            {products.map(({ productName, quantity }) => (
              <div className="productListing">
                <div>{productName}</div>
                <Quantity quantity={quantity} />
              </div>
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
