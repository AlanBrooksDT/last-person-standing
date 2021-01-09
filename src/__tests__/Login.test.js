import React from 'react';
import {render} from "@testing-library/jest-dom";
import Login from '../components/Login';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() });

// describe( "email", () => {
//     test("should pass on correct input", () => {
//         const text= "test@test.com";
//         expect(value(text)).toBe(true);
//     });
// });


// describe('<Login />', () => {
//     const wrapper =shallow(<Login />);

//     expect(wrapper.find('.login-form')).to.have.length(1);
// });


describe('Test case for testing login',() =>{
    let wrapper;
    test('username check',()=>
    {
    wrapper = shallow(<Login/>);
    wrapper.find('input[type="text"]').simulate('change', {target: {name: 'email', value: 'andrew@gmail.com'}});
    expect(wrapper.state('email')).toEqual('andrew@gmail.com');
    })
    it('password check',()=>{
    wrapper = shallow(<Login/>);
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'andrew123'}});
    expect(wrapper.state('password')).toEqual('andrew123');
    })
    it('login check with right data',()=>{
    wrapper = shallow(<Login/>);
    wrapper.find('input[type="text"]').simulate('change', {target: {name: 'email', value: 'andrew@gmail.com'}});
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'andrew123'}});
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isLoggedIn')).toBe(true);
    })
    it('login check with wrong data',()=>{
    wrapper = shallow(<Login/>);
    wrapper.find('input[type="text"]').simulate('change', {target: {name: 'email', value: 'andrew@gmail.com'}});
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'andrew1234'}});
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isLoggedIn')).toBe(false);
    })
    });