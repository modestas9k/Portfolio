import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  max-width: 960px;
  margin: 0 auto;
  color: white;
  background: rgba(255, 255, 255, 0);
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1em;
`;
export const Logo = styled.img`
  max-height: 40px;
  max-width: 100%;
`;

export const Actions = styled.nav``;

export const StyledLink = styled(Link)`
  font-size: 1em;
  color: #eee;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-right: 25px;
  }
`;
