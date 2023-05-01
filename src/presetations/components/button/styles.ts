import styled from 'styled-components'
import theme from '@/styles/theme'

type SearchButtonProps = {
  isLoading: boolean
}

export const Button = styled.button<SearchButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.125rem;
  width: 6.625rem;
  border: 0;
  outline: none;
  cursor: ${({ isLoading }) => isLoading ? 'not-allowed' : 'pointer'};;
  background: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.buttonText};
  border-radius: 10px;
  transition: filter 0.2s ease-in;
  margin-right: 0.625rem;
  &:hover {
    filter: brightness(0.9)
  }
  @media screen and (max-width: ${theme.screens.md}){
    font-size: 0.75rem;
  }
  @media screen and (max-width: ${theme.screens.sm}){
    width: 5.25rem;
    height: 2.875rem;
  }
`
