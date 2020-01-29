import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: 1px solid var(--darkRed);
  border-radius: 0.5rem;
  color: var(--darkRed);
  font-size: 1.3rem;
  cursor: pointer;
  &:hover {
    background: var(--darkRed);
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
