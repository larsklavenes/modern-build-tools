import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Story, Meta } from '@storybook/react'

import SkipLink, { SkipLinkProps } from 'src/components/navigation/SkipLink'

export default {
  title: 'Navigation/SkipLink',
  component: SkipLink,
} as Meta

const Template: Story<SkipLinkProps> = args => (
  <div>
    <SkipLink {...args} />
    <Box
      component="nav"
      display="flex"
      justifyContent="space-between"
      bgcolor="background.dark"
      color="text.contrast"
      mb={3}
      p={3}
    >
      <a href="#link1">Link</a>
      <a href="#link2">Link</a>
      <a href="#link3">Link</a>
    </Box>
    <div id="content">
      <Typography variant="h1">Main content to skip to</Typography>
      <a href="#link4">Link in the main content</a>
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  href: '#content',
  children: 'Skip to main content',
}
