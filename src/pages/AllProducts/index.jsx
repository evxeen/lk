import { useState, useEffect } from "react";
import { products } from "../../../lib/products.js";

import { TableHeadElement } from "../../components/TableHeadElement/index.jsx";
import { menuElements } from "../../../lib/menuElements.js";
import { TableBodyElement } from "../../components/TableBodyElement/index.jsx";
import { Categories } from "../../components/Categories/index.js";

import css from "./index.module.scss";

export const AllProducts = () => {
  const [categories, setCategories] = useState({});
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSidebar, setActiveSidebar] = useState(false);

  useEffect(() => {
    const formattedCategories = Object.keys(products).reduce((acc, key) => {
      acc[key] = products[key].image;
      return acc;
    }, {});

    setCategories(formattedCategories);
  }, []);

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
  };

  const handleSidebarActive = (isActive) => {
    setActiveSidebar(isActive);
  };

  const tableHeadElements = [
    "Вид продукции",
    "Название",
    "Диаметр",
    "Длина",
    "Покрытие",
    "Толщина покрытия",
    "Класс прочности",
    "Шаг резьбы",
    "Длина резьбы",
    "Допуск резьбы",
    "Тип шлица",
    "Тип упаковки",
    "Конструкционное обозначение",
    "Заказ",
    "Заказано, кг",
    "Отгружено, кг",
    "Свободная продажа, кг",
  ];

  return (
    <div className={css.page}>
      {activeSidebar ? (
        <div
          className={css.overlay}
          onClick={() => handleSidebarActive(false)}
        ></div>
      ) : (
        ""
      )}
      <div className={css.sidebarContainer}>
        <div
          className={`${css.sidebar} ${activeSidebar ? css.sidebarActive : ""}`}
        >
          {Object.entries(categories).map(([category, image], index) => (
            <div
              onClick={() => handleCategoryClick(index)}
              className={`${css.categoryBlock} ${
                index === activeCategory ? css.active : ""
              }`}
              key={category}
            >
              <img src={image} alt={category} />
              {category}
            </div>
          ))}
        </div>
        <div
          className={css.buttonOpen}
          onClick={() => handleSidebarActive(!activeSidebar)}
        >
          Каталог
        </div>
      </div>

      <table>
        <thead>
          <tr>
            {tableHeadElements.map((elem, index) => (
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
