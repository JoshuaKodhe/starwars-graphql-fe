import React from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import Pagination from '@mui/material/Pagination';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectPeoplepeopleForHome,
  selectRequestStatusAndError,
  selectPage,
} from './selectors';
import { setPage } from './peoplePageSlice';
import PersonCard from './person-card';
import { Layout, Result } from '../../components';

const actionDispatch = (dispatch: Dispatch) => ({
  setPage: (page: number) => dispatch(setPage(page)),
});
export const PeopleList: React.FC = () => {
  const { setPage } = actionDispatch(useAppDispatch());
  const { request_status, error } = useAppSelector(selectRequestStatusAndError);
  const { peopleForHome, results, count } = useAppSelector(
    selectPeoplepeopleForHome,
  );
  const page = useAppSelector(selectPage);
  const pageCount = count && Math.ceil(count / 10);

  const isListData = peopleForHome && results;

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ): void => {
    setPage(value);
  };

  return (
    <Layout>
      <Result error={error} loading={request_status} data={results}>
        {isListData && results && (
          <>
            {results.map(person => (
              <PersonCard key={person.name} {...person} />
            ))}
            {pageCount && (
              <Pagination
                count={pageCount}
                page={page}
                color='primary'
                onChange={handleChange}
              />
            )}
          </>
        )}
      </Result>
    </Layout>
  );
};
