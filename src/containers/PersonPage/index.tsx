import React from 'react';
import styled from 'styled-components';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import peopleService from '../../services/peopleService';
import { Dispatch } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../app/hooks';
import { IPerson, Status } from '../types';
import { setPerson, setPersonRequestStatus } from './personPageSlice';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PersonPageDetails } from './person-page-details';

const actionDispatch = (dispatch: Dispatch) => ({
  setPerson: (data: IPerson) => dispatch(setPerson(data)),
  setPersonRequestStatusValue: (status: Status) =>
    dispatch(setPersonRequestStatus(status)),
});

const PersonPage = () => {
  const { setPerson, setPersonRequestStatusValue } = actionDispatch(
    useAppDispatch(),
  );
  const navigate = useNavigate();
  const { name } = useParams();
  const searchParam = (name || '').trim();

  React.useEffect(() => {
    const fetchPeople = async () => {
      try {
        if (searchParam === '') {
          setPersonRequestStatusValue(Status.idle);
          navigate('/');
          return;
        }

        setPersonRequestStatusValue(Status.loading);
        const response = await peopleService.getPerson(searchParam);
        if (response) {
          setPerson(response);
          setPersonRequestStatusValue(Status.success);
        }
      } catch (error) {
        setPersonRequestStatusValue(Status.error);
        console.log(error);
      }
    };

    fetchPeople();
  }, [setPerson, setPersonRequestStatusValue, navigate, searchParam]);

  return (
    <>
      <ToHomeNav to={'/'}>
        <ArrowBackOutlinedIcon />{' '}
        <BackToHomeTitle>Back to People</BackToHomeTitle>
      </ToHomeNav>
      <PersonPageDetails />
    </>
  );
};

export default PersonPage;

const ToHomeNav = styled(Link)`
  display: flex;
  margin: 2em 4em;

  align-items: center;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const BackToHomeTitle = styled.h6`
  font-size: 0.8em;
  font-weight: 600;
`;
