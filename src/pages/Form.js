import React from "react";
import { Button } from "../components/Button/Button";
const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const onBlurCep = (e) => {
    const { value } = e.target;
    if (value?.length !== 8) {
      return;
    }
    fetch(`https://viacep.com.br/ws/${value}json/`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Crie Um usuario</h1>
        </div>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Insira seu Nome"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            placeholder="Digite seu cpf"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Escreva seu Email"
            required
          ></input>
        </div>
        <div>
          <h4>Endereço</h4>
        </div>
        <div>
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            id="cep"
            placeholder="Digite seu cep"
            required
            onBlur={onBlurCep}
          ></input>
        </div>
        <div>
          <label htmlFor="logradouro">Logradouro</label>
          <input type="text" id="logradouro" required></input>
        </div>
        <div>
          <label htmlFor="numero">Número</label>
          <input type="text" id="numero" required></input>
        </div>
        <div>
          <label htmlFor="bairro">Bairro</label>
          <input type="text" id="bairro" required></input>
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <input type="text" id="cidade" required></input>
        </div>
        <div>
          <label />
          <Button type="submit">Cadastrar Usuário</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
