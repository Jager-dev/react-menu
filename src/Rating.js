import './index.css'

const Rating = (props) => {
  return (
    <div>
      <i className={`fas fa-star ${props.rating > 0 && "rating-star"}`}></i>
      <i className={`fas fa-star ${props.rating > 1 && "rating-star"}`}></i>
      <i className={`fas fa-star ${props.rating > 2 && "rating-star"}`}></i>
      <i className={`fas fa-star ${props.rating > 3 && "rating-star"}`}></i>
      <i className={`fas fa-star ${props.rating > 4 && "rating-star"}`}></i>
    </div>
  )
}
export default Rating