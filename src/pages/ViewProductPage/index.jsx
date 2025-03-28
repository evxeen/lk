import { useParams } from 'react-router-dom'
import css from './index.module.scss'

export const ViewProductPage = () => {
  const { productName } = useParams()

  return (
    <div>
      <h1 className={css.title}>{data.product.name}</h1>
      <p className={css.description}>{data.product.groupName}</p>
      <div className={css.text}>{data.product.nNumber}</div>
      <div className={css.text}>{data.product.diameter}</div>
      <div className={css.text}>{data.product.length}</div>
      <div className={css.text}>{data.product.constructionMark}</div>
      <div className={css.text}>{data.product.coating}</div>
    </div>
  )
}
