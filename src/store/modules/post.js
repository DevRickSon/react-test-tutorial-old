import {createAction, handleActions} from 'redux-actions';
import axios from 'axios';

const getPostAPI = postId => {
	return axios.get(`http://jsonplaceholder.typicode.com/posts/${postId}`);
}

const GET_POST_PENDING = 'post/GET_POST_PENDING';
const GET_POST_FULFILLED = 'post/GET_POST_FULFILLED';
const GET_POST_REJECTED = 'post/GET_POST_REJECTED';

const pending = createAction(GET_POST_PENDING);
const fulfilled = createAction(GET_POST_FULFILLED, data => data);
const rejected = createAction(GET_POST_REJECTED);

export const getPost = postId => async dispatch => {
	dispatch(pending());

	try{
		const response = await getPostAPI(postId);
		dispatch(fulfilled(response));
		return response;
	}catch(e){
		dispatch(rejected(e));
	}
}

const initialState = {
	pending: false,
	rejected: false,
	title: '',
	body:''
};

export default handleActions({
	[GET_POST_PENDING]: state => ({
		...state,
		pending: true,
		rejected: false
	}),

	[GET_POST_FULFILLED]: (state, {payload: {data}}) => ({
		...state,
		pending: false,
		title: data.title,
		body: data.body

	}),

	[GET_POST_REJECTED]: state => ({
		...state,
		pending: false,
		rejected: true
	})
}, initialState);