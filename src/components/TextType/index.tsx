
import "./index.css"
interface TextTypeProps {
  typing: (value: string) => void
  label: string
  value: string
}
export function TextType({value,label,typing}: TextTypeProps) {
  const typed = (e:React.ChangeEvent<HTMLInputElement>) => {
    typing(e.target.value)
  }
  return (
    <div className="text-camp" >
      <label htmlFor="">{label}</label>
      <input 
        value={value}
        onChange={typed}
        type="text" 
        required 
        placeholder={`Type your ${label.toLowerCase()} `}
        />
    </div>
  )
}