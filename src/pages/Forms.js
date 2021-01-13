import React from "react";
import { Button } from "../components/Button/Button";
import { Formik,Form,Field } from 'formik';
const Forms = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const onBlurCep = (e,setFieldValue) => {
    const { value } = e.target;
    const cep = value?.replace(/[^0-9]/g,'')
    if (cep?.length !== 8) {
      return;
    }
    fetch(`/https://viacep.com.br/ws/${cep}json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue('logradouro', data.logradouro);
        setFieldValue('bairro', data.bairro);
        setFieldValue('cidade', data.localidade);
      });
  };
  return (
    <Formik>{({setFieldValue}) => (

        <div>
        <Form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Crie um Usuário</h1>
          </div>
          <div>
            <label htmlFor="name">Nome</label>
            <Field
              type="text"
              name="name"
              placeholder="Insira seu Nome"
              required
            ></Field>
          </div>
          <div>
            <label htmlFor="cpf">CPF</label>
            <Field
              type="text"
              name="cpf"
              placeholder="Digite seu cpf"
              required
            ></Field>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              name="email"
              placeholder="Escreva seu Email"
              required
            ></Field>
          </div>
          <div>
            <h4>Endereço</h4>
          </div>
          <div>
            <label htmlFor="cep">CEP</label>
            <Field
              type="text"
              name="cep"
              placeholder="Digite seu cep"
              required
              onBlur={(e) => onBlurCep(e, setFieldValue)} 
            ></Field>
          </div>
          <div>
            <label htmlFor="bairro">Bairro</label>
            <Field type="text" name="bairro" required></Field>
          </div>
          <div>
            <label htmlFor="cidade">Cidade</label>
            <Field type="text" name="cidade" required></Field>
          </div>
          <div>
            <label htmlFor="logradouro">Rua</label>
            <Field type="text" name="logradouro" required></Field>
          </div>
          <div>
            <label htmlFor="numero">Número</label>
            <Field type="text" name="numero" required></Field>
          </div>
          <div>
            <label />
            <Button type="submit">Cadastrar Usuário</Button>
          </div>
        </Form>
      </div>
      )}
    </Formik>
)};
;

export default Forms;
