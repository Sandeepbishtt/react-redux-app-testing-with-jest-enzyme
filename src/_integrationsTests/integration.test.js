import moxios from 'moxios'
import { fetchPosts } from '../Redux/Actions'
import { applyMiddleware,createStore } from 'redux';
import rootReducer from '../Redux/Reducers/index'
import { middleWares } from '../Redux/Store/store';

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleWares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};

describe('fetchPosts action', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {

        const expectedState = [{
            title: 'Example title 1',
            body: 'Some Text'
        },{
            title: 'Example title 2',
            body: 'Some Text'
        },{
            title: 'Example title 3',
            body: 'Some Text'
        }];
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchPosts())
        .then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
        
    });

});