import "../css/layout.scss";
import MediaCard from "../components/card";
import { Product } from "../types";
import { addToCart } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import FilterForm from "../components/filterForm";
import Layout from "../components/Layout";

interface CartItem {
  product: Product;
  quantity: number;
}

const HomePage = () => {
  const [searchWord, setSearchWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[] | null>();

  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.product.products);
  const handleAddToCart = (product: Product) => {
    const cartItem: CartItem = {
      product: product,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };
  const itemsPerPage = 10;

  function handleSearch() {
    const filtered = items.filter((product) => {
      return product.tags?.includes(searchWord);
    });

    setProducts(filtered);
    setCurrentPage(1);
  }

  useEffect(() => {
    setProducts(items);
  }, [items]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products?.slice(startIndex, endIndex);

  return (
    <div className="container-home">
      <Layout>
        <div className="content">
          <div className="search-container">
            <input
              type="text"
              onChange={(e) => setSearchWord(e.target.value)}
              className="search-field"
              placeholder="Search..."
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="buttons">
            <button>FILTER</button>
          </div>
          <div className="container">
            {displayedProducts?.map((product) => (
              <MediaCard
                key={product.id}
                product={product}
                addToCart={handleAddToCart}
              ></MediaCard>
            ))}
          </div>
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil((products?.length || 0) / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              shape="rounded"
            />
          </Stack>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
