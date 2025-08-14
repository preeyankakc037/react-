const TernaryOperator =() =>{
    let age=20;
    let isMarried=false
    let age1=56
    let gender="she"

    return <div>{age>=18 ? <p>He can vote </p>: <p> He can't vote </p>}
         {isMarried ===true? <p>Person is Married</p>: <p>The person is not married</p>}
         { age1>=0&&age1<=16? <p> Child</p>: age1>=17&&age1<=60? <p>adult</p>:<p>old</p>}
         {gender==="he"? <p>male</p>: gender==="she"? <p>female</p>:<p>other</p>}
    </div>
    
    
};
export default TernaryOperator;

/* 
age 0 to 16 (child)
    17 to 60 (adult)
    greater than 60 old  */

/* 
gender 
     male => "he"
     female=> "She"
     else  => "They "
     */