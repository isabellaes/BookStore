import { useState } from "react";
import { Product } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import CircleIcon from "@mui/icons-material/Circle";
import {
  clearFilterdProducts,
  setFilterdProducts,
} from "../store/productSlice";

const FilterForm = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);

  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.product.products);

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

    dispatch(setFilterdProducts(filteredProducts));
  }
  function clearFilter(): void {
    setSelectedCategories([]);
    setSelectedColor([]);
    dispatch(clearFilterdProducts());
  }
  return (
    <div className="filter">
      <h1>Filter</h1>
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
    </div>
  );
};

export default FilterForm;
