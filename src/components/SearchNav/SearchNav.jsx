import React, { useContext } from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { GithubUsersContext } from '../../commons';
import { useGetGithubUser } from '../../hooks';

export const SearchNav = () => {
  const { setSearchParam, searchParam } = useContext(GithubUsersContext);

  const { query } = useGetGithubUser();

  return (
    <Stack
      direction="row"
      sx={{
        // width: '400px',
        display: 'flex',
        marginBottom: '40px',
        justifyContent: 'center',
      }}
    >
      <TextField
        id="outlined-basic"
        label="GitHub User"
        placeholder="Octocat"
        variant="outlined"
        size="small"
        // fullWidth
        sx={{
          width: '50%',
        }}
        value={searchParam}
        onChange={(event) => {
          const value = event.target.value.trim();
          setSearchParam(value);
        }}
      />
      <IconButton
        size="small"
        sx={{
          left: '-45px',
        }}
        onClick={query}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};
