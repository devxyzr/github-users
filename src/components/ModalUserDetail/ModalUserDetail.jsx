import React, { Fragment } from 'react';
import { Grid, Modal } from '@mui/material';
import { Container } from '@mui/system';
import { Description } from '../Description';
import { LocationInformation } from '../LocationInformation';
import { PaperInformation } from '../PaperInformation/PaperInformation';
import { PrincipalInformation } from '../PrincipalInformation/PrincipalInformation';
import { UserTitle } from '../UserTitle';

export const ModalUserDetail = ({ isVisible, setIsVisible, userDetail }) => {
  return (
    <Modal
      open={isVisible}
      onClose={setIsVisible}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        sx={{
          background: 'whitesmoke',
          width: '80vw',
          height: '500px',
          borderRadius: '16px',
          marginTop: '40px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2} sx={{ padding: '20px' }}>
          <UserTitle props={userDetail} />
          <Grid item xs={9}>
            <Grid direction="column" spacing={1} sx={{}}>
              <PrincipalInformation props={userDetail} />
              <Fragment>
                <Description props={userDetail} />
                <PaperInformation props={userDetail} />
                <LocationInformation props={userDetail} />
              </Fragment>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Modal>
  );
};
