import css from "./index.module.scss";

export const Overlay = ({ onClick }) => {
  return <div className={css.overlay} onClick={() => onClick(false)}></div>;
};
