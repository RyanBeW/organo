import { Card } from "../Card"
import "./index.css"
export function Team(props) {
  return(
     (props.workers.length > 0) ? <div className="team-container" style={{backgroundColor: props.Scolor}}>
      <h3 style={{borderColor: props.Fcolor}}>{props.title}</h3>
      <div className="workers">
        {props.workers.map(worker => <Card key={worker.name} backgroundColor={props.Fcolor}name={worker.name} position={worker.position} imageAdress={worker.imageAdress}/>)}

      </div>
    </div> : ""
  )
} 