const Product =({name,color,price}) => {

    return(
        <div>
           <p style={{backgroundColor: "green", color:"voilet"}}>name is {name}</p>
           <p>color is {color}</p>
           <p style={{ color:"red"}}>price is {price}</p>
           <div className="success">This is success</div> <br />
           <div className="warning">This is warning </div> <br />
           <div className="error">This is warning</div> <br />

        </div>
    
    );

};
export default Product;