import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;

  #blobLogo {
    margin-left: 2rem;

    cursor: grab !important;
  }

  #blobLogo:active {
    cursor: grabbing !important;
  }

  #userImg {
    margin-right: 2rem;
    border-radius: 50%;
    border: 1.5px solid #fff;
  }
`;

export const Image = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 1.2rem;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    transform: scale(1.2) translateY(-10px);
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 5rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #202024;
  z-index: 1;
`;
