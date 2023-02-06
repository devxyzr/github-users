import React, { Fragment } from 'react';
import { Stack, Typography } from '@mui/material';

export const Description = ({ props }) => {
  const { bio } = props;
  return (
    <Fragment>
      <Stack sx={{ justifyContent: 'center', paddingTop: '10px' }}>
        {bio !== null ? (
          <Typography fontFamily="poppins" fontWeight={300} variant="body1">
            {bio}
          </Typography>
        ) : (
          <Typography variant="body1">Not Available</Typography>
        )}
      </Stack>
    </Fragment>
  );
};
