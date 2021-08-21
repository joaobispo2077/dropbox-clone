import React from 'react';

import { Container, Navigation, DropboxIcon, Form } from './styles';

const FormMenu: React.FC = () => {
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxIcon />
          <span>Dropbox</span>
        </h1>
        <button className="action--close">✕</button>
      </Navigation>

      <Form>
        <b className="title">Registre-se</b>
        <span className="subtitle">Preencha o formulário abaixo</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Prosseguir</button>

        <span className="terms">
          Esta página está sujeita à Política de privacidade e aos Termos de
          serviço.
        </span>
      </Form>
    </Container>
  );
};

export default FormMenu;
