import Address from "./Address";
import ButtonClick from "./ButtonClick";
import College from "./College";
import Info from "./info";
import Job from "./job";
import LearnUseState1 from "./LearnUseState/LearnUseState1";
import LearnUseState2 from "./LearnUseState/LearnUseState2";
import LearnUseState3 from "./LearnUseState/LearnUseState3";
import LearnUseState4 from "./LearnUseState/LearnUseState4";
import Name from "./Name";
import Product from "./Product";
import ReadAllProduct from "./ReadAllProduct";
import ReadAllUsers from "./ReadAllUsers";
import TernaryOperator from "./TernaryOperator";


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
<LearnUseState4></LearnUseState4>
<LearnUseState3></LearnUseState3>
<LearnUseState2></LearnUseState2>
<LearnUseState1></LearnUseState1>
<ButtonClick></ButtonClick>
<TernaryOperator></TernaryOperator>
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

  