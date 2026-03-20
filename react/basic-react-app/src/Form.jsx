function formHandler(event){
  event.preventDefault();
  console.log("form submitted");
}






export default function Form(){

  return(
    <form>
      <input type="text" placeholder="write something" />
      <button onClick={formHandler}>Submit</button>
    </form>
  )
}