import axios from 'axios';

export const getAllUsers = () => async (dispatch) => {
	dispatch({ type: 'GET_ALL_USERS_REQUEST' });

	try {
		const response = await axios.get(
			'http://localhost:8080/api/users/getallusers',
		);
		console.log(response);
		dispatch({ type: 'GET_ALL_USERS_SUCCESS', payload: response.data });
	} catch (error) {
		dispatch({ type: 'GET_ALL_USERS_FAILED', payload: error });
	}
};
