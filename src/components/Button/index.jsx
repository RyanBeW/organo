import "./index.css"

export function Button(props){
  return(
    <button className="submit-button">{props.children}</button>
  )
}