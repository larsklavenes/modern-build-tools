import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { addParameters, addDecorator } from '@storybook/react'
import Box from '@mui/material/Box'
import Providers from '../src/providers'

// Optional, can be omitted if you don't want docs to be the default view mode
addParameters({ viewMode: 'docs' })

addDecorator((StoryFn, context) =>
  context ? (
    <Providers>  
      {/* transform 'scale(1)' ensures elements with position: fixed; are displayed correctly in Storybook */}
      <Box p={3} style={{ transform: 'scale(1)' }}><StoryFn {...context} /></Box>
    </Providers>
  ) : (
    <StoryFn {...context} />
  )
)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
