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
