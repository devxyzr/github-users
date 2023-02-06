import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { GithubUsersContext } from '../../commons';
import { ModalUserDetail, SearchNav } from '../../components';
import { UserCard } from '../../components/UserCard';

export const HomePage = () => {
  const { githubUsers, isVisibleDetail, setIsVisible, githubUserDetail } =
    useContext(GithubUsersContext);

  return (
    <Box
      sx={{
        margin: 5,
      }}
    >
      <SearchNav />
      <Grid
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'space-around',
        }}
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {githubUsers.length > 0 ? (
          githubUsers.map((user, i) => {
            return <UserCard user={user} key={i} />;
          })
        ) : (
          <div
            style={{
              margin: 10,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h3
              style={{
                textAlign: 'center',
                fontFamily: 'poppins',
                fontSize: '20px',
                fontWeight: '500',
              }}
            >
              COME ON!! SEARCH USER...
            </h3>
            <img src={require('../../resources/githubgif.gif')} alt="Octocat" />
          </div>
        )}
      </Grid>
      <ModalUserDetail
        isVisible={isVisibleDetail}
        setIsVisible={() => setIsVisible(!isVisibleDetail)}
        userDetail={githubUserDetail}
      />
    </Box>
  );
};
