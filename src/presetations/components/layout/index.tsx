
import React, { ReactNode } from 'react'
import * as S from './styles'

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.LayoutContainer>
      <main>
        {children}
      </main>
    </S.LayoutContainer>
  )
}

export default Layout
