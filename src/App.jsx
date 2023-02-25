import { useState } from "react"
import { Banner } from "./components/Banner"
import { Footer } from "./components/Footer"
import { Form } from "./components/Form"
import { Team } from "./components/Team"
import { TextType } from "./components/TextType"
import "./index.css"

function App() {
  const [ workers, setWorkers] = useState([])
  const newWorkerAdd = (worker) => {
    console.log(worker)
    setWorkers([...workers,worker])
  }
  const teams = [
    {
      name: "Development",
      Fcolor: "#57C278",
      Scolor: "#D9F7E9",
    },
    {
      name: "Front-End",
      Fcolor: "#82CFFA",
      Scolor: "#E8F8FF",
    },
    {
      name: "Data Sience",
      Fcolor: "#A6D157",
      Scolor: "#F0F8E2",
    },
    {
      name: "Design",
      Fcolor: "#E06B69",
      Scolor: "#FDE7E8",
    },
    {
      name: "Mobile",
      Fcolor: "#FEBA05",
      Scolor: "#FFF5D9",
    },
  ]
  return (
    <div className="App">
      <Banner/>
      <Form teams={teams.map(team => team.name)}workerCadastred={ worker => newWorkerAdd(worker)}/>
      {
        teams.map(team => 
        <Team 
          key={team.name}
          title={team.name}
          Fcolor={team.Fcolor}
          Scolor={team.Scolor}
          workers={workers.filter(worker => worker.team === team.name)}
        />)
      }
      <Footer/>
    </div>
  )
}

export default App
