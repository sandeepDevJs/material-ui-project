import {
	AppBar,
	Badge,
	Grid,
	IconButton,
	InputBase,
	makeStyles,
	Toolbar,
} from "@material-ui/core";
import React from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import SearchIcon from "@material-ui/icons/Search";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "#fff",
	},

	searchInput: {
		opacity: "0.6",
		padding: `0px ${theme.spacing(1)}px`,
		fontSize: "0.8rem",
		"&:hover": {
			backgroundColor: "#f2f2f2",
		},
		"& .MuiSvgIcon-root": {
			marginRight: theme.spacing(1),
		},
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar>
				<Grid container alignItems="center">
					<Grid item>
						<InputBase
							placeholder="Searh Topic.."
							startAdornment={<SearchIcon fontSize="small" />}
							className={classes.searchInput}
						/>
					</Grid>
					<Grid item sm></Grid>
					<Grid item>
						<IconButton>
							<Badge badgeContent={4} color={"secondary"}>
								<NotificationsNoneIcon fontSize="small" />
							</Badge>
						</IconButton>
						<IconButton>
							<Badge badgeContent={3} color={"primary"}>
								<ChatBubbleIcon fontSize="small" />
							</Badge>
						</IconButton>
						<IconButton>
							<Badge>
								<PowerSettingsNewIcon fontSize="small" />
							</Badge>
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
