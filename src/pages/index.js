import { useState } from "react";
import InputComponent, { SelectInput } from "../components/input";

export default function Home() {

  const initialState = {
    value: "",
    description: "",
    amount: "",
    stay: "",
    price: "",
    type: "",
    tdf: "",
    tdt: "",
    vdf: "",
    vdt: ""
  };
  const [state, setState] = useState(initialState);
  const [im, setMi] = useState([]);
  const [count, setCount] = useState(0);


  function onChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }


  function resetState() {
    setState({
      ...state,
      value: "",
      description: "",
      amount: "",
      stay: "",
      price: "",
      type: "",
      tdf: "",
      tdt: "",
      vdf: "",
      vdt: ""
    });
  }



  function onSubmit(e) {
    setCount(prev => prev + 1);
    e.preventDefault();
    const obj = {
      value: state.value,
      description: state.description,
      amount: state.amount,
      stay: state.stay,
      price: state.price,
      type: state.type,
      Markup: state.Markup,
      Mt: state.Mt,
      tdf: state.tdf,
      tdt: state.tdt,
      vdf: state.vdf,
      vdt: state.vdt,
      intid: count
    };
    setMi(result => [...result, obj]);
    resetState();
  }

  console.log(im);

  function Change(e, v) {
    let c = im.filter((item, idx) => item.intid === v);
    let y = c.map((item) => {
      item[e.target.name] = e.target.value;
      return item;
    });
    const ui = im.map(obj => y.find(item => item.intid === obj.intid) || obj);
    setMi([...ui]);

  }


  return (
    <div className="wrapper" >
      <div className="header" >
        <h3>Regional taxes</h3>
      </div>
      <div className="content" >
        <div className="center">
          <p>Not more than 6 rows</p>
        </div>
        {im.map((item, idx) => {
          return (
            <form key={idx} style={{ display: "flex", flexDirection: "row", padding: "5px" }}  >
              <div style={{ display: "flex", flexDirection: "column" }} >
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <p style={{ width: "80px" }} >value</p>
                  <InputComponent placeholder="value" name={'value'} value={item.value} onChange={(e) => Change(e, item.intid)} />
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
                  <p style={{ width: "80px" }} >description</p>
                  <InputComponent placeholder="description" name={'description'} value={item.description} onChange={(e) => Change(e, item.intid)} />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }} >
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
                  <p style={{ width: "80px" }} >$or$</p>
                  <SelectInput
                    value={item.amount}
                    data={[
                      { value: "200" }
                    ]}
                    name='amount'
                    onChange={(e) => Change(e, item.intid)}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
                  <p style={{ width: "80px" }}>Stay/night</p>
                  <SelectInput
                    value={item.stay}
                    data={[
                      { value: "Night" },
                      { value: "Stay" }
                    ]}
                    name='stay'
                    onChange={(e) => Change(e, item.intid)}
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }} >
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
                  <p style={{ width: "80px" }}>Price</p>
                  <SelectInput
                    name='type'
                    onChange={(e) => Change(e, item.intid)}
                    value={item.type}
                    data={[
                      { value: "gross" },
                      { value: "net" }
                    ]} />
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
                  <p style={{ width: "80px" }}>Sell/cost</p>
                  <SelectInput
                    name='price'
                    value={item.price}
                    onChange={(e) => Change(e, item.intid)}
                    data={[
                      { value: "selling" },
                      { value: "cost" }
                    ]} />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <p style={{ width: "80px" }}>travel from</p>
                    <InputComponent name={'tdf'} type="date" value={item.tdf} onChange={(e) => Change(e, item.intid)} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <p style={{ width: "40px", paddingLeft: '10px' }}>to</p>
                    <InputComponent name={'tdt'} type="date" value={item.tdt} onChange={(e) => Change(e, item.intid)} />
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <p style={{ width: "80px" }}>valid from</p>
                    <InputComponent name={'vdf'} type="date" value={item.vdf} onChange={(e) => Change(e, item.intid)} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <p style={{ width: "40px", paddingLeft: '10px' }} >to</p>
                    <InputComponent name={'vdt'} type="date" value={item.vdt} onChange={(e) => Change(e, item.intid)} />
                  </div>
                </div>
              </div>
            </form>
          );
        })}
        <form id="yu" style={{ display: "flex", flexDirection: "row", padding: "5px" }} >
          <div style={{ display: "flex", flexDirection: "column" }} >
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <p style={{ width: "80px" }} >value</p>
              <InputComponent placeholder="value" name={'value'} value={state.value} onChange={onChange} />
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
              <p style={{ width: "80px" }} >description</p>
              <InputComponent placeholder="description" name={'description'} value={state.description} onChange={onChange} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }} >
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
              <p style={{ width: "80px" }} >$or$</p>
              <SelectInput
                value={state.amount}
                data={[
                  { value: "200" }
                ]}
                name='amount'
                onChange={onChange}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
              <p style={{ width: "80px" }}>Stay/night</p>
              <SelectInput
                value={state.stay}
                data={[
                  { value: "Night" },
                  { value: "Stay" }
                ]}
                name='stay'
                onChange={onChange}
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }} >
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
              <p style={{ width: "80px" }}>Price</p>
              <SelectInput
                name='type'
                onChange={onChange}
                value={state.type}
                data={[
                  { value: "gross" },
                  { value: "net" }
                ]} />
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
              <p style={{ width: "80px" }}>Sell/cost</p>
              <SelectInput
                name='price'
                value={state.price}
                onChange={onChange}
                data={[
                  { value: "selling" },
                  { value: "cost" }
                ]} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <p style={{ width: "80px" }}>travel from</p>
                <InputComponent name={'tdf'} type="date" value={state.tdf} onChange={onChange} />
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <p style={{ width: "40px", paddingLeft: '10px' }}>to</p>
                <InputComponent name={'tdt'} type="date" value={state.tdt} onChange={onChange} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <p style={{ width: "80px" }}>valid from</p>
                <InputComponent name={'vdf'} type="date" value={state.vdf} onChange={onChange} />
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <p style={{ width: "40px", paddingLeft: '10px' }}>to</p>
                <InputComponent name={'vdt'} type="date" value={state.vdt} onChange={onChange} />
              </div>
            </div>
          </div>
        </form>
        <div className="ty" >
          <button className="button" onClick={onSubmit} >create</button>
        </div>
      </div>
    </div>
  );
}