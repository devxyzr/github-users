import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Button, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useGetGithubUserDetail } from '../../hooks';
import React from 'react';

export const UserCard = ({ user }) => {
  const { login, avatar_url } = user;

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '50%',
    width: 70,
    height: 70,
  });

  const { query } = useGetGithubUserDetail({ nick: login });
  return (
    <Grid item xs={4} sm={2} md={2}>
      <Paper
        sx={{
          p: 2,
          flexGrow: 1,
          display: 'flex',
          margin: 'auto',
          borderRadius: '15px',
          flexDirection: 'column',
          backgroundColor: '#1A2027',
        }}
        elevation={2}
      >
        <Grid
          container
          spacing={2}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item>
            <Img alt="complex" src={avatar_url} />
          </Grid>

          <Grid item>
            <Typography
              variant="h5"
              component="div"
              fontFamily="poppins"
              fontWeight={700}
              fontSize="15px"
              color="#FFFFFF"
            >
              {login}
            </Typography>
          </Grid>
        </Grid>
        <Divider
          variant="middle"
          sx={{ backgroundColor: 'white', margin: 1 }}
        />
        <Grid
          container
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            fontSize="10px"
            sx={{
              backgroundColor: '#FFFFFF',
              borderColor: '#FFFFFF',
              border: '1px solid',
            }}
            onClick={query}
          >
            See Details
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};
