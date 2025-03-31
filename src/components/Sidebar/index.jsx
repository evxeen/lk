import css from "./index.module.scss";

export const Sidebar = ({
  categories,
  activeCategory,
  onCategoryClick,
  onToggle,
  isOpen,
}) => {
  return (
    <div className={css.sidebarContainer}>
      <div className={`${css.sidebar} ${isOpen ? css.sidebarActive : ""}`}>
        {Object.entries(categories).map(([category, image], index) => (
          <div
            onClick={() => onCategoryClick(index)}
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
      <div className={css.buttonOpen} onClick={() => onToggle(!isOpen)}>
        Каталог
      </div>
    </div>
  );
};
