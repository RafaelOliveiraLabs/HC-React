import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const [usuario, setUsuario] = useState("");
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositories = response.data;
        const repositoriesName = [];

        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem("repositoriesName", JSON.stringify(repositoriesName));
        history.push("/Repositories");
      })
      .catch((err) => {
        setErro(true);
      });
  }

  return (
    <S.Container>
      <S.Content>
        <S.Input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}>
          Pesquisar
        </S.Button>
      </S.Content>

      {erro ? <S.ErrorMsg>Usuário não encontrado</S.ErrorMsg> : ""}
    </S.Container>
  );
}

export default Home;
