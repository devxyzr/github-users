import React from 'react';
import { CardMedia, Grid } from '@mui/material';

export const UserTitle = ({ props }) => {
  const { avatar_url } = props;

  return (
    <Grid
      elevation={3}
      item
      xs={3}
      sx={{
        padding: '0px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CardMedia
        component="img"
        alt="GitHub User"
        image={avatar_url}
        sx={{
          border: 'medium, dashed, green',
          borderRadius: '50%',
        }}
      />
    </Grid>
  );
};
