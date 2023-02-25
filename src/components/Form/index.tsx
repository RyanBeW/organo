import { useState } from "react";
import { Button } from "../Button";
import { WorkerProps } from "../../App";
import { List } from "../List";
import { TextType } from "../TextType";
import "./index.css"
interface FormProps {
  workerCadastred: (worker: WorkerProps) => void;
  teams: string[]
}

export function Form(props:FormProps) {
  const [name,setName] = useState("")
  const [position,setPosition] = useState("")
  const [imageAdress, setImageAdress] = useState("")
  const [email, setEmail] = useState("")
  const [team,setTeam] = useState("")
  const [date,setDate] = useState("")
    const sendSubmit = (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      props.workerCadastred({
        name,
        position,
        imageAdress,
        email,
        date,
        team
      })
      setName("")
      setEmail("")
      setPosition("")
      setImageAdress("")
      setDate("")
    }
  return(
    <section className="form">
      <form action="" onSubmit={sendSubmit}>
        <h2>Input your data</h2>
        <TextType label="Name" value={name} typing={value => setName(value)}/>
        <TextType label="Position"value={position} typing={value => setPosition(value)}/>
        <TextType label="Image adress" value={imageAdress} typing={value => setImageAdress(value)}/>
        <TextType label= "Date" value={date} type="date"typing={value => setDate(value)} />
        <TextType label="Email adress" value={email} type="email" typing={value => setEmail(value)}/>
        <List label="Team" itens={props.teams} value={team} typing={value => setTeam(value)}/> 
        <Button>
          Create Card
        </Button>
        
      </form>
    </section>
  )
}