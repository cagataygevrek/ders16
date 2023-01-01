import React from "react";
import useListeCek from "./useListeCek";
import { toplama } from "./utilities";

function App() {
  const [veri, veriGuncelle] = useListeCek(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <>
      <ol>
        {veri &&
          veri.map((is) => {
            return <li key={is.id}>{is.title}</li>;
          })}
      </ol>
      {toplama(1, 6)}
    </>
  );
}

export default App;
