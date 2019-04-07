import {combineReducers} from 'redux';
import postsReducer from './postsRreducer';

export default combineReducers({
    posts: postsReducer
    
});