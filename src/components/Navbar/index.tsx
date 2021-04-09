import React from 'react';

import { Wrapper, Image, Background } from './styles';

import homeSvg from '../../assets/home.svg';
import goalSvg from '../../assets/goal.svg';
import blobLogo from '../../assets/blob-logo.svg';

const Navbar: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Image id="blobLogo" src={blobLogo} alt="Blob logo" />

        <div>
          <Image src={homeSvg} alt="Home" />
          <Image src={goalSvg} alt="Objetivo" />
        </div>

        <Image id="userImg" src="https://github.com/vinicius5g.png" alt="Vinicius" />
      </Wrapper>
      <Background />
    </>
  );
};

export default Navbar;
