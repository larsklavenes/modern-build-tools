import TextField, {
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material/TextField'
import React from 'react'
import {
  Control,
  Controller,
  FieldErrors,
  FieldPath,
  FieldValues,
} from 'react-hook-form'
import styled, { css } from 'styled-components'

interface RequiredProps {
  name: FieldPath<FieldValues>
  control: Control<FieldValues>
  errors: FieldErrors
  defaultValue?: string
}

export type ControlledTextFieldProps = MuiTextFieldProps & RequiredProps

interface ErrorProps {
  $active: boolean
}

const StyledContainer = styled.div`
  position: relative;
`

const ErrorMessage = styled.span<ErrorProps>(
  ({ theme, $active }) => css`
    position: absolute;
    left: 0;
    bottom: ${$active ? -20 : -5}px;
    font-size: ${theme.typography.pxToRem(12)};
    color: ${theme.palette.error.main};
    opacity: ${$active ? 1 : 0};
    transition: all 0.3s ease-out;
  `
)

const ControlledTextField: React.FC<ControlledTextFieldProps> = ({
  name,
  errors,
  control,
  className,
  defaultValue = '',
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <StyledContainer className={className}>
          <TextField
            error={!!fieldState.error}
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            {...field}
            {...props}
          />
          <ErrorMessage $active={!!fieldState.error}>
            {fieldState.error?.message}
          </ErrorMessage>
        </StyledContainer>
      )}
    />
  )
}

export default React.memo(ControlledTextField)
