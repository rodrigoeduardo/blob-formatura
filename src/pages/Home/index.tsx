import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import { HomeContainer, FaturasContainer, Faturas } from './styles';

import homeImg from '../../assets/home-img.svg';

import Navbar from '../../components/Navbar/index';

const Home: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <h1>Olá, Vinicius.</h1>

        <div id="homeMain">
          <img src={homeImg} alt="" />

          <FaturasContainer>
            <Faturas>
              <div>
                <h2>Faturas pendentes</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque quam elit, sagittis eu libero quis, sagittis gravida
                  quam.
                </p>
              </div>
              <FiChevronRight size={60} color="#04D361" />
            </Faturas>

            <Faturas>
              <div>
                <h2>Faturas pagas</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque quam elit, sagittis eu libero quis, sagittis gravida
                  quam.
                </p>
              </div>
              <FiChevronRight size={60} color="#04D361" />
            </Faturas>
          </FaturasContainer>
        </div>
      </HomeContainer>

      <Navbar />
    </>
  );
};

export default Home;
