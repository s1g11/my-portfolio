import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyles } from './GlobalStyles.tsx'
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme.styled.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
)
