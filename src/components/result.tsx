import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const Result = ({ loading, error, data, children }: any) => {
  if (error) {
    return <Error>Error : {error.message}</Error>;
  }
  if (loading === 'LOADING') {
    return (
      <SpinnerContainer>
        <CircularProgress
          data-testid='spinner'
          style={{ color: "#A4EBF3" }}
          size={100}
        />
      </SpinnerContainer>
    );
  }
  if (!data) {
    return <h6>Nothing to show...</h6>;
  }
  if (data) {
    return children;
  }
};

export default Result;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Error = styled.h6`
  color: #9f6000;
`;
