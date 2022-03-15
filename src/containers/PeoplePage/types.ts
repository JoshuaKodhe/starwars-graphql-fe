export enum Status {
  idle = 'IDLE',
  loading = 'LOADING',
  success = 'SUCCESS',
  error = 'ERROR',
}

export interface IHomeworld {
  name: string;
  rotation_period?: string;
  orbital_period?: string;
  diameter?: string;
  climate?: string;
  gravity?: string;
  terrain?: string;
  surface_water?: string;
  population: string;
}

export interface IPerson {
  name: string;
  height: string;
  mass: string;
  gender: string;
  homeworld?: IHomeworld;
}

export interface IPeople {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: IPerson[];
}

export interface IPeopleForHome {
  peopleForHome: IPeople;
}

export interface IPeoplePageState {
  data: IPeopleForHome | null;
  request_status: Status;
  page: number;
  error: string | null;
}

export interface RootState {
  people: IPeoplePageState;
}
