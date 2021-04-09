import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  > img {
    width: 48rem;
    height: 44.6rem;

    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  height: 62rem;
  width: 45rem;
  min-width: 32rem;

  background-color: #202024;
  border-radius: 0.4rem;

  img:first-child {
    width: 17.9rem;
    height: 9.6rem;
  }

  form {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;

    div {
      display: flex;
      align-items: center;
      justify-content: start;

      width: 100%;
      height: 5rem;
      background: #121214;
      border: none;
      color: #ffffff;

      margin: 0.5rem 0;
      padding: 0.5rem;

      border-radius: 3px;

      img {
        width: 20px !important;
        height: 20px !important;
      }
      input {
        background: none;
        border: none;
        font-size: 16px;
        height: 100%;
        width: 100%;
        outline: none;
        color: #ffffff;
        margin-left: 0.5rem;
      }
    }
    button {
      width: 100%;
      height: 5rem;
      background: #04d361;

      border: none;
      color: #ffffff;
      font-size: 16px;
      font-weight: bold;

      margin: 2rem 0;

      border-radius: 3px;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
