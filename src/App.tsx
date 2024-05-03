import Header from './components/cabecalho'
import Hero from './components/hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
