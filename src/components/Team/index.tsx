import { Card } from "../Card"
import "./index.css"
interface TeamProps {
  workers: Array<WorkerProps>
  Fcolor: string
  Scolor: string
  title:string
}
interface WorkerProps {
  name:string
  position:string
  imageAdress:string
}
export function Team({Fcolor,title,workers,Scolor}:TeamProps) {
  return(
     (workers.length > 0) ? <div className="team-container" style={{backgroundColor: Scolor}}>
      <h3 style={{borderColor: Fcolor}}>{title}</h3>
      <div className="workers">
        {workers.map((worker:WorkerProps) => <Card key={worker.name} cardColor={Fcolor}name={worker.name} position={worker.position} imageAdress={worker.imageAdress}/>)}

      </div>
    </div> : <></>
  )
} 