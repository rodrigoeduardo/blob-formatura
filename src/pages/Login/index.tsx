import React from 'react';

import loginImg from '../../assets/login-img.svg';
import suapLogo from '../../assets/suap-logo.svg';
import userImg from '../../assets/user.svg'; // eslint-disable-next-line
import padlockImg from '../../assets/padlock.svg';

import { Wrapper, LoginBox } from './styles';

const Login: React.FC = () => {
  const handleSubmit = () => {
    // enviar matricula e senha
  };
  return (
      <Wrapper>
        <img src={loginImg} alt="Login Image" />
        <LoginBox>
          <img src={suapLogo} alt="Logo do Suap" />

          <form method="POST">
            <div>
              <img src={userImg} alt="Matrícula" />
              <input
                type="text"
                name="matricula"
                id="matriculaInput"
                placeholder="Matrícula"
                required
              />
            </div>
            <div>
              <img src={padlockImg} alt="Matrícula" />
              <input
                type="password"
                name="password"
                id="passwordInput"
                placeholder="Senha"
                required
              />
            </div>
            <button type="button" onClick={handleSubmit}>
              Entrar
            </button>
          </form>
        </LoginBox>
      </Wrapper>
  );
};

export default Login;
