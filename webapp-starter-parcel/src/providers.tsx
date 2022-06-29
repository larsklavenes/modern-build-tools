import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { StylesProvider } from '@mui/styles'
import { Provider as ReduxProvider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import store from 'src/store'
import GlobalStyles from 'src/styles/GlobalStyles'
import theme from 'src/styles/theme'

const Providers: React.FC = ({ children }) => (
  <ReduxProvider store={store}>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <GlobalStyles />
          <CssBaseline />
          {children}
        </StylesProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  </ReduxProvider>
)

export default Providers
