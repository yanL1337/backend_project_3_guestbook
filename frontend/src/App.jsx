import { useEffect, useState } from "react";
import FormComp from "./components/FormComp";
import ChatComp from "./components/ChatComp";

function App() {
  const [err, setErr] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [userData, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [refresh]);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
      <FormComp err={err} setErr={setErr} setRefresh={setRefresh} />
      <ChatComp data={userData} />
    </div>
  );
}

export default App;
