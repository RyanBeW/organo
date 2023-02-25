import "./index.css"
export function Card({name,position,imageAdress,backgroundColor }) {
  return(
    <div className="card-container">
      <div className="card-head" style={backgroundColor={backgroundColor}}>
            <img src={imageAdress} alt="" />
      </div>
      <div className="card-body">
        <h4>{name}</h4>
        <h3>{position}</h3>
      </div>
    </div>
  )
}