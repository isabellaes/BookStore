import "../css/layout.css";
import MediaCard from "../components/card";
import { Product } from "../types";
import { addToCart } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const HomePage = () => {
  const [searchWord, setSearchWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[] | null>();
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.product.products);
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };
  const itemsPerPage = 10;

  function handleSearch() {
    const filtered = items.filter((product) => {
      return product.tags?.includes(searchWord);
    });

    setProducts(filtered);
    setCurrentPage(1);
  }

  function filterByCategory(word: string) {
    const filtered = items.filter((product) => {
      return product.tags?.includes(word);
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
    <div className="container-checkout">
      <div className="search">
        <input onChange={(e) => setSearchWord(e.target.value)} type="text" />
        <button onClick={handleSearch}>Sök</button>
      </div>
      <ul>
        <li>
          <a onClick={() => filterByCategory("animal")}>ANIMAL</a>
        </li>
        <li>
          <a onClick={() => filterByCategory("plant")}>PLANTS</a>
        </li>
        <li>
          <a onClick={() => filterByCategory("flower")}>FLOWERS</a>
        </li>
        <li>
          <a onClick={() => filterByCategory("abstract")}>ABSTRACT</a>
        </li>
        <li>
          <a onClick={() => filterByCategory("quote")}>QUOTES</a>
        </li>
      </ul>
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
  );
};

export default HomePage;
