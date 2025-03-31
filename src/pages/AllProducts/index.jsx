import { useState, useEffect } from "react";
import { products } from "../../../lib/products.js";
import { TABLE_HEAD_ELEMENTS } from "../../../lib/tableHeadElements.js";

import { TableHeadElement } from "../../components/TableHeadElement/index.jsx";
import { Overlay } from "../../components/Overlay/index.jsx";
import { Sidebar } from "../../components/Sidebar/index.jsx";

import css from "./index.module.scss";

export const AllProducts = () => {
  const [categories, setCategory] = useState({});
  const [activeCategory, setActiveCategory] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const formattedCategories = Object.keys(products).reduce((acc, key) => {
      acc[key] = products[key].image;
      return acc;
    }, {});
    setCategory(formattedCategories);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className={css.page}>
      {isSidebarOpen && <Overlay onClick={() => setIsSidebarOpen(false)} />}

      <Sidebar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryClick={setActiveCategory}
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
      />

      <table>
        <thead>
          <tr>
            {TABLE_HEAD_ELEMENTS.map((elem, index) => (
              <TableHeadElement key={index} elem={elem} />
            ))}
          </tr>
        </thead>
        <tbody>
          {/*{products.map((item) => (*/}
          {/*    <TableBodyElement el={item}/>*/}
          {/*))}*/}
        </tbody>
      </table>
    </div>
  );
};
