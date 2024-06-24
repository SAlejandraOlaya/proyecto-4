
import styled from 'styled-components';

export const CardContainer = styled.div`
   width: 70%;
   max-width: 1200px;
   margin: 35px auto;
   display: grid;
   justify-content: center;
   justify-items: center;
   gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
    @media (min-width: 786px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1279px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;


export const CardImage = styled.img`
  width: 100%; /* Ancho del 100% del contenedor */
  height: 200px; /* Altura fija de 200px */
  object-fit: contain; /* Mantiene la proporciÃ³n de la imagen y rellena el contenedor */
  border-radius: 5px;
`;
