import { Box } from '@mui/system';
import React from 'react';
import { SearchNav } from '../../components';

export const HomePage = () => (
  <Box
    sx={{
      background: 'whitesmoke',
      width: '100%',
      height: '100vh',
      margin: '0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <SearchNav />
    <Box
      sx={{
        margin: '30px',
        background: 'Pink',
        borderRadius: '16px',
        width: '100vw',
        height: '100px',
      }}
    >
      <div> Hello</div>
    </Box>
  </Box>
);
