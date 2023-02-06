import React, { Fragment } from 'react';
import { Typography, Stack } from '@mui/material';

export const PrincipalInformation = ({ props }) => {
  const { name, login, created_at } = props;
  return (
    <Fragment>
      <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
        {name !== null ? (
          <Typography fontFamily="poppins" fontWeight={700} variant="h4">
            {name}
          </Typography>
        ) : (
          <Typography fontFamily="poppins" fontWeight={700} variant="h4">
            Not Available
          </Typography>
        )}
        <Typography
          sx={{
            background: '#1A2027',
            color: 'white',
            padding: '10px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: '5px',
          }}
          fontFamily="poppins"
          fontWeight={400}
          variant="subtitle2"
        >
          {' '}
          SINCE: {new Date(created_at).toLocaleDateString('en-us')}
        </Typography>
      </Stack>
      <Typography
        fontFamily="poppins"
        fontWeight={500}
        variant="caption"
        sx={{ fontSize: '15px', paddingTop: '10px' }}
      >{`@${login}`}</Typography>
    </Fragment>
  );
};
