const Events = () => {
let message="EVENTS"
const handleClick=()=>{
    alert("bonjour kerem")
}
const handleChange=()=>{
    message="STATE"
}
  return (
    <div>
        <h1>{message}</h1>

        <button onClick={handleClick}>click</button>
        <button onClick={()=>alert("deneme")}>Save</button>
        <button onClick={handleChange}>Change</button>
   
    </div>
  )
}

export default Events 