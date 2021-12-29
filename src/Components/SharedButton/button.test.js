import React from 'react'
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import SharedButton from './index'

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

const setUp = (props={}) => {
const component = shallow(<SharedButton {...props}/>)
return component;
}

const findByTestAttr = (component,attr) =>  {
    const wrapper = component.find(`[data-test='${attr}']`)
    return wrapper;
}
describe('MainContent',() =>{

    let component;
    let mockFunc;
    beforeEach(()=>{
        mockFunc = jest.fn()
        const props = {
            buttonText: 'Example Button Text',
            clickHandler: mockFunc
        };
        component = shallow(<SharedButton {...props} />);
    })
    it('it should render without error',() =>{
        // console.log(component.debug());
        const wrapper = findByTestAttr(component,'btn')
        expect(wrapper.length).toBe(1)
    })

    it('should it emit event on callback on click event',()=>{
        const button = findByTestAttr(component,'btn')
       button.simulate('click')
       const callback = mockFunc.mock.calls.length
       expect(callback).toBe(1)
    })
})
