import { Story, Meta } from '@storybook/react'

import ButtonLoader, {
  ButtonLoaderProps,
} from 'src/components/button/ButtonLoader'

export default {
  title: 'Buttons/ButtonLoader',
  component: ButtonLoader,
} as Meta

const Template: Story<ButtonLoaderProps> = args => <ButtonLoader {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  variant: 'contained',
  children: 'Default state',
}

export const Loading = Template.bind({})
Loading.args = {
  color: 'primary',
  variant: 'contained',
  loading: true,
  children: 'Loading state',
}
