import NavbarComponent from './components/Navbar.jsx'
import PropTypes from 'prop-types'
import { Footer } from './components/Footer.jsx'
import Container from '@mui/material/Container'

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout