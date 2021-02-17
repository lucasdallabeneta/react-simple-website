import styled from 'styled-components';
import colors from '../../Colors';

export const ServicesContainer = styled.div`
  /* height: 800px; */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.light};

  @media screen and (max-height: 480px) {
    min-height: 150vh;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  /* max-width: 50vw; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
  padding: 0 10px;

  @media screen and (max-width: 1000px) {
    /* grid-template-columns: 1fr 1fr;  */
    grid-gap: 20px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr; 
    padding: 0 10px;
    grid-gap: 20px;
    margin-bottom: 64px;
  }
`;

export const ServicesCard = styled.div`
  background: ${colors.light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  max-height: 500px;
  padding: 20px;

  box-shadow: 0 1px 5px rgba(0,0,0,0.2);
  transition: all 0.5s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-top: 64px;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;