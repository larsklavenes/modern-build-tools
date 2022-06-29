import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from 'src/components/button/Button'

export default {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A basic button used as a baseline for all other buttons',
      },
    },
  },
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  variant: 'contained',
  children: 'Button primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  variant: 'contained',
  children: 'Button secondary',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'A large button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  children: 'Small button',
}
