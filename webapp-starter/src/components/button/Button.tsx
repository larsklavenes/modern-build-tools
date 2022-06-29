import MuiButton, { ButtonProps } from '@mui/material/Button'

export type { ButtonProps } from '@mui/material/Button'

export const Button = <C extends React.ElementType>({
  children,
  to,
  variant = 'contained',
  color = 'primary',
  ...props
}: ButtonProps<C, { component?: C }>): JSX.Element => (
  <MuiButton
    {...props}
    variant={variant}
    color={color}
    role={to && 'link'}
    to={to}
    disableElevation
    disableRipple
  >
    {children}
  </MuiButton>
)

export default Button
