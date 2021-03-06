import checkPropTypes from 'check-prop-types';
import { applyMiddleware,createStore } from 'redux';
import { middleWares } from '../src/Redux/Store/store';
import rootReducer from '../src/Redux/Reducers/index'

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};