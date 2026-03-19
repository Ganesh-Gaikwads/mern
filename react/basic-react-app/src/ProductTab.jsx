import Product from "./Product";
function ProductTab(){

   let features = ["fast","Durable", "hi-tech"];
   const options = {a:"fast", b:"Durable", c:"hi-tech"};

  return (
    <>
    <Product title="Phone" price={30000}  features={features} features2={options} />
     <Product title="Laptop" price={45000} features={features} features2={options} />
     <Product title="headphone" price={1500} features={features} features2={options}/>
    </>
  )
}

export default ProductTab;