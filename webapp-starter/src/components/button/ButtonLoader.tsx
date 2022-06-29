import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'

import Button, { ButtonProps } from 'src/components/button/Button'

export interface ButtonLoaderProps extends ButtonProps {
  loading: boolean
}

const ButtonLoader = <C extends React.ElementType>({
  size,
  loading,
  children,
  ...props
}: ButtonProps<C, { component?: C }>) => (
  <Button {...props} size={size} disabled={loading}>
    {loading ? (
      <CircularProgress size={size === 'large' ? 20 : 15} color="inherit" />
    ) : (
      children
    )}
  </Button>
)

export default React.memo(ButtonLoader)
