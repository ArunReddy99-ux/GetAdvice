import { useEffect, useState } from "react";

export default function App() {
  const [Advice, setAdvice] = useState("");
  const [count, setcount] = useState(0);
  async function getAdvice() {
    const ans = await fetch("https://api.adviceslip.com/advice");
    const res = await ans.json();
    setAdvice(res.slip.advice);
    setcount((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{Advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}
function Message(props) {
  return (
    <p>
      You have <strong>{props.count}</strong> pieces of Advice
    </p>
  );
}
