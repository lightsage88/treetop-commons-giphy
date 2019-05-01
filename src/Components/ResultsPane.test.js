import React from 'react';
import ReactDOM from 'react-dom';
import ResultsPane from './ResultsPane';
import {mount, shallow} from 'enzyme';

it('renders without crashing', ()=>{
    const wrapper = shallow(<ResultsPane />);
    expect(wrapper.find('h2').hasClass('resultsPaneH2')).toEqual(true);
})