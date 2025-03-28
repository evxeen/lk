import css from './index.module.scss'
import { menuElements } from '../../../lib/menuElements.js'
import { MainMenuElement } from '../../components/MainMenuElement'

export const MainPage = () => {
  return (
    <div className={css.content}>
      {menuElements.map((el) => (
        <MainMenuElement key={el.name} menuData={el} />
      ))}
    </div>
  )
}
