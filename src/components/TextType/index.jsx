
import "./index.css"
export function TextType(props) {
  const typing = (e) => {
    props.typing(e.target.value)
  }
  return (
    <div className="text-camp" >
      <label htmlFor="">{props.label}</label>
      <input value={props.value} onChange={typing}type="text" required placeholder={`Type your ${props.label.toLowerCase()} `}/>
    </div>
  )
}