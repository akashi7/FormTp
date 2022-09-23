export default function InputComponent(props) {
  return (
    <input
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      hidden={props.hidden}
      type={props.type}
      checked={props.checked ? props.checked : null}
      className="input"
    />
  );
}

export function SelectInput(props) {
  return (
    <select
      hidden={props.hidden}
      onChange={props.onChange}
      name={props.name}
      value={props.value}
      className="input"
    >
      {!props.nolabel ? <option>select</option> : ""}
      {props.data.map((item, idx) => {
        return (
          <option key={idx} value={item.value} > {item.value} </option>
        );
      })}
    </select>
  );
}