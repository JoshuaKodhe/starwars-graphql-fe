import { gql } from '@apollo/client';

export const GET_PEOPLE = gql`
  query PeopleForHome($page: Int!) {
    peopleForHome(page: $page) {
      count
      next
      previous
      results {
        name
        height
        mass
        gender
        homeworld {
          name
          population
        }
      }
    }
  }
`;

export const GET_PERSON = gql`
  query PersonByName($name: String) {
    personByName(name: $name) {
      name
      height
      mass
      gender
      homeworld {
        name
        rotation_period
        orbital_period
        diameter
        climate
        gravity
        terrain
        surface_water
        population
      }
    }
  }
`;
