import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.hasClass('App')).toEqual(true);
});

// it('onSubmitFromHeader calls searchGiphy', ()=>{
//   const onSubmitFromHeaderMock = jest.fn();
//   const wrapper = mount(<App />);
//   wrapper.

// })
