import styled from "styled-components";
import theme from "../../theme";

export const Card = styled.div`
  display: flex;
  padding: 2em;
  border-radius: 20px;
  background: white;
  box-shadow: ${(prop) =>
    prop.color ? theme.boxShadow[prop.color].boxShadow : "#eee"};

  @media (max-width: 890px) {
    padding: 1em 0;
  }
  @media (max-width: 670px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Colum1 = styled.div`
  flex: 2;
  padding: 1em;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 20px;
  box-shadow: 17px 17px 34px #d9d9d9, -17px -17px 34px #ffffff;
`;
export const Colum2 = styled.div`
  flex: 1;
  padding: 1em;
  flex-direction: column;
  align-content: space-between;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 2em;
  line-height: 1em;
  color: #161a1d;
`;

export const Description = styled.p`
  color: #495057;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
