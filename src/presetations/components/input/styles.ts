import styled from 'styled-components'
import theme from '@/styles/theme'

export const WrapperInput = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  width: 100%;
  svg {
    color: ${({ theme }) => theme.colors.primary}
  }
  @media screen and (max-width: ${theme.screens.sm}){
    margin-left: 1rem;
  }
`

export const InputStyled = styled.input`
  background: transparent;
  font-size: 1.125rem;
  margin-left: 1.5rem;
  width: 100%;
  padding-right: 1.5rem;
  outline: none;
  color: ${({ theme }) => theme.colors.text};
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
  @media screen and (max-width: ${theme.screens.md}){
    font-size: 0.875rem;
  }
  @media screen and (max-width: ${theme.screens.sm}){
    font-size: 0.75rem;
    margin-left: 0.5rem;
  }
`

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red100};
  font-weight: 700;
  margin-left: auto;
  font-size: 0.875rem;
  margin-right: 1.5rem;
  white-space: nowrap;
  @media screen and (max-width: ${theme.screens.md}){
    font-size: 0.75rem;
  }
`
