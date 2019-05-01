import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import {mount, shallow} from 'enzyme';

it('renders without crashing', ()=>{
    const wrapper = shallow(<Header />);
    expect(wrapper.find('span').hasClass('headerSpan')).toEqual(true);
})