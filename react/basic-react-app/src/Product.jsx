import "./Product.css"
import Price from './Price';
 

function Product({title, idx}){



   let oldPrice = ["12,495","11,900","15,99","599"];
   let newPrice =["8,999","9,199","899","278"];
   let description = [["8,000 DPI","wireless"], ["intutive surface","designed for iPad Pro"],["designed for iPad Pro","8,000 DPI"],["wireless","optical orientation"]];
  return (
    <div className="Product">
     <h4>{title}</h4>
      <p>{description[idx][0]} </p> 
      <p>{description[idx][1]} </p> 
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
      
    </div>
  )
} 
export default Product;