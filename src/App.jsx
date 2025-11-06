
import { Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import SolutionsPage from './pages/SolutionsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

export default function App({ colorMode, mode }){
  return (
    <Box>
      <Navbar onToggleTheme={colorMode.toggle} mode={mode} />
      <Container maxWidth="lg" sx={{ pb: 10 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  )
}
