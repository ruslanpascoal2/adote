import styled from 'styled-components';

export const NavbarAction = styled.button`
  background: ${props => props.primary ? "#10B981" : "#fff"};
  border: ${props => !props.primary ? "2px solid #10B981" : "none"};
  font-size: 1rem;
  font-weight: 500;
  color: ${props => !props.primary ? "#10B981" : "#fff"};;
  text-align: center;
  padding: .75rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all .3s;
  &:hover{
    background: ${props => props.primary ? "#059669" : "#fdfdfd"};
  }
`
