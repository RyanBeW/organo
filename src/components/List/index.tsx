import "./index.css"
interface ListProps {
  label: string
  value: string
  typing: (value: string) => void
  itens: string[]
}

export function List({itens,label,typing,value}: ListProps) {
  return(
    <div className="list">
      <label htmlFor="">{label}</label>
      <select required name="" id="" value={value} onChange={e => typing(e.target.value)}>
          <option value=""></option>
          {itens.map(item => {
            return <option key={item}>{item}</option>
          } )}
      </select>
    </div>
  )
}