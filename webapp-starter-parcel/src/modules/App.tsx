import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import SkipLink from 'src/components/navigation/SkipLink'
import Footer from 'src/modules/_core/Footer'
import Navigation from 'src/modules/_core/Navigation'

const Form = lazy(() => import('src/modules/form'))
const Users = lazy(() => import('src/modules/users'))

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing(4)};
  flex: 1;
`

const App: React.FC = () => (
  <Router>
    <SkipLink href="#main-pass">Skip to main content</SkipLink>
    <Layout>
      <Navigation />
      <Main id="main-pass">
        {/* 
          Route-based code splitting - can be replaced for your own approach, but some code splitting is highly recommended 
          Learn more: https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
        */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Suspense>
      </Main>
      <Footer />
    </Layout>
  </Router>
)

export default App
