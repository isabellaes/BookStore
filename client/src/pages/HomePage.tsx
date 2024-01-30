import MediaCard from "../components/card";
import { CartItem, Product } from "../types";
import { addToCart } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FilterForm from "../components/filterForm";

const HomePage = () => {
  const [searchWord, setSearchWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[] | null>();
  const [filter, setFilter] = useState<boolean>(false);
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.product.products);
  const handleAddToCart = (product: Product, quantity: number) => {
    const cartItem: CartItem = {
      product: product,
      quantity: quantity,
    };
    dispatch(addToCart(cartItem));
  };
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products?.slice(startIndex, endIndex);

  function handleSearch() {
    const filtered = items.filter((product) => {
      return product.tags?.includes(searchWord);
    });
    if (filtered.length > 0) {
      setProducts(filtered);
      console.log(filtered);
    }
    setCurrentPage(1);
  }
  function handleCategoryChoise(category: string) {
    const filtered = items.filter((product) => {
      return product.tags?.includes(category);
    });
    setProducts(filtered);
  }
  function handleFilterVisibility() {
    if (filter) {
      setFilter(false);
    } else {
      setFilter(true);
    }
  }

  function handleSortByPrice() {
    //sort function
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

  function applyFilters(filteredProducts: Product[]) {
    if (filteredProducts.length > 0) {
      setProducts(filteredProducts);
    }

    setFilter(false);
  }

  return (
    <div className="container-home">
      <div className="menu-box-homepage">
        <div className="categorys">
          <ul>
            <li onClick={() => handleCategoryChoise("abstract")}>ABSTRACT</li>
            <li onClick={() => handleCategoryChoise("quote")}>QUOTE</li>
            <li onClick={() => handleCategoryChoise("plant")}>PLANTS</li>
            <li onClick={() => handleCategoryChoise("animal")}>ANIMALS</li>
          </ul>
        </div>
        <div className="search-filter-box">
          <div className="search-container">
            <input
              type="text"
              onChange={(e) => setSearchWord(e.target.value)}
              className="search-field"
              placeholder="Search..."
            />
            <button className="search-button" onClick={handleSearch}>
              <SearchIcon sx={{ color: "#575757" }}></SearchIcon>
            </button>
          </div>
        </div>
      </div>
      <div className="sort-and-filter-btns">
        <button className="filter-button" onClick={handleFilterVisibility}>
          <TuneIcon></TuneIcon>
          FILTER
        </button>
        <button className="sort-button" onClick={handleSortByPrice}>
          <SwapVertIcon></SwapVertIcon>
          SORT
        </button>
      </div>

      {filter ? (
        <FilterForm
          handleApplyFilter={applyFilters}
          handleFilterVisibility={handleFilterVisibility}
        ></FilterForm>
      ) : (
        <p></p>
      )}

      <div className="content">
        <div className="container">
          {displayedProducts ? (
            displayedProducts?.map((product) => (
              <MediaCard
                key={product.id}
                product={product}
                addToCart={handleAddToCart}
              ></MediaCard>
            ))
          ) : (
            <p>Inga produkter hittades.</p>
          )}
        </div>
        {products ? (
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil((products?.length || 0) / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              shape="rounded"
            />
          </Stack>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
