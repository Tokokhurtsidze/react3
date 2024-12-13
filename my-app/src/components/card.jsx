const Card =({name,description,image,action})=>{
  return ( 
  <div className="card">


      <h1>{name}</h1>
      <p>{description} {name}</p>
      
      <div className="imgbox">
      <img src={image} alt={name} />
      </div>
      
      <button onClick={()=>action(name)}>click</button>
     

    </div>
  )
}

export default Card