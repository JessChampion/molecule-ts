import * as React from 'react';
import { connect } from 'react-redux';

import { loadData } from '../model/actions';
import { IModel } from '../model/reducers';
import AppView from './AppView';

interface IAppProps {
  data: IModel;
  children?: any;
}

interface IDispatchProps {
  onLoad: any;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLoad: (data: any) => {
      dispatch(loadData(data));
      console.log('onLoad');
      console.log(data);
    }
  };
};

class App extends React.Component<IDispatchProps & IAppProps, IAppProps> {
  componentDidMount() {
    const {onLoad, data} = this.props;
    onLoad(data);
  }

  render() {
    return (
      <AppView>
        <h1>test</h1>
      </AppView>
    );
  }
}

export default connect<{}, IDispatchProps, IAppProps>(null, mapDispatchToProps)(App);