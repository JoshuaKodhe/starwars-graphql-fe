import { apolloClient } from '../graphql';
import { IPeopleForHome, IPerson } from '../containers/types';
import { GET_PEOPLE, GET_PERSON } from './queries';

class PeopleService {
  async getPeople(page: number): Promise<IPeopleForHome> {
    try {
      const response = await apolloClient.query({
        query: GET_PEOPLE,
        variables: {
          page,
        },
      });
      if (!response || !response.data) throw Error('Cannot get anime list');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getPerson(name: string): Promise<IPerson> {
    try {
      const response = await apolloClient.query({
        query: GET_PERSON,
        variables: {
          name,
        },
      });
      if (!response || !response.data || !response.data.personByName)
        throw Error('Cannot get anime list');
      return response.data.personByName;
    } catch (error) {
      throw error;
    }
  }
}

export default new PeopleService();
