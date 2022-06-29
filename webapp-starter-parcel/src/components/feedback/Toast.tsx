import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CloseIcon from '@mui/icons-material/Close'
import InfoIcon from '@mui/icons-material/Info'
import WarningIcon from '@mui/icons-material/Warning'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import SnackbarContent from '@mui/material/SnackbarContent'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import styled, { css, StyledProps } from 'styled-components'

export enum ToastTypeEnum {
  INFO = 'info',
  ERROR = 'error',
  SUCCESS = 'success',
}

export interface ToastProps {
  message: string
  duration?: number
  variant: ToastTypeEnum
}

export interface ToastTypeProps {
  $toastType: ToastTypeEnum
}

const DEFAULT_AUTOHIDE_DURATION = 3000

const ToastBar = styled(Snackbar)`
  padding: 8px;
  width: 1280px;
  max-width: 95%;
`

// Filter out custom props so they aren't passed into the DOM
const ToastContent = styled(SnackbarContent)(
  ({ theme, $toastType }: StyledProps<ToastTypeProps>) => css`
    width: 100%;
    min-height: 60px;
    padding: ${theme.spacing(1, 4)};
    background-color: ${theme.palette.toast[$toastType]};
  `
)

// Filter out custom props so they aren't passed into the DOM
const StyledButton = styled(Button)(
  ({ theme, $toastType }: StyledProps<ToastTypeProps>) => css`
    background-color: ${theme.palette.toast[$toastType]};
  `
)

const StyledTypography = styled(Typography)`
  margin-left: 8px;
`

const CloseButtonIcon = styled(CloseIcon)`
  font-size: ${({ theme }) => theme.typography.pxToRem(20)};
`

const MessageContainer = styled.span`
  display: flex;
  align-items: center;
`

/**
 * Toast manually triggers and displays messages
 */
const Toast: React.FC<ToastProps> = ({ message, variant, duration }) => {
  const [isOpen, setisOpen] = useState(false)

  const openToast = () => setisOpen(true)

  const closeToast = () => setisOpen(false)

  const getIcon = (variant: ToastTypeEnum) => {
    switch (variant) {
      case ToastTypeEnum.ERROR:
        return <WarningIcon />
      case ToastTypeEnum.SUCCESS:
        return <CheckCircleIcon />
      default:
        return <InfoIcon />
    }
  }

  return (
    <>
      <StyledButton
        variant="contained"
        $toastType={variant}
        onClick={openToast}
      >
        {variant} Toast
      </StyledButton>
      <ToastBar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={isOpen}
        onClose={closeToast}
        autoHideDuration={duration || DEFAULT_AUTOHIDE_DURATION}
      >
        <ToastContent
          $toastType={variant}
          message={
            <MessageContainer>
              {getIcon(variant)}
              <StyledTypography variant="body1">{message}</StyledTypography>
            </MessageContainer>
          }
          action={
            <IconButton
              key="close"
              color="inherit"
              aria-label="Close"
              onClick={closeToast}
              size="large"
            >
              <CloseButtonIcon />
            </IconButton>
          }
        />
      </ToastBar>
    </>
  )
}

export default React.memo(Toast)
