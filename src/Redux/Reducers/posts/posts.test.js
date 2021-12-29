import {types} from '../../Actions/types'
import postsReducer from './reducer'

describe('Post Reducer',() =>{

    it('should return default state', () =>{
        const newState = postsReducer(undefined,{})
        expect(newState).toEqual([])
    })

    it('should return new state if returning type' ,() =>{
        const posts = [{title:'Test 1'},{title:'Test 2'},{title:'Test 3'}]
        const newState = postsReducer(undefined,{
            type:types.GET_POSTS,
            payload:posts
        })
        expect(newState).toEqual(posts)
    })
})
