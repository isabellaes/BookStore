import "../css/layout.css";
import MediaCard from "../components/card";
import { Product } from "../types";
import { addToCart } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [searchWord, setSearchWord] = useState("");
  const [products, setProducts] = useState<Product[] | null>();
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.product.products);
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  function handleSearch() {
    const filtered = items.filter((product) => {
      return product.tags?.includes(searchWord);
    });

    setProducts(filtered);
  }

  useEffect(() => {
    setProducts(items);
  }, [items]);

  return (
    <div className="container-checkout">
      <div className="search">
        <input onChange={(e) => setSearchWord(e.target.value)} type="text" />
        <button onClick={handleSearch}>Sök</button>
      </div>
      <div className="container">
        {products?.flatMap((product) => (
          <MediaCard product={product} addToCart={handleAddToCart}></MediaCard>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
