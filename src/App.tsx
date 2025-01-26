import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './utils/theme'
import Router from './Router'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

export default App