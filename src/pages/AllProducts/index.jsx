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
    <div className={css.parent}>
      <div className={css.sidebar}>
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
