import { useState } from "react";
import { Product } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CircleIcon from "@mui/icons-material/Circle";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  handleApplyFilter: (items: Product[]) => void;
  handleFilterVisibility: () => void;
}
const FilterForm = (props: Props) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);

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

  function applyFilters(e: { preventDefault: () => void }): Product[] {
    e.preventDefault();
    let filteredProducts = [...items];

    if (selectedCategories) {
      filteredProducts = filterProductsByCategories(selectedCategories);
    }

    if (selectedColor) {
      filteredProducts = filterProductsByTag(selectedColor);
    }
    return filteredProducts;
  }

  function handleClearFilter() {
    setSelectedCategories([]);
    setSelectedColor([]);
  }

  return (
    <div className="filter-container">
      <div className={"filter"}>
        <button onClick={props.handleFilterVisibility}>
          <CloseIcon></CloseIcon>
        </button>
        <div className="filter-options">
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
            <div className="buttons">
              <button
                onClick={(e) => {
                  props.handleApplyFilter(applyFilters(e));
                }}
              >
                Apply filter
              </button>
              <button type="submit" onClick={handleClearFilter}>
                Clear filter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
