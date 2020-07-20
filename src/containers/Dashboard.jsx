import React from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import { makeStyles, Button, MenuItem, ListItemIcon, Typography, MenuList, SvgIcon } from '@material-ui/core';

import Logo from '../assets/img/logo.png';
import Table from '../components/Table/Table';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		height: '100%'
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '1rem  4.5rem',
		color: '#3D5170',
		fontSize: '24px',
		'& .MuiButton-containedPrimary': {
			backgroundColor: '#007BFF'
		},
		'& > h3': {
			margin: 0
		}
	},
	dashboard: {
		minHeight: '83vh',
		padding: '1.5rem 2rem',
		background: '#E5E5E5'
	},
	menuItem: {
		padding: '12px 32px'
	},
	image: {
		padding: '1.5rem 0',
		textAlign: 'center'
	}
}));

const Dashboard = ({ dispath }) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={0}>
				<Grid item xs={12} sm={3}>
					<div className={classes.paper}>
						<div className={classes.image}>
							<img src={Logo} width='169px' alt='bizkit' />
						</div>
						<MenuList>
							<MenuItem className={classes.menuItem} selected>
								<ListItemIcon>
									<SvgIcon viewBox='0 0 24 24'>
										<path
											d='M17.0156 9V6.98438H6.98438V9H17.0156ZM17.0156 12.9844V11.0156H6.98438V12.9844H17.0156ZM14.0156 17.0156V15H6.98438V17.0156H14.0156ZM12.7031 3.28125C12.5156 3.09375 12.2812 3 12 3C11.7188 3 11.4844 3.09375 11.2969 3.28125C11.1094 3.46875 11.0156 3.70312 11.0156 3.98438C11.0156 4.26562 11.1094 4.51562 11.2969 4.73438C11.4844 4.92188 11.7188 5.01562 12 5.01562C12.2812 5.01562 12.5156 4.92188 12.7031 4.73438C12.8906 4.51562 12.9844 4.26562 12.9844 3.98438C12.9844 3.70312 12.8906 3.46875 12.7031 3.28125ZM18.9844 3C19.5156 3 19.9844 3.20312 20.3906 3.60938C20.7969 4.01562 21 4.48438 21 5.01562V18.9844C21 19.5156 20.7969 19.9844 20.3906 20.3906C19.9844 20.7969 19.5156 21 18.9844 21H5.01562C4.48438 21 4.01562 20.7969 3.60938 20.3906C3.20312 19.9844 3 19.5156 3 18.9844V5.01562C3 4.48438 3.20312 4.01562 3.60938 3.60938C4.01562 3.20312 4.48438 3 5.01562 3H9.1875C9.40625 2.40625 9.76562 1.92188 10.2656 1.54688C10.7656 1.17188 11.3438 0.984375 12 0.984375C12.6562 0.984375 13.2344 1.17188 13.7344 1.54688C14.2344 1.92188 14.5938 2.40625 14.8125 3H18.9844Z'
											fill='#007BFF'
										/>
									</SvgIcon>
								</ListItemIcon>
								<Typography variant='inherit'>Клиенты</Typography>
							</MenuItem>
							<MenuItem className={classes.menuItem} onClick={() => (window.location.href = '/')}>
								<ListItemIcon>
									<SvgIcon viewBox='0 0 24 24'>
										<path
											d='M18.9844 3C19.5156 3 19.9844 3.20312 20.3906 3.60938C20.7969 4.01562 21 4.48438 21 5.01562V18.9844C21 19.5156 20.7969 19.9844 20.3906 20.3906C19.9844 20.7969 19.5156 21 18.9844 21H5.01562C4.45312 21 3.96875 20.7969 3.5625 20.3906C3.1875 19.9844 3 19.5156 3 18.9844V15H5.01562V18.9844H18.9844V5.01562H5.01562V9H3V5.01562C3 4.48438 3.1875 4.01562 3.5625 3.60938C3.96875 3.20312 4.45312 3 5.01562 3H18.9844ZM10.0781 15.6094L12.6562 12.9844H3V11.0156H12.6562L10.0781 8.39062L11.4844 6.98438L16.5 12L11.4844 17.0156L10.0781 15.6094Z'
											fill='#007BFF'
										/>
									</SvgIcon>
								</ListItemIcon>
								<Typography variant='inherit'>Выход</Typography>
							</MenuItem>
						</MenuList>
					</div>
				</Grid>
				<Grid item xs={12} sm={9}>
					<div className={classes.header}>
						<h3>Клиенты</h3>
						<Button variant='contained' color='primary' size='large' type='submit'>
							+ Добавить
						</Button>
					</div>

					<div className={classes.dashboard}>
						<Table />
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default connect()(Dashboard);
