import React from 'react'
import { shallow } from 'enzyme'
import MainContent from './MainContent'
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

const setUp = (props={}) => {
const component = shallow(<MainContent {...props}/>)
return component;
}

const findByTestAttr = (component,attr) =>  {
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper;
}

describe('MainContent',() =>{

    let component;
    beforeEach(()=>{
        component= setUp()
    })
    it('it should render without error',() =>{
        // console.log(component.debug());
        const wrapper = findByTestAttr(component,'card')
        expect(wrapper.length).toBe(6)
    })
})