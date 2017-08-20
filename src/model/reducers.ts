import * as R from 'ramda';

import { LOAD_DATA } from './actions';

export interface IPerson {
  id: number;
  firstName: string;
  lastName: string;
  team: string[];
}

export interface IModel {
  people: IPerson[];
}

interface IAction {
  data: IModel;
  type: string;
}

const getPeople = R.pathOr({}, ['data', 'people']);

const modelReducer = (state: IModel = {people: []}, action: IAction): IModel => {
  switch (action.type) {
    case LOAD_DATA: {
      return {
        people: getPeople(action)
      };
    }
  }
  return state;
};

export default modelReducer;