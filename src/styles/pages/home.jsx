import styled from "styled-components";
import Background from '../../assets/background.png'

export const BackgroundHome = styled.div`
  background: url(${Background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height:41.6vw;  /* responsive height */
  justify-content: center;

  .parent {
    padding-left: 10%;
    padding-top: 2%;
    padding-right: 10%;
    align-items: center;
    text-align: left;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
  button>svg {
    margin-left: 10px;
}
`
