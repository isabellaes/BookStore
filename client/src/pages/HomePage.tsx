import "../css/layout.css";
import MediaCard from "../components/card";
import { Product } from "../types";
import { addToCart } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

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

  function filterByCategory(word: string) {
    const filtered = items.filter((product) => {
      return product.tags?.includes(word);
    });

    setProducts(filtered);
    setCurrentPage(1);
  }

  function filterByColor(color: string) {
    const filtered = items.filter((product) => {
      return product.tags?.includes(color);
    });

    setProducts(filtered);
    setCurrentPage(1);
  }

  function filterByPrice(price: number) {
    const filtered = items.filter((product) => {
      return product.price === price;
    });

    setProducts(filtered);
    setCurrentPage(1);
  }

  function filterBySize(size: string) {
    const filtered = items.filter((product) => {
      return product.size === size;
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
    <div className="layout">
      <div className="container-home">
        <div className="aside">
          <div className="list">
            <h2>Filter</h2>
            <ul>
              Categoies
              <li>
                <a onClick={() => filterByCategory("animal")}>Animal</a>
              </li>
              <li>
                <a onClick={() => filterByCategory("plant")}>Plants</a>
              </li>
              <li>
                <a onClick={() => filterByCategory("flower")}>Flowers</a>
              </li>
              <li>
                <a onClick={() => filterByCategory("abstract")}>Abstract</a>
              </li>
              <li>
                <a onClick={() => filterByCategory("quote")}>Quotes</a>
              </li>
            </ul>
            <ul>
              Colors
              <li>
                <a onClick={() => filterByColor("green")}>Green</a>
              </li>
              <li>
                <a onClick={() => filterByColor("yellow")}>Yellow</a>
              </li>
              <li>
                <a onClick={() => filterByColor("black")}>Black</a>
              </li>
              <li>
                <a onClick={() => filterByColor("white")}>White</a>
              </li>
              <li>
                <a onClick={() => filterByColor("pink")}>Pink</a>
              </li>
              <li>
                <a onClick={() => filterByColor("purple")}>Purple</a>
              </li>
              <li>
                <a onClick={() => filterByColor("red")}>Red</a>
              </li>
              <li>
                <a onClick={() => filterByColor("blue")}>Blue</a>
              </li>
            </ul>
            <ul>
              Sizes
              <li>
                <a onClick={() => filterBySize("20x30cm")}>20x30cm</a>
              </li>
            </ul>
            <ul>
              Price
              <li>
                <a onClick={() => filterByPrice(22)}>$22.00</a>
              </li>
              <li>
                <a onClick={() => filterByPrice(23)}>$23.00</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="search">
            <input
              onChange={(e) => setSearchWord(e.target.value)}
              type="text"
            />
            <button onClick={handleSearch}>Sök</button>
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
    </div>
  );
};

export default HomePage;
