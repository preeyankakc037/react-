import React from 'react'

const ReadAllUsers = () => {

    let users =[
        {id:1, name:"Smriti",address:"Kathmandu"},
        {id:2, name:"Sajan",address:"Pokhara"},
        {id:3, name:"Hari",address:"Kathmandu"},
        {id:4, name:"Utsa",address:"Bajang"},

    ]

/*   return (
    
    <div className="card-container">
        {users.map((value, i) => (
        <div className="card" key={i}>
          <p>name - {value.name}</p>
          <p>address-{value.address}</p>
          
        </div>
      ))}
    </div>
  );
};
 */
 return (
    <div>
      <div className="card-container">
        {
          users
            .filter((value) => value.address === "Kathmandu")
            .map((value, i) => (
              <div key={i} className="card">
                <p>name - {value.name}</p>
                <p>Address - {value.address}</p>
              </div>
            ))
        }
      </div>
    </div>
  );
};
   

export default ReadAllUsers
