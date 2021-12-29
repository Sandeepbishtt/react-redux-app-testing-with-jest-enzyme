
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../../../utils/index";
import React from "react";
import Blog from "./Blog";

const setup = (initialState = {}) => {
  const store = testStore(initialState);
//   const wrapper = shallow(<Blog store={store} />);
  const wrapper = shallow(<Blog store={store} />).childAt(0).dive();
//   console.log(wrapper.debug())
  return wrapper;
};

describe("blog Component Test", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example 1",
          body: "Some Text",
          id:'1'
        },
        {
          title: "Example 2",
          body: "Some Text",
          id:'2'
        },
        {
          title: "Example 3",
          body: "Some Text",
          id:'3'
        },
      ],
    };
wrapper = setup(initialState)
  });

it('should render without error',() =>{
    const component = findByTestAtrr(wrapper,'blogComponent')
    expect(component.length).toBe(1)
})

// it('exampleMethod_returnsAValue Method should return value as expected', () => {
//     const classInstance = wrapper.instance();
//     const newValue = classInstance.exampleMethod_returnsAValue(6);
//     expect(newValue).toBe(7);
// });

// it('should updateBtn is render correctly',()=>{
//     const classInstance = wrapper.instance()
//     classInstance.updateStateBtn()
//     const newState = classInstance.state.hideBtn
//     expect(newState).toBe(false)
// })


});