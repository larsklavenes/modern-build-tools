import Typography, { TypographyProps } from '@mui/material/Typography'
import { Story, Meta } from '@storybook/react'

export default {
  title: 'Typography/Typography',
  component: Typography,
} as Meta

const Template: Story<TypographyProps> = args => <Typography {...args} />

export const H1 = Template.bind({})
H1.args = {
  variant: 'h1',
  children: 'Header 1',
}

export const H2 = Template.bind({})
H2.args = {
  variant: 'h2',
  children: 'Header 2',
}

export const H3 = Template.bind({})
H3.args = {
  variant: 'h3',
  children: 'Header 3',
}

export const H4 = Template.bind({})
H4.args = {
  variant: 'h4',
  children: 'Header 4',
}

export const H5 = Template.bind({})
H5.args = {
  variant: 'h5',
  children: 'Header 5',
}

export const H6 = Template.bind({})
H6.args = {
  variant: 'h6',
  children: 'Header 6',
}

export const Subtitle1 = Template.bind({})
Subtitle1.args = {
  variant: 'subtitle1',
  children: 'Subtitle 1',
}

export const Subtitle2 = Template.bind({})
Subtitle2.args = {
  variant: 'subtitle2',
  children: 'Subtitle 2',
}

export const Body1 = Template.bind({})
Body1.args = {
  variant: 'body1',
  children: 'Body 1',
}

export const Body2 = Template.bind({})
Body2.args = {
  variant: 'body2',
  children: 'Body 2',
}

export const Caption = Template.bind({})
Caption.args = {
  variant: 'caption',
  children: 'Caption',
}
