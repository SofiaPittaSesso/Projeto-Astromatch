import React, { useState } from 'react'
import InicialPage from './pages/InicialPage/InicialPage'
import MatchPage from './pages/MatchPage/MatchPage'
import { DisplayContainer, AppContainer, HeaderContainer } from './styled'
import match from './images/match.png'
import profiles from './images/profiles.png'

function App() {

  const [page, setPage] = useState("inicial")

  const switchToInicial = () => {
    setPage("inicial")
  }

  const switchToMatch = () => {
    setPage("match")
  }

  const switchPage = () => {
    switch (page) {
      case "inicial":
        return <InicialPage />
      case "match":
        return <MatchPage />
      default:
        return <InicialPage />
    }
  }

  return (
    <DisplayContainer>
      <AppContainer>
        <HeaderContainer>
          <button onClick={switchToInicial}><img src={profiles} alt='Icone da pagina de perfis' /></button>
          <span><h3>Astro</h3><h3 id='yellow-text'>Match</h3></span>
          <button onClick={switchToMatch}><img src={match} alt='Icone da pagina de matches' /></button>
        </HeaderContainer>
        {switchPage()}
      </AppContainer>
    </DisplayContainer>
  )
}

export default App