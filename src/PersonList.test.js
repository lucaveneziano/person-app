import React from 'react'
import { shallow } from 'enzyme'
import PersonList from './PersonList'

describe('PersonList', () => {

  // Test for one person
  it('renders one li element when one person exists', () => {
    const people = [{ firstName: 'Alan', lastName: 'Turing' }];
    const personListWrapper = shallow(<PersonList people={people}/>);

    expect(personListWrapper.find('li')).toHaveLength(1);
  });
});