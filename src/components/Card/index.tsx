import "./index.css"
interface CardProps {
  name: string
  position: string 
  imageAdress:string
  cardColor:string
}
export function Card({name,position,imageAdress,cardColor }: CardProps) {
  return(
    <div className="card-container">
      <div className="card-head" style={{backgroundColor: cardColor}}>
            <img src={imageAdress} alt="" />
      </div>
      <div className="card-body">
        <h4>{name}</h4>
        <h3>{position}</h3>
      </div>
    </div>
  )
}