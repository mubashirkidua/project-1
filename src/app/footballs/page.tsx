import React from 'react'

const Footballs = () => {

  const productData = [

{ id: 1, name: 'Nike', price: 3000, description: 'Pure shining Leather and colorfull football', image: '/Nike-Style.jpeg'},
{ id: 2, name: 'Alpha', price: 2000, description: 'Pure shining Leather and colorfull football', image: '/Alpha-Style.jpeg'},
{ id: 3, name: 'Asian', price: 2500, description: 'Pure shining Leather and colorfull football', image: '/Asian-Style.jpeg'},
{ id: 4, name: 'Modern', price: 3500, description: 'Pure shining Leather and colorfull football', image: '/Modern-Style.jpeg'},
{ id: 5, name: 'Omega', price: 4000, description: 'Pure shining Leather and colorfull football', image: '/Omega-Style.jpeg'},
{ id: 6, name: 'Standard', price: 5000, description: 'Pure shining Leather and colorfull football', image: '/Standard-Style.jpeg'},

  ]
  return (
    <div>
      <div className='footballs'>
        {productData.map((football) => (
          <div key={football.id} className='football-card'>
            <img src={football.image} alt={football.name} />
            <h3>{football.name}</h3>
            <p>{football.description}</p>
            <div className='price'>${football.price}</div>
            <button>Add to Cart</button>

          </div>
        ))

        }
      </div>
      
    </div>
  )
}

export default Footballs
