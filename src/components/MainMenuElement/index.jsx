import { Link } from 'react-router-dom'
import css from './index.module.scss'

export const MainMenuElement = ({ menuData }) => {
  return (
    <div className={css.container}>
      <Link className={css.linkBlock} to='/allProducts'>
        <div className={css.block} style={{ background: menuData.color }}>
          <img className={css.icon} src={menuData.path} alt="icon" />
        </div>
        <span className={css.text}>{menuData.name}</span>
      </Link>
    </div>
  )
}


