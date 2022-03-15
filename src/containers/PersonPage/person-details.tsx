import React from 'react';
import styled from 'styled-components';
import { IPerson } from '../types';
import PersonImage from './../../assets/userimage.png';

export const PersonDetails: React.FC<IPerson> = ({
  name,
  height,
  mass,
  gender,
  homeworld,
}) => {
  return (
    <PersonDetailsContaier>
      <PersonInfo>
        <PersonInfoImage src={PersonImage} />
        <PersonInfoDetails>
          <PersonInfoDetailsDesc>Name : {name}</PersonInfoDetailsDesc>
          <PersonInfoDetailsDesc>Gender : {gender}</PersonInfoDetailsDesc>
          <PersonInfoDetailsDesc>Height: {height}</PersonInfoDetailsDesc>
          <PersonInfoDetailsDesc>Mass: {mass}</PersonInfoDetailsDesc>
        </PersonInfoDetails>
      </PersonInfo>
      <HomeWorldInfo>
        <Heading>Home World</Heading>
        <PersonInfoDetailsDesc>name : {homeworld?.name}</PersonInfoDetailsDesc>
        <PersonInfoDetailsDesc>
          Climate : {homeworld?.climate}
        </PersonInfoDetailsDesc>
        <PersonInfoDetailsDesc>
          Gravity : {homeworld?.gravity}
        </PersonInfoDetailsDesc>
        <PersonInfoDetailsDesc>
          Terrain:{homeworld?.terrain}
        </PersonInfoDetailsDesc>
        <PersonInfoDetailsDesc>
          Population:{homeworld?.population}a
        </PersonInfoDetailsDesc>
      </HomeWorldInfo>
    </PersonDetailsContaier>
  );
};

const PersonDetailsContaier = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
  width: 50%;
  height: 60vh;
`;

const PersonInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 2px solid #aaaaaa;
  margin: 6px;
  height: 40%;
`;

const PersonInfoImage = styled.img`
  display: flex;
  max-width: 250px;
  max-height: 100px;
  width: auto;
  height: auto;
  align-self: center;
`;

const PersonInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PersonInfoDetailsDesc = styled.div`
  font-size: 1em;
  padding: 6px;
`;

const Heading = styled.h5`
  font-size: 1em;
`;
const HomeWorldInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em;
`;
