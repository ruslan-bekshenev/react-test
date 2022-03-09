import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState<any>(null)
  const [toggle, setToggle] = useState<any>(false)
  const [value, setValue] = useState<string>("")

  const handleClick = () => setToggle((prev: boolean) => !prev)

  useEffect(() => {
    setTimeout(() => {
      setData([])
    }, 100)
  }, [])
  return (
    <div>
      <h1 data-testid="value-elem">{value}</h1>
      {toggle && <div data-testid="toggle-elem">toggle</div>}
      {data && <div style={{ color: "red" }}>data</div>}
      <h1>Hello world!</h1>
      <button data-testid="toggle-btn" onClick={handleClick}>click me</button>
      <input type="text" placeholder="input value" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default App;
