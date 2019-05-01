import React from 'react';
import {shallow, mount} from 'enzyme';
import SearchBar from './SearchBar';


describe('SearchBar', ()=>{
    it('renders without crashing', ()=>{
        const wrapper = shallow(<SearchBar />);
        expect(wrapper.hasClass('searchBarDiv')).toEqual(true);
    })
})