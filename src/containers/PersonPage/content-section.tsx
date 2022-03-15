import React from 'react';
import styled from 'styled-components';

export const ContentSection = ({ children }: { children: React.ReactNode }) => {
  return <ContentDiv>{children}</ContentDiv>;
};

const ContentDiv = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  align-self: center;
`;
