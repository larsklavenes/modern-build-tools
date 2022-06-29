import Checkbox, { CheckboxProps } from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import React from 'react'
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'

export interface ControlledCheckboxProps {
  name: FieldPath<FieldValues>
  label: string
  control: Control<FieldValues>
  defaultValue?: boolean
  checkboxOptions?: CheckboxProps
}

const ControlledCheckbox: React.FC<ControlledCheckboxProps> = ({
  name,
  label,
  control,
  checkboxOptions,
  defaultValue = false,
}) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field }) => (
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            {...field}
            {...checkboxOptions}
            onChange={e => field.onChange(e.target.checked)}
          />
        }
      />
    )}
  />
)

export default React.memo(ControlledCheckbox)
