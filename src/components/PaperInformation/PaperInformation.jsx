import React from 'react';
import { Paper, Stack, Typography } from '@mui/material';

export const PaperInformation = ({ props }) => {
  const { public_repos, followers, following } = props;

  return (
    <Paper elevation={3}>
      <Stack
        spacing={3}
        direction="row"
        sx={{ justifyContent: 'space-evenly', margin: '20px', padding: '5px' }}
      >
        <Stack>
          <Typography fontFamily="poppins" fontWeight={500} variant="h6">
            Repositories
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
            }}
            fontFamily="poppins"
            fontWeight={700}
            variant="h5"
          >
            {public_repos}
          </Typography>
        </Stack>
        <Stack>
          <Typography fontFamily="poppins" fontWeight={500} variant="h6">
            Followers
          </Typography>
          <Typography
            fontFamily="poppins"
            fontWeight={700}
            variant="h5"
            sx={{
              textAlign: 'center',
            }}
          >
            {followers}
          </Typography>
        </Stack>
        <Stack>
          <Typography fontFamily="poppins" fontWeight={500} variant="h6">
            Following
          </Typography>
          <Typography
            fontFamily="poppins"
            fontWeight={700}
            variant="h5"
            sx={{
              textAlign: 'center',
            }}
          >
            {following}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};
