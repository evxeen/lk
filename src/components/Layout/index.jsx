import { Outlet } from 'react-router-dom'
import css from './index.module.scss'
import searchIcon from '../../assets/icons/search.svg'

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>LOGO</div>
        <div className={css.searchWrapper}>
          <img src={searchIcon} alt="Поиск" className={css.searchIcon} />
          <input type="text" placeholder="Поиск..." className={css.searchInput} />
        </div>
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  )
}
