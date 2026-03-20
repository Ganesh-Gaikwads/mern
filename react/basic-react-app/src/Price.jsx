 
  function Price({oldPrice, newPrice}) {
    let oldStyles= {
      textDecorationLine:"line-through"
    };
    let newstyle ={
      fontWeight:"bold",
    };

    let styles={
      backgroundColor:"#e0c367",
      height :"30px",
      borderBottomLeftRadius:"14px",
      borderBottomRightRadius:"14px"
    }

  return (
    <div style={styles}>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp; &nbsp; &nbsp;
      <span style={newstyle}>{newPrice}</span>
      
    </div>
  );
  
 }

 export default Price;

 