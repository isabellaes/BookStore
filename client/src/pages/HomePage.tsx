import "../css/layout.css";
import MediaCard from "../components/card";
import { Product } from "../types";
import { addToCart } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircleIcon from "@mui/icons-material/Circle";

interface CartItem {
  product: Product;
  quantity: number;
}

//change colors and style in filter section

const HomePage = () => {
  const [searchWord, setSearchWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[] | null>();
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
  const itemsPerPage = 10;

  function handleSearch() {
    const filtered = items.filter((product) => {
      return product.tags?.includes(searchWord);
    });

    setProducts(filtered);
    setCurrentPage(1);
  }

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

    setProducts(filteredProducts);
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

  function clearFilter(): void {
    const form = document.getElementById("searchForm");
    if (form) {
    }
    setSelectedCategories([]);
    setSelectedColor([]);
    setProducts(items);
    setCurrentPage(1);
  }

  return (
    <div className="container-home">
      <div className="aside">
        <div className="list">
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
                    name=""
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
                    name=""
                    id="abstract"
                  />
                  <label htmlFor="abstract">Abstract</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name=""
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
    </div>
  );
};

export default HomePage;

/* 
const [selectedPrice, setSelectedPrice] = useState<number | null>();
  const [selectedSize, setSelectedSize] = useState<string | null>();
  function filterProductsByPrice(price: number): Product[] {
    return items.filter((product) => product.price === price);
  }

  function filterProductsBySize(size: string): Product[] {
    return items.filter((product) => product.size === size);
  }

  <div className="filter-size">
                <ul>
                  Sizes
                  <li>
                    <input
                      onClick={() => setSelectedSize("20x30cm")}
                      type="checkbox"
                      name=""
                      id="size1"
                    />
                    <label htmlFor="size1">20x30cm</label>
                  </li>
                </ul>
              </div>
              <div className="filter-price">
                <ul>
                  Price
                  <li>
                    <input
                      onClick={() => setSelectedPrice(22)}
                      type="checkbox"
                      name=""
                      id="price1"
                    />
                    <label htmlFor="price1">$22.00</label>
                  </li>
                  <li>
                    <input
                      onClick={() => setSelectedPrice(23)}
                      type="checkbox"
                      name=""
                      id="price2"
                    />
                    <label htmlFor="price2">$23.00</label>
                  </li>
                </ul>
              </div>
*/
