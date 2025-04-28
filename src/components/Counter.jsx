import { useState} from "react";

function Counter() {
  const [contador, setContador] = useState(0);
  return (
    <div className="counter">
      <h1> contador = {contador}</h1>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        Incrementar
      </button>
      <button
        onClick={() => {
          setContador(contador - 1);
        }}
      >
        Decrementar
      </button>
      <button onClick={()=>{
        setContador(contador * 10)
      }}>
        X 10
      </button>
      <button onClick={()=>{
        setContador(contador / 10)
      }}>
        / 10
      </button>
      <button onClick={()=>{
        setContador(0)
      }}>
        Reset
      </button>
    </div>
  );
}
export default Counter;
