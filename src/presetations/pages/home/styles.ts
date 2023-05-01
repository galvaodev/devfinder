import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  height: 4.312rem;
  background: ${({ theme }) => theme.colors.body};
  margin-top: 2.25rem;
`
