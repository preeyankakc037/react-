// const Job =({title,description,location,salary,companyName}) => {

//     return(
//         <div>
//         <p>Title is {title}</p>
//         <p>description is {description}</p>
//         <p>location is {location}</p>
//         <p>salary is {salary}</p>
//         <p>companyName is {companyName}</p>


//         </div>
    
//     );

// };
// export default Job;

import React from 'react'
import { useParams } from 'react-router-dom'

const Job = () => {
    let params= useParams();
    console.log(params);
    console.log(params.id);
  return (
    <div>
      Job
    </div>
  )
}

export default Job
