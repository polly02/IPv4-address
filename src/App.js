import axios from 'axios';
import { useEffect, useState } from 'react';
import style from "./App.module.css"

function App() {
  const [ip, setIp] = useState()

  async function getIp() {
    const ip = await axios.get("https://api.ipify.org/?format=json")
    setIp(ip.data.ip)
  }

  useEffect(() => {
    getIp()
  })

  return (
    <div className={style["wrapper"]}>
      <h1 >{ip}</h1>
      <p>{ip} ( This is your IP address...probably :P )</p>
    </div>
  );
}

export default App;
