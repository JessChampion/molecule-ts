import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/App';
import store from './store';
import { IModel } from './model/reducers';
import './index.css';

const testJson: IModel = {
  people: [
    {
      id: 1,
      firstName: 'Jess',
      lastName: 'Champion',
      team: [
        'space-ops'
      ]
    },
    {
      id: 2,
      firstName: 'Tim',
      lastName: 'Kung',
      team: [
        'quantum-dragons'
      ]
    },
    {
      id: 3,
      firstName: 'Tobie',
      lastName: 'Jamie',
      team: [
        'quantum-dragons'
      ]
    },
    {
      id: 4,
      firstName: 'James',
      lastName: 'Ford',
      team: [
        'style-council'
      ]
    }
  ]
};

ReactDOM.render(
  <Provider store={store}><App data={testJson} /></Provider>,
  document.getElementById('molecule-root') as HTMLElement
);
