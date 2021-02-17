import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
	  root: {
		flexGrow: 1,
	  },
	  paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	  },
	}));	


export class Login extends React.Component{
	
	render(){
		return(
			<CenteredGrid />
		);
	}
}

function CenteredGrid(){	
	
	const classes = useStyles();
		return(
			  <Container maxWidth="sm">
				
				  <div className={classes.root}>
					   <Grid container
							  direction="column"
							  justify="center"
							  alignItems="center"
							  spacing={3}>
						<Grid item xs={12}>
							<h1>Task Planner</h1>
						</Grid>
						<Grid item xs={12}>
								<AssignmentIcon style={{ fontSize: 200, align:"center"}}/>
						</Grid>
					</Grid>
					<Grid container
						  direction="column"
						  justify="space-evenly"
						  alignItems="stretch"
						  spacing={3}>
						<Grid item xs={12}>
							<TextField
							  required
							  id="standard-required"
							  //label="Label"
							  style={{ margin: 8 }}
							  placeholder="Username"
							  //helperText="Full width!"
							  fullWidth
							  margin="normal"
							  InputLabelProps={{
								shrink: true,
							  }}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
							  required
							  id="standard-full-width"
							  //label="Label"
							  type="password"
							  style={{ margin: 8 }}
							  placeholder="Password"
							  //helperText="Full width!"
							  fullWidth
							  margin="normal"
							  InputLabelProps={{
								shrink: true,
							  }}
							/>

						</Grid>
					</Grid>
					<Grid
					  container
					  direction="column"
					  justify="center"
					  alignItems="center"
					  spacing={3}>
						<Grid item xs={12}>
							<Button variant="contained" color="white" style={{width:550}}>
							  Login
							</Button>
						</Grid>
						<Grid item xs={12}>
							<Link
								 component="button"
								 variant="body2"

								>
								  <h1>Create Account</h1>
								</Link>
						</Grid>
					</Grid>
					</div>
				</Container>

		);
	}
