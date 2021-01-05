import uniqid from 'uniqid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', contacts => {
  return {
    payload: {
      ...contacts,
      id: uniqid(),
    },
  };
});

export const deleteContact = createAction('contacts/delete');
