import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, Stack } from '@mui/material';
import { navigationLink } from '../constants/index.js';

function NavbarComponent() {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Stack
            direction='row'
            spacing={4}
            justifyContent='space-between'
            className='w-full'
          >
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='#app-bar-with-responsive-menu'
              className='mr-2 font-mono font-bold tracking-wider text-inherit no-underline'
            >
              LOGO
            </Typography>

            <Stack direction='row' spacing={1} className='gap-2 self-center '>
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
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavbarComponent;
