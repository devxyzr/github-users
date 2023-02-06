import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import { Grid, Stack, Typography } from '@mui/material';

export const LocationInformation = ({ props }) => {
  const { location, twitter_username, blog, company } = props;

  console.log({
    location,
    twitter_username,
    blog,
    company,
  });

  const NotAvailable = () => (
    <Typography fontFamily="poppins" fontWeight={700} fontSize="15px">
      Not Available
    </Typography>
  );

  return (
    <Grid container spacing={2} sx={{ marginTop: '15px' }}>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LocationOnIcon />
          {location !== null ? (
            <Typography fontFamily="poppins" fontWeight={700} fontSize="15px">
              {location}
            </Typography>
          ) : (
            <NotAvailable />
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <TwitterIcon />
          {twitter_username !== null ? (
            <Typography fontFamily="poppins" fontWeight={700} fontSize="15px">
              {twitter_username}
            </Typography>
          ) : (
            <NotAvailable />
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <LanguageIcon />
          {blog !== null && blog ? (
            <a target="_blank" href={blog}>
              <Typography fontFamily="poppins" fontWeight={700} fontSize="15px">
                {blog}
              </Typography>
            </a>
          ) : (
            <NotAvailable />
          )}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction="row" spacing={2}>
          <BusinessIcon />
          {company !== null ? (
            <Typography fontFamily="poppins" fontWeight={700} fontSize="15px">
              {company}
            </Typography>
          ) : (
            <NotAvailable />
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};
