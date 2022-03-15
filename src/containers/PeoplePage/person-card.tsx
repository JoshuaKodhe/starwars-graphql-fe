import React from 'react';
import styled from 'styled-components';
import { IPerson } from './types';

const PersonCard: React.FC<IPerson> = ({
  name,
  height,
  mass,
  gender,
  homeworld,
}) => {
  return (
    <CardContainer>
      <CardContent>
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardFooter>
            <PersonDetails>
              <PersonInfo>Gender : {gender}</PersonInfo>
              <PersonInfo>Height: {height}</PersonInfo>
              <PersonInfo>Mass: {mass}</PersonInfo>
              <HomeWorld>Home World: {homeworld?.name || ''}</HomeWorld>
            </PersonDetails>
          </CardFooter>
        </CardBody>
      </CardContent>
    </CardContainer>
  );
};

export default PersonCard;

const CardContainer = styled.div`
  border-radius: 5px;
  color: '#191C23';
  background-size: cover;
  background-color: white;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 480px) {
    width: 75%;
  }
  @media (min-width: 768px) {
    width: 36%;
  }
  @media (min-width: 992px) {
    width: 18%;
  }
  height: 320px;
  margin: 10px;
  overflow: hidden;
  position: relative;
  &:hover {
    background-color: #f9f9f9;
  }
  cursor: pointer;
  text-decoration: none;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 10px;
`;

const CardBody = styled.div`
  padding: 18;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CardTitle = styled.h6`
  text-align: center;
  font-size: 0.8em;
  line-height: 0.5em;
  font-weight: 600;
  padding: 8px;
  margin: 8px;
  flex: 1;
`;

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
`;

const PersonDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PersonInfo = styled.div`
  line-height: 1em;
  font-size: 1.2em;
  padding: 6px;
`;

const HomeWorld = styled.div`
  font-size: 1em;
  padding: 6px;
`;
