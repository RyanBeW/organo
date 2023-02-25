import { ReactElement } from "react"
import "./index.css"

interface ButtonProps {
  children: string | ReactElement
}
export function Button({children}:ButtonProps){
  return(
    <button className="submit-button">{children}</button>
  )
}