import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
  width: 80%;
  margin: 0 auto;

  h1 {
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 10rem;
  }

  #homeMain {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FaturasContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

export const Faturas = styled.div`
  display: flex;
  background-color: #202024;
  color: #fff;

  justify-content: center;
  align-items: center;

  width: 60rem;
  height: 15rem;
  border-radius: 4px;

  padding: 2rem;

  transition: 0.2s;

  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }

  &:first-child {
    margin-bottom: 5rem;
  }

  div {
    display: flex;
    flex-direction: column;

    & h2 {
      font-weight: 500;
    }

    & p {
      font-weight: 400;
      color: #ffffff60;
    }
  }
`;
