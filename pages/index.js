import React from 'react';

import { requestInit } from '../redux/actions/olaf';
import { withReduxSaga } from '../redux/store';
import Page from '../containers/page';

class Index extends React.Component {
  static async getInitialProps({ store }) {
    const state = store.getState();
    if (!state.receiveData.get('description')) {
      store.dispatch(requestInit(state.selectedDescription));
    }
  }

  render() {
    return <Page/>;
  }
}

export default withReduxSaga(Index);
