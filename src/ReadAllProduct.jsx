import React from 'react';

const ReadAllProduct = () => {
  let products = [
    { id: 1, name: "Laptop", price: 100000, color: "black" },
    { id: 2, name: "Mobile", price: 50000, color: "black" },
    { id: 3, name: "Watch", price: 8000, color: "grey" },
    { id: 4, name: "Tablet", price: 50000, color: "silver" },
  ];

// For showing all the values 
/*   return (
    <div className='card-container'>
      {products.map((value, i) => (
        <div className="card" key={i}>
          <p>name - {value.name}</p>
          <p>price - NRs.{value.price}</p>
          <p>color - {value.color}</p>
        </div>
      ))}
    </div>
  );
}; */


 return (
    <div>
      <div className="card-container">
        {
          products
            .filter((value) => value.color === "black")
            .map((value, i) => (
              <div key={i} className="card">
                <p>name - {value.name}</p>
                <p>price - NRs.{value.price}</p>
                <p>color - {value.color}</p>
              </div>
            ))
        }
      </div>
    </div>
  );
};




export default ReadAllProduct;
