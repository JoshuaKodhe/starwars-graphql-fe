import { Dispatch } from '@reduxjs/toolkit';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import peopleService from '../../services/peopleService';
import { setPeople, setRequestStatus } from './peoplePageSlice';
import { IPeopleForHome, Status } from './types';

import { PeopleList } from './peopleList';
import { selectPage } from './selectors';

const actionDispatch = (dispatch: Dispatch) => ({
  setPeople: (data: IPeopleForHome) => dispatch(setPeople(data)),
  setRequestStatus: (status: Status) => dispatch(setRequestStatus(status)),
});

const People = () => {
  const { setPeople, setRequestStatus } = actionDispatch(useAppDispatch());
  const page = useAppSelector(selectPage);

  React.useEffect(() => {
    const fetchPeople = async () => {
      try {
        setRequestStatus(Status.loading);
        const people = await peopleService.getPeople(page);
        if (people) {
          setPeople(people);
          setRequestStatus(Status.success);
        }
      } catch (error) {
        setRequestStatus(Status.error);
        console.log(error);
      }
    };

    fetchPeople();
  }, [setPeople, setRequestStatus, page]);

  return <PeopleList />;
};

export default People;
