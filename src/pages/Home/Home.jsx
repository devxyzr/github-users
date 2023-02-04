import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';

import React, { useContext } from 'react';
import { GithubUsersContext } from '../../commons';
import { ModalUserDetail, SearchNav } from '../../components';
import { UserCard } from '../../components/UserCard';

export const HomePage = () => {
  const { githubUsers, isVisibleDetail, setIsVisible, githubUserDetail } =
    useContext(GithubUsersContext);

  console.log({ isVisibleDetail, githubUserDetail });

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
        {githubUsers.length > 0 &&
          githubUsers.map((user, i) => {
            return <UserCard user={user} key={i} />;
          })}
      </Grid>
      <ModalUserDetail
        isVisible={isVisibleDetail}
        setIsVisible={() => setIsVisible(!isVisibleDetail)}
        userDetail={githubUserDetail}
      />
    </Box>
  );
};
