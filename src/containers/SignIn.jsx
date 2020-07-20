import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core';

import { userLogIn } from '../actions';

const SignIn = ({ dispatch }) => {
	const AUTH_API = 'http://94.130.172.45:8000/api/v1';

	const hadleSubmit = async (e) => {
		e.preventDefault();

		const formValue = {
			email: e.target.email.value,
			password: e.target.password.value
		};

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formValue)
		};

		if (formValue.email && formValue.password) {
			await fetch(`${AUTH_API}/token/`, options).then((res) => res.json()).then((response) => {
				if (response) {
					localStorage.setItem('token', response.access);
					dispatch(userLogIn(formValue));
					window.location.href = '/dashboard';
				}
			});
		}
	};

	const useStyles = makeStyles((theme) => ({
		root: {
			'& .MuiTextField-root': {
				marginBottom: '28px'
			},
			'& .MuiDialog-paperWidthSm': {
				maxWidth: '396px'
			},
			'& #form-dialog-title': {
				padding: '0',
				marginBottom: '48px',
				'& h2': {
					fontSize: '24px',
					lineHeight: '28px'
				}
			},
			'& .MuiBackdrop-root': {
				backgroundColor: '#E5E5E5'
			},
			'& .MuiDialog-paper': {
				boxShadow: 'none'
			}
		},
		container: {
			padding: '40px 34px !important'
		},
		button: {
			textAlign: 'end',
			'& .MuiButton-containedPrimary': {
				backgroundColor: '#007BFF'
			}
		}
	}));

	const classes = useStyles();

	return (
		<div>
			<Dialog open aria-labelledby='form-dialog-title' className={classes.root} onBackdropClick={() => null}>
				<DialogContent className={classes.container}>
					<DialogTitle id='form-dialog-title'>Авторизация</DialogTitle>
					<form onSubmit={hadleSubmit}>
						<TextField autoFocus variant='outlined' id='email' label='Email' type='email' fullWidth />
						<TextField
							autoFocus
							variant='outlined'
							id='password'
							label='Password'
							type='password'
							fullWidth
						/>

						<div className={classes.button}>
							<Button variant='contained' color='primary' size='large' type='submit'>
								Войти
							</Button>
						</div>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default connect()(SignIn);
