import { apolloClient } from '../graphql';
import { IPeopleForHome } from '../containers/PeoplePage/types';
import { GET_PEOPLE } from './queries';

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
}

export default new PeopleService();
