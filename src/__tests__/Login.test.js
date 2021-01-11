import React from 'react';
import {render} from "@testing-library/jest-dom";
import Login from '../components/Login';
import { expect } from 'chai';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';

configure({adapter: new Adapter() });

describe('Test case for testing login',() =>{

    let wrapper;
    test('username check',()=>
    {
    wrapper = shallow(<App />);
    console.log(wrapper.debug());
    wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'andrew@gmail.com'}});
    expect(wrapper.state('email')).toEqual('andrew@gmail.com');
    })
    xit('password check',()=>{
    wrapper = shallow(<Login/>);
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'andrew123'}});
    expect(wrapper.state('password')).toEqual('andrew123');
    })
    xit('login check with right data',()=>{
    wrapper = shallow(<Login/>);
    wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'andrew@gmail.com'}});
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'andrew123'}});
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isLoggedIn')).toBe(true);
    })
    xit('login check with wrong data',()=>{
    wrapper = shallow(<Login/>);
    wrapper.find('input[type="email"]').simulate('change', {target: {name: 'email', value: 'andrew@gmail.com'}});
    wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'andrew1234'}});
    wrapper.find('button').simulate('click');
    expect(wrapper.state('isLoggedIn')).toBe(false);
    })
    });