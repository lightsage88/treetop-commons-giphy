import React from 'react';
import {shallow, mount} from 'enzyme';
import SearchBar from './SearchBar';


describe('SearchBar', ()=>{
    it('renders without crashing', ()=>{
        const wrapper = shallow(<SearchBar />);
        expect(wrapper.hasClass('searchBarDiv')).toEqual(true);
    })

    it('calls updateInputString when user types in search input', ()=>{
        const updateInputStringMock =  jest.fn();
        const wrapper = mount(<SearchBar onChange={updateInputStringMock}/>);
        const value = 'rapBeef';
        //TODO: Figure out this test
        wrapper.find('input[type="text"]').instance().value = value;
        expect(updateInputStringMock).toHaveBeenCalled();

    })
})