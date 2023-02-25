import "./index.css"
interface CardProps {
  name: string
  position: string 
  imageAdress:string
  cardColor:string
  email:string
  date:string
}
export function Card({name,position,imageAdress,cardColor,email,date }: CardProps) {
  return(
    <div className="card-container">
      <div className="card-head" style={{backgroundColor: cardColor}}>
            <img src={imageAdress} alt="" />
      </div>
      <div className="card-body">
        <h4>{name}</h4>
        <h3>{position}</h3>
        <h5>{email}</h5>
        <h5>{new Date(date).toLocaleDateString()}</h5>
      </div>
    </div>
  )
}