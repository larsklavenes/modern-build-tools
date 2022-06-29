import { yupResolver } from '@hookform/resolvers/yup'
import Grid from '@mui/material/Grid'
import { useForm, FieldValues } from 'react-hook-form'
import styled from 'styled-components'

import LoaderButton from 'src/components/button/ButtonLoader'
import FormCheckbox from 'src/components/inputs/ControlledCheckbox'
import FormTextField from 'src/components/inputs/ControlledTextField'
import { loginValidation } from 'src/utils/validation'

const StyledForm = styled.form`
  margin: auto;
  max-width: 400px;
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing(2)};
  box-shadow: 0px 5px 18px -2px rgba(0, 0, 0, 0.2);
`

const GridCheckbox = styled(Grid)`
  display: flex;
  justify-content: center;
`

const StyledLoaderButton = styled(LoaderButton)`
  margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)};
`

const CatalogueForm: React.FC = () => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FieldValues>({
    mode: 'onBlur',
    resolver: yupResolver(loginValidation),
    // Note: When loading defaultValues asynchronously please refer to: https://github.com/react-hook-form/react-hook-form/issues/1150
    defaultValues: { email: '', password: '', rememberMe: false },
  })

  const onSubmit = handleSubmit(values => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(values)
        reset()

        resolve(true)
      }, 1000)
    })
  })

  return (
    <StyledForm onSubmit={onSubmit}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <FormTextField
            fullWidth
            name="email"
            type="email"
            label="Email"
            errors={errors}
            control={control}
          />
        </Grid>
        <Grid item xs={12}>
          <FormTextField
            fullWidth
            type="password"
            name="password"
            label="Password"
            errors={errors}
            control={control}
          />
        </Grid>
        <GridCheckbox item xs={12}>
          <FormCheckbox
            name="rememberMe"
            label="Remember Me"
            control={control}
            checkboxOptions={{ color: 'primary' }}
          />
        </GridCheckbox>
      </Grid>
      <Grid item xs={12}>
        <StyledLoaderButton
          fullWidth
          type="submit"
          color="primary"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </StyledLoaderButton>
      </Grid>
    </StyledForm>
  )
}

export default CatalogueForm
