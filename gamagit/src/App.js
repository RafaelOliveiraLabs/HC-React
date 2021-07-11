import React from "react";

function App(props) {
  return (
    <>
      <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário" />
      <h1>{props.title}</h1>
    </>
  );
}

export default App;
