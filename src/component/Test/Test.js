import React from 'react'
import { Link } from 'react-router-dom'
import './Test.css'
import data from '../Massiv'
const Test = () => {
  return (
    <div>
  <div className='lin'>
       <Link to="/">Bosh Sahifa</Link> 
         <Link to="">Test drive</Link>
        
       </div>
       <h1>Test drivega yozilish</h1>
       <div className="container">
<h2>Orta va Biznes classlar</h2>
<div className="row">
    {data.slice(0, 1).map((el) => {
return(
    <div className="col-lg-3 col-md-6 col-sm-12">
    <div className="cartt">
<img src={el.image} class="card-img-top" alt="" />
  <div class="card-body">
    <h4>{el.name}</h4>
 
<Link to={`/${el._id}`}>  <button type="button" class="btn btn-outline-secondary">Testga yozlish</button></Link>
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
    {data.slice(4, 8).map((el) => {
return(
    <div className="col-lg-3 col-md-6 col-sm-12">
    <div className="cartt">
<img src={el.image} class="card-img-top" alt="" />
  <div class="card-body">
    <h4>{el.name}</h4>
<Link to={`/${el._id}`}>  <button type="button" class="btn btn-outline-secondary">Testga yozlish</button></Link>
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

export default Test