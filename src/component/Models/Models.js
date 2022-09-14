import React from 'react'
import './Models.css'
import data from '../Massiv'
import { Link } from 'react-router-dom'
const Models = () => {
  return (
    <div>
<Link to="/">Bosh Sahifa</Link>      <Link to="">Modellar</Link>
<h1>Barcha Modellar</h1>

<div className="container">
<h2>Orta va Biznes classlar</h2>
<div className="row">
{data.slice(0, 3).map((el) => {
return(
  <div className='col-lg-4 col-md-6 colsm-12'>
    <div className="card">
<img src={el.image} class="card-img-top" alt="" />
  <div class="card-body">
    <h4>{el.name}</h4>
  <p>{el.price}</p>
<Link to={`/${el._id}`}>  <button type="button" class="btn btn-outline-secondary">Buyurtma qilish</button></Link>
  </div>
</div>
  </div>
)

})}
</div>
</div>
<div className="container">
    <h2>Krossover va Yoltanlamaslar</h2>
    <div className="row">
        {data.slice(3, 8).map((el) => {
          return(
            <div className='col-lg-4 col-md-6 col-sm-12'>
                 <div className="card">
<img src={el.image} class="card-img-top" alt="" />
  <div class="card-body">
    <h4>{el.name}</h4>
  <p>{el.price}</p>
<Link to={`/${el._id}`}>  <button type="button" class="btn btn-outline-secondary">Buyurtma qilish</button></Link>
  </div>
</div>
            </div>
          )
        })}
    </div>
</div>
    </div>
  )
}

export default Models