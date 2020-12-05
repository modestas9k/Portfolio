import styled from "styled-components";
import mainBg from "../../assets/mainBg.jpg";
import theme from "../../theme";

export const Hero = styled.div`
  height: 100vh;
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 1em;
  position: relative;
  color: white;
  //margin-top: -80px;
  //z-index: -1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
`;
export const H1 = styled.h1`
  font-size: 5em;
  margin-bottom: 0;
`;
export const HI = styled.h1`
  font-size: 20em;
  margin: 0;
  font-family: serif;
`;
export const H2 = styled.h2`
  font-size: 3em;
  font-weight: 300;
  text-transform: uppercase;
  color: ${theme.colors.black};
`;

export const P = styled.p`
  letter-spacing: 2px;
`;
export const Strong = styled.strong`
  font-weight: 600;
`;

export const PhotoLink = styled.div`
  position: absolute;
  bottom: 0;
  right: 1em;
`;
export const CardHolder = styled.div`
  margin: 4em auto;
`;
