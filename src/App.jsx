import Address from "./Address";
import College from "./College";
import Info from "./info";
import Job from "./job";
import Name from "./Name";
import Product from "./Product";
import ReadAllProduct from "./ReadAllProduct";
import ReadAllUsers from "./ReadAllUsers";


const App=() =>{
  return (<div>
  {/* <Name></Name>
  <Address></Address>
  <Info></Info> */}

  {/* <Product 
  name="Laptop" 
   color="Black"
   price={10000} 
   ></Product> */}

{/* <Job  
title="Senior Software Developer"
desciption="The job for software developer"
location="KTM"
salary={90000}
companyName="Cloudfare">
  
</Job> */}


{/* <College 
name="Sunway College"
location="Maitidevi"
contactNumber={94900942099}
establishedYear={2004}
courses="Year"
numberOFStudents={900}>
</College> */}

<ReadAllProduct></ReadAllProduct>
<ReadAllUsers></ReadAllUsers>
 </div>);
};

export default App;

/* 
Job 
   title 
   description
   location
   salary
   companyName 
   
   
  
  
College
  name
  location 
  contactNumber
  establishedYear 
  courses 
  numberOfStudents 
   */