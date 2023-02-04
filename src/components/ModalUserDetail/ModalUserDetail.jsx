import { Modal } from '@mui/material';
import React from 'react';

export const ModalUserDetail = ({ isVisible, setIsVisible, userDetail }) => {
  const { name } = userDetail;

  return (
    <Modal open={isVisible} onClose={setIsVisible}>
      <h1>{name}</h1>
    </Modal>
  );
};
