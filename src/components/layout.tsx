import React from 'react';
import styled from 'styled-components';

const Layout: React.FC = ({ children }) => {
  return <PageContainer>{children}</PageContainer>;
};

export default Layout;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-self: center;
  flex-grow: 1;
  padding: 32px;
`;
