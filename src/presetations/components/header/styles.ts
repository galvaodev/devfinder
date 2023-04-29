import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.red100};
  font-size: 1.625rem;
  font-weight: 700;
  @media screen and (max-width: ${({ theme }) => theme.screens.md}){
    font-size: 1.375rem;
  }
`
