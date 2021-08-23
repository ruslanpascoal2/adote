import styled from 'styled-components';

export const NavbarAction = styled.button`
  background: ${props => props.primary ? "#10B981" : "#F59E0B"};
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
  padding: .75rem 1rem;
  min-width: 120px;
  border-radius: 1rem;
  cursor: pointer;
  transition: all .3s;
  &:hover{
    background: ${props => props.primary ? "#059669" : "#D97706"};
  }
`
