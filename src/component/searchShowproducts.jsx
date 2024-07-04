import React from 'react'

const searchShowproducts = ({filter}) => {
  console.log(filter)
  return (
    <div>
      {
        filter ? (
          <ul>
          {filter.map((item, index) => (
            <li className='h1' key={index}>
              <h1 className='text-2xl'> Name - {item.name}</h1>
              <h2 className='text-2xl'> Rs.- {item.price}</h2>
      
            </li>
          ))}
        </ul>
        ):(
          <p>no product</p>
        )
      }
    </div>
  )
}

export default searchShowproducts