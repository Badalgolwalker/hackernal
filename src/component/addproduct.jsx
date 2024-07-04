import React, { useState } from 'react'
import Logout from './logout'
import Searchproduct from '../component/searchproduct'

const addproduct = () => {
  const [product, setProduct] = useState([])
const [name, setName] = useState('')
const [price, setPrice] = useState('')

const addproduct = (name,price) =>{
setProduct([...product,{name,price}])
}

const submithandler = (e) =>{
e.preventDefault()
addproduct(name,price)
setName("")
setPrice("")

}


  return (
    <div className='flex'>
<div>
  <h1 className='text-4xl font-semibold text-center '>create product</h1>
<form onSubmit={submithandler} >
  <input className='p-1 border-2 m-3 border-slate-500 rounded-md' type="text" placeholder='product name' value={name} onChange={(e) => setName(e.target.value)} />
  <input className='p-1 border-2 m-3 border-slate-500 rounded-md' type="text" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} />
  <input className='p-1 border-2 m-3 border-slate-500 rounded-md' type="submit" value="add product" />
</form>
<Logout/>

{product.length > 0 ? (
<ul>
        {product.map((item, index) => (
          <li className='h1' key={index}>
            <h1 className='text-2xl'> Name - {item.name}</h1>
            <h2 className='text-2xl'> Rs.- {item.price}</h2>
    
          </li>
        ))}
      </ul>

):(
 <h1 className='text-2xl m-4' >
  no product found
 </h1>
)
}


</div>

<div className='border-slate-500'>
<Searchproduct product = {product} />
</div>
    </div>
  )
}

export default addproduct