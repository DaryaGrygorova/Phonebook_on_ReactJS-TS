import { Box, LinearProgress, Typography } from '@mui/material';
import { Outlet } from 'react-router';
import { Suspense, useEffect } from 'react';

import ContactForm from 'components/ContactForm';

import Filter from 'components/Filter';
import FromAuthor from 'components/FromAuthor';

import useAuth from 'hooks/useAuth';
import { useAppDispatch } from 'hooks/hooksConfig';
import { fetchContacts } from 'redux/contacts/contactsOperations';

import {
  StyledSideBar,
  StyledSidebarThumb,
  StyledContentWrap,
} from './ContactsPage.styled';

const ContactsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLogIn } = useAuth();

  useEffect(() => {
    if (isLogIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLogIn]);

  return (
    <Box display="flex">
      <StyledSideBar as="aside">
        <StyledSidebarThumb>
          <Typography component="h1" variant="h5" my={0}>
            My PhoneBook
          </Typography>

          <ContactForm />
          <Filter />
          <FromAuthor />
        </StyledSidebarThumb>
      </StyledSideBar>

      <StyledContentWrap>
        <Suspense fallback={<LinearProgress color="secondary" />}>
          <Outlet />
        </Suspense>
      </StyledContentWrap>
    </Box>
  );
};

export default ContactsPage;
