import React, { useEffect, useState } from "react";
import { logger } from "../logging";
import ProductGrid from "./ProductGrid.component";
import Loader from "../Loader";

const ProductGridContainer = ({ apiUrl, ...props }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(apiUrl, {
      method: "GET"
    })
      .then(res => res.json())
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(err => {
        logger.error(err);
        setError(true);
        setLoading(false);
      });
  }, [apiUrl, loading]);

  if (error) {
    return <div>Error</div>;
  }

  return loading ? <Loader /> : <ProductGrid {...props} data={data} />;
};

export default ProductGridContainer;
