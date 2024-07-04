import React, { useState } from 'react'
import SearchShowproducts from './searchShowproducts'

const searchproduct = ({product}) => {
  const [Searchproduct, setSearchproduct] = useState("")

  const [filter, setfilter] = useState(product)

  const handleSearch = (e) =>{
setSearchproduct(e.target.value)
const filtered = product.filter(product => product.name.includes(e.target.value))
setfilter(filtered)
  }
  const submithandler = (e) =>{
e.preventDefault()
setSearchproduct("")
  }
  
  return (
    <div className=' min-h-screen h4 '>
      <h1 className='text-4xl font-semibold'>search product</h1>
<form onSubmit={submithandler}>
      <input className=' h2 p-1 border-2 m-3 border-slate-900 rounded-md' type="text" value={Searchproduct} onChange={handleSearch} placeholder='product name' />
      <input className='p-1 border-2 m-3 border-slate-500 rounded-md bg-blue-400' type="submit" />
</form>
<SearchShowproducts filter={filter} />
    </div>
  )
}

export default searchproduct