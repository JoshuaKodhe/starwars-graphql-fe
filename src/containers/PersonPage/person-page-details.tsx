import React from 'react';
import styled from 'styled-components';

import { ContentSection } from './content-section';
import { PersonDetails } from './person-details';

import { useAppSelector } from '../../app/hooks';

import { Result } from '../../components';
import {
  selectPersonDetails,
  selectPersonError,
  selectPersonRequestStatus,
} from './selectors';

export const PersonPageDetails = () => {
  const error = useAppSelector(selectPersonError);
  const request_status = useAppSelector(selectPersonRequestStatus);
  const person = useAppSelector(selectPersonDetails);

  return (
    <ContentSection>
      <Result loading={request_status} error={error} data={person}>
        <Heading>Person Details</Heading>
        {person && <PersonDetails {...person} />}
      </Result>
    </ContentSection>
  );
};

const Heading = styled.h3`
  padding: 0.8em;
`;
