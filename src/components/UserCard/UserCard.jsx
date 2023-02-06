import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Button, Divider } from '@mui/material';
import { useGetGithubUserDetail } from '../../hooks';

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
              fontSize="18px"
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
            sx={{
              marginTop: '10px',
              fontFamily: 'poppins',
              fontWeight: '700',
              fontSize: '15px',
              border: '1px solid',
              color: 'white',
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
