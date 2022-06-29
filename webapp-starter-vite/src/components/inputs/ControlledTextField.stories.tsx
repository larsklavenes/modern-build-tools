import { Story, Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'

import ControlledTextField, {
  ControlledTextFieldProps,
} from 'src/components/inputs/ControlledTextField'

export default {
  title: 'Inputs/ControlledTexField',
  component: ControlledTextField,
} as Meta

const Template: Story<ControlledTextFieldProps> = args => {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data: Record<string, unknown>) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledTextField {...args} control={control} />
    </form>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  name: 'textfield',
}
