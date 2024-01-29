import MediaCard from "../components/card";
import { Product } from "../types";
import { addToCart } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircleIcon from "@mui/icons-material/Circle";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import CloseIcon from "@mui/icons-material/Close";

interface CartItem {
  product: Product;
  quantity: number;
}

const HomePage = () => {
  const [searchWord, setSearchWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[] | null>();
  const [filter, setFilter] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.product.products);
  const handleAddToCart = (product: Product) => {
    const cartItem: CartItem = {
      product: product,
      quantity: 1,
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

  useEffect(() => {
    setProducts(items);
  }, [items]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  function filterProductsByTag(tag: string[]): Product[] {
    return items.filter((product) =>
      tag.some((category) => product.tags?.includes(category))
    );
  }
  function toggleTags(tag: string): void {
    const updatedTags = selectedColor.includes(tag)
      ? selectedColor.filter((c) => c !== tag)
      : [...selectedColor, tag];

    setSelectedColor(updatedTags);
  }

  function toggleCategory(category: string): void {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);
  }

  function filterProductsByCategories(categories: string[]): Product[] {
    return items.filter((product) =>
      categories.some((category) => product.tags?.includes(category))
    );
  }

  function applyFilters(e: { preventDefault: () => void }) {
    e.preventDefault();
    let filteredProducts = [...items];

    if (selectedCategories) {
      filteredProducts = filterProductsByCategories(selectedCategories);
    }

    if (selectedColor) {
      filteredProducts = filterProductsByTag(selectedColor);
    }
    if (filteredProducts.length > 0) {
      setProducts(filteredProducts);
    }

    setFilter(false);
  }
  function clearFilter(): void {
    setSelectedCategories([]);
    setSelectedColor([]);
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
        <button className="sort-button" onClick={handleFilterVisibility}>
          <SwapVertIcon></SwapVertIcon>
          SORT
        </button>
      </div>

      {filter ? (
        <div className="filter-container">
          <div className={filter ? "filter fade-in" : "filter fade-out"}>
            <button onClick={handleFilterVisibility}>
              <CloseIcon></CloseIcon>
            </button>

            <h2>Filter</h2>
            <div>
              <p>{selectedCategories.join(" ")}</p>
              <p>{selectedColor.join(" ")}</p>
            </div>
            <form
              id="searchForm"
              onSubmit={(e) => {
                e.currentTarget.reset();
              }}
            >
              <div className="filter-category">
                Categoies
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      name="animal"
                      id="animal"
                      onChange={() => toggleCategory("animal")}
                      checked={selectedCategories.includes("animal")}
                      value="animal"
                    />
                    <label htmlFor="animal">Animal</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="plant"
                      id="plant"
                      onChange={() => toggleCategory("plant")}
                      checked={selectedCategories.includes("plant")}
                      value="plant"
                    />
                    <label htmlFor="plant">Plants</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="flower"
                      id="flower"
                      onChange={() => toggleCategory("flower")}
                      checked={selectedCategories.includes("flower")}
                    />
                    <label htmlFor="flower">Flower</label>
                  </li>
                  <li>
                    <input
                      onChange={() => toggleCategory("abstract")}
                      checked={selectedCategories.includes("abstract")}
                      type="checkbox"
                      name="abstract"
                      id="abstract"
                    />
                    <label htmlFor="abstract">Abstract</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="quote"
                      id="quote"
                      onChange={() => toggleCategory("quote")}
                      checked={selectedCategories.includes("quote")}
                    />
                    <label htmlFor="quote">Quote</label>
                  </li>
                </ul>
              </div>
              <div className="filter-color">
                Colors
                <ul>
                  <li>
                    <a onClick={() => toggleTags("green")}>
                      <CircleIcon sx={{ color: "green" }}></CircleIcon>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => toggleTags("yellow")}>
                      <CircleIcon sx={{ color: "yellow" }}></CircleIcon>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => toggleTags("black")}>
                      <CircleIcon sx={{ color: "black" }}></CircleIcon>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => toggleTags("white")}>
                      {" "}
                      <CircleIcon sx={{ color: "white" }}></CircleIcon>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => toggleTags("pink")}>
                      {" "}
                      <CircleIcon sx={{ color: "pink" }}></CircleIcon>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => toggleTags("purple")}>
                      {" "}
                      <CircleIcon sx={{ color: "purple" }}></CircleIcon>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => toggleTags("red")}>
                      {" "}
                      <CircleIcon sx={{ color: "red" }}></CircleIcon>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => toggleTags("blue")}>
                      {" "}
                      <CircleIcon sx={{ color: "blue" }}></CircleIcon>
                    </a>
                  </li>
                </ul>
              </div>

              <button onClick={applyFilters}>Apply filter</button>
              <button type="submit" onClick={clearFilter}>
                Clear filter
              </button>
            </form>
          </div>
        </div>
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
