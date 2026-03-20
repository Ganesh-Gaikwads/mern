function handleClick(event){
  console.log("hello");
  console.log(event);
}

function sayBye(){
  console.log("byebye");
}

function handleMouseover(){
  console.log("mouseOver even triggerd");
}


function handle(){
  console.log("double clicked");
}

export default function Button(){
  return(
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p onClick={sayBye} >this is me devil</p>
      
      <p onMouseOver={handleMouseover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat saepe a dolor quasi provident at voluptates nobis. Nisi distinctio iure, placeat modi facilis illo tenetur! Placeat vel animi dolorum temporibus.</p>
      <button onDoubleClick={handle}>double click</button>
    </div>
  )
}