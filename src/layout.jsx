import NavbarComponent from './components/Navbar.jsx'
import PropTypes from 'prop-types'
import { Footer } from './components/Footer.jsx'
import Container from '@mui/material/Container'
import { Stack } from '@mui/material'

const Layout = ({ children }) => {
  return (
    <Stack className="gap-10">
      <NavbarComponent />
      <Container>{children}</Container>
      <Footer />
    </Stack>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout