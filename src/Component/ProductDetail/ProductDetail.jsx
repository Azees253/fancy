import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetail = ({ Latest }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on ID
    // This could be from your Latest array or an API call
    const foundProduct = Latest.find((item) => item.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>Rating: {product.rating}</p>
      <p>Price: ${product.price}</p>
      {/* Add more product details */}
    </div>
  );
};

export default ProductDetail;
