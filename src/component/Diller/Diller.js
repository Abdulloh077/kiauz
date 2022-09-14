import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Link } from 'react-router-dom'
import './Diller.css'
const Diller = () => {
  return (
    <div>
     <Navbar/>
<div>
<Link to="/">Bosh Sahifa</Link>   
     <Link to="">Dillerlar</Link>
</div>
<h1>Toshkent shahridagi Kia rasmiy dilerlari</h1>
   
  <div className="roy1">
  <div className='roy'>
        <h5 className='yl'>Kia Yakkasaroy</h5>
        <p className='pl'>Bizning manzil: Яккасарайский район, Кичик  <br /> халка йули 70а уй. Ish grafigi: du. - yak.: 9:00 <br /> - 20:00  Telefon: +998 97 192 88 88</p>
        <p className='pl'>+998971928888</p>
      </div>
      <div className='roy'>
        <h5>Kia Sergeli</h5>
        <p className='pl'>Bizning manzil: Sergeli tumani, A. Navoiy <br /> mavzesi, Toshkent halqa avtomobil yo'li. Mo'ljal: <br /> Drivers Village avtomobil saloni qarshisida. Ish <br /> grafigi: du. - yak.: 9:00 - 20:00 <br /> Telefon: +998 55 503-05-55</p>
        <p className='pl'>+998555030555</p>
      </div>
  </div>
     </div>
  
  )
}

export default Diller