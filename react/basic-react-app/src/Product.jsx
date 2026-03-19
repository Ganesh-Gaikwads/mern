import "./Product.css"

function Product({title, price , features, features2}){
   
 
  return (
    <div className="Product">
      <h3>{title}</h3>
      <h5>{price}</h5>
      <p>{features.join(",")}</p>
       <p>{features2.c}</p>
    </div>
  )
}

export default Product;