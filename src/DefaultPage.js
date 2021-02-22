import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Login} from "./Login"
import { useHistory } from "react-router-dom";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: "white",
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function DefaultPage(){
	const classes = useStyles();
	const historia = useHistory();
	
	const LoginView = () => (
		<Login />	
	);
	
	const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
	});
	
	
	const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
	  setState({ ...state, [anchor]: open });
	}
	
	const list = (anchor) => (
		<div
		  className={clsx(classes.list, {
			[classes.fullList]: anchor === 'top' || anchor === 'bottom',
		  })}
		  role="presentation"
		  onClick={toggleDrawer(anchor, false)}
		  onKeyDown={toggleDrawer(anchor, false)}
		>
		  <List>
			  <ListItem button>
				<ListItemAvatar>
				  <Avatar />
				</ListItemAvatar>
				<ListItemText
				  primary="Nombre del usuario"
				  secondary={
					<React.Fragment>
					  <Typography
						component="span"
						variant="body2"
						className={classes.inline}
						color="textPrimary"
					  >
						Correo electrónico
					  </Typography>
					</React.Fragment>
				  }
				/>
			  </ListItem>
		  </List>
		  <Divider />
		  <Divider />
		  <Divider />
		  <Divider />
		  <Divider />
		  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
		  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
		  <Router>
		  <List alignItems="bottom">
				  <div>
					  <ListItem alignItems="center" button onClick={handleLogOut}>
						<ListItemIcon><ExitToAppIcon /></ListItemIcon>
						<ListItemText primary="Logout" />
					  </ListItem>
				  </div>
			  </List>
		  </Router>
		</div>
	);

	
	function handleLogOut(){
		historia.push("/");
	}
	
	return (
		<React.Fragment>
				<CssBaseline />
						<div align="left">
						<Button onClick={toggleDrawer("left", true)}>Menú</Button>
							<SwipeableDrawer
							  anchor={"left"}
							  open={state["left"]}
							  onClose={toggleDrawer("left", false)}
							  onOpen={toggleDrawer("left", true)}
							>
								{list("left")}
							</SwipeableDrawer>
						</div>
					<div className={useStyles().heroContent}>
						<Container>
							<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
							  Contactos          
							</Typography>						
						</Container>
					</div>
						<Container className={useStyles().cardGrid} maxWidth="md">
							<Grid container spacing={4}>
								<Grid item key="1" xs={12} sm={6} md={4}>
									<Card className={useStyles().card}>
										<CardMedia
											className={useStyles().cardMedia}
											image = ""
											title ="Image title"
										/>
										<CardContent className={useStyles().cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												User 1
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary">
												View
											</Button>
										</CardActions>
									</Card>
								</Grid>
								<Grid item key="2" xs={12} sm={6} md={4}>
									<Card className={useStyles().card}>
										<CardMedia
											className={useStyles().cardMedia}
											image = ""
											title ="Image title"
										/>
										<CardContent className={useStyles().cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												User 2
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary">
												View
											</Button>
										</CardActions>
									</Card>
								</Grid>
								<Grid item key="3" xs={12} sm={6} md={4}>
									<Card className={useStyles().card}>
										<CardMedia
											className={useStyles().cardMedia}
											image = ""
											title ="Image title"
										/>
										<CardContent className={useStyles().cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												User 3
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary">
												View
											</Button>
										</CardActions>
									</Card>
								</Grid>
								<Grid item key="4" xs={12} sm={6} md={4}>
									<Card className={useStyles().card}>
										<CardMedia
											className={useStyles().cardMedia}
											image = ""
											title ="Image title"
										/>
										<CardContent className={useStyles().cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												User 4
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary">
												View
											</Button>
										</CardActions>
									</Card>
								</Grid>
								<Grid item key="5" xs={12} sm={6} md={4}>
									<Card className={useStyles().card}>
										<CardMedia
											className={useStyles().cardMedia}
											image = ""
											title ="Image title"
										/>
										<CardContent className={useStyles().cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												User 5
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary">
												View
											</Button>
										</CardActions>
									</Card>
								</Grid>
								<Grid item key="6" xs={12} sm={6} md={4}>
									<Card className={useStyles().card}>
										<CardMedia
											className={useStyles().cardMedia}
											image = ""
											title ="Image title"
										/>
										<CardContent className={useStyles().cardContent}>
											<Typography gutterBottom variant="h5" component="h2">
												User 6
											</Typography>
										</CardContent>
										<CardActions>
											<Button size="small" color="primary">
												View
											</Button>
										</CardActions>
									</Card>
								</Grid>

							</Grid>
						</Container>
			</React.Fragment>
	);
}

export default DefaultPage;