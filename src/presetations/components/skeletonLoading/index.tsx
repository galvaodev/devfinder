import React from 'react'
import * as S from './styles'

export interface SkeletonLoadingProps {
  width?: string
  height?: string
  borderRadius?: string
  mt?: string
  mr?: string
  ml?: string
  mb?: string
  margin?: string
}

const SkeletonLoading: React.FC<SkeletonLoadingProps> = ({
  width,
  height,
  borderRadius,
  mt,
  ml,
  mr,
  mb,
  margin
}) => {
  return (
    <S.Skeleton
      width={width}
      height={height}
      borderRadius={borderRadius}
      mt={mt}
      mr={mr}
      ml={ml}
      mb={mb}
      margin={margin}
    />
  )
}

export default SkeletonLoading
