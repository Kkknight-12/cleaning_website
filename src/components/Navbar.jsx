import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { Link, Stack } from '@mui/material';
import { navigationLink } from '../constants/index.js';

function NavbarComponent() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Stack
            direction='row'
            spacing={4}
            alignItems='center'
            justifyContent='space-between'
            className='w-full'
          >
            <img src='./logo.jpeg' height='32' width='32' />

            <Stack
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
              direction='row'
              spacing={1}
              className='gap-2 self-center '
            >
              {navigationLink.map((page) => (
                <React.Fragment key={page.id}>
                  <Link
                    className='!text-white hover:no-underline'
                    href={page.href}
                  >
                    <p className='text-xs md:text-base lg:text-base'>
                      {page.title}
                    </p>
                  </Link>
                </React.Fragment>
              ))}
            </Stack>

            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {navigationLink.map((page) => (
                  <MenuItem
                    key={page.id}
                    onClick={handleCloseNavMenu}
                    className='!py-0'
                  >
                    <Link
                      className='text-base text-blue-500 !no-underline'
                      href={page.href}
                    >
                      {page.title}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarComponent;
