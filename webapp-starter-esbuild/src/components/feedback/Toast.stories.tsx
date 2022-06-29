import { Story, Meta } from '@storybook/react'

import Toast, { ToastProps, ToastTypeEnum } from 'src/components/feedback/Toast'

export default {
  title: 'Feedback/Toast',
  component: Toast,
} as Meta

const Template: Story<ToastProps> = args => <Toast {...args} />

export const Info = Template.bind({})
Info.args = {
  variant: ToastTypeEnum.INFO,
  message: 'This is an info toast',
}

export const Error = Template.bind({})
Error.args = {
  variant: ToastTypeEnum.ERROR,
  message: 'Oh no, something went wrong',
}

export const Success = Template.bind({})
Success.args = {
  variant: ToastTypeEnum.SUCCESS,
  message: 'You did the thing!',
}

export const WithLongText = Template.bind({})
WithLongText.args = {
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque, erat et vestibulum porttitor, nisl tortor placerat enim, a iaculis sapien ex a ex. Cras lacinia nisl mattis, consequat lectus laoreet, blandit purus. Mauris sem ante, convallis ut dui non, dapibus euismod dui. In facilisis neque iaculis enim mollis, vitae maximus turpis malesuada. Pellentesque ac nulla dignissim, iaculis neque sit amet, cursus leo. Duis pellentesque mi quis nisi semper posuere. Phasellus lobortis lacus at mi tempus tempor. Nulla hendrerit justo eu dui facilisis, eget bibendum diam tristique. Morbi scelerisque ut enim eu tempor. Sed interdum mauris ligula, ut tempor risus mollis eget.',
}
