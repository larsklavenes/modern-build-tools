import { Story, Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'

import ControlledCheckbox, {
  ControlledCheckboxProps,
} from 'src/components/inputs/ControlledCheckbox'

export default {
  title: 'Inputs/ControlledCheckbox',
  component: ControlledCheckbox,
} as Meta

const Template: Story<ControlledCheckboxProps> = args => {
  const { control, handleSubmit } = useForm()

  const onSubmit = (data: Record<string, unknown>) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledCheckbox {...args} control={control} />
    </form>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  name: 'checkbox',
  label: 'checkbox label',
}
