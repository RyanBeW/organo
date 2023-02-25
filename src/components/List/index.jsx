import "./index.css"
export function List(props) {
  return(
    <div className="list">
      <label htmlFor="">{props.label}</label>
      <select required name="" id="" value={props.value} onChange={e => props.typing(e.target.value)}>
          <option value=""></option>
          {props.itens.map(item => {
            return <option key={item}>{item}</option>
          } )}
      </select>
    </div>
  )
}