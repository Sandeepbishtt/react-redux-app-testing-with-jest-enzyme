import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../utils";
import React from "react";

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />);
//   const wrapper = shallow(<App store={store} />).childAt(0).dive();
  console.log(wrapper.debug())
  return wrapper;
};

describe("App Component Test", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example 1",
          body: "Some Text",
        },
        {
          title: "Example 2",
          body: "Some Text",
        },
        {
          title: "Example 3",
          body: "Some Text",
        },
      ],
    };
wrapper = setup(initialState)
  });

it('should render without error',() =>{
    const component = findByTestAtrr(wrapper,'appComponent')
    expect(component.length).toBe(1)
})

// it('should updateBtn is render correctly',()=>{
//     const classInstance = wrapper.instance()
//     classInstance.updateStateBtn()
//     const newState = classInstance.state.hideBtn
//     expect(newState).toBe(false)
// })

});
