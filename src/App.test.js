import React from 'react'
import { shallow } from 'enzyme'
import PersonList from './PersonList'

import App from './App'

describe('App', () => {

  it('has state', () => {
    const appWrapper = shallow(<App />);
    const appState = appWrapper.state();
    expect(appState).not.toBeNull(); // State property exists by default on
  });
});