const logIn = (state = {}, action) => {
	switch (action.type) {
		case 'USER_LOGIN':
			return {
				...state,
				email: action.email,
				password: action.password
			};
		default:
			return state;
	}
};

export default logIn;
