import styled from 'styled-components'
import theme from '@/styles/theme'

export const Button = styled.button`
  cursor: pointer;
  border: 0;
  color: ${theme.colors.buttonText};
  padding: 15px;
  font-size: 16px;
  border-radius: 5px;
  margin-top: 10px;
  width: 100%;
  background: ${theme.colors.primary};
`
