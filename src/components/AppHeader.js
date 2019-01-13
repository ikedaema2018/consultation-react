import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar"
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";

const profileList = (
		<List>
			<ListItem button ><ListItemText primary={"a"} /></ListItem>
			<ListItem button ><ListItemText primary={"a"} /></ListItem>
			<ListItem button ><ListItemText primary={"a"} /></ListItem>
		</List>
)


class AppHeader extends Component {
	
	render() {
		console.log("this.props")
		console.log(this.props)
		return(
			<AppBar position={"static"} color={"secondary"}>
				<Toolbar>
					<Typography variant={"title"} align={"center"} color={"inherit"}>Heart Up</Typography>
					
					<div style={{flexGrow: 1}}></div>
					<IconButton　onClick={() => this.props.toggleDrawer('profileFlag', true)}>
						<AccountCircle/>
					</IconButton>
					<Drawer anchor="right" open={this.props.profileFlag} onClose={() => this.props.toggleDrawer('profileFlag', false)}>
						<div>
							{/*tabIndex={0}*/}
							{/*role="button"*/}
							{/*onClick={this.props.toggleDrawer('profileFlag', false)}*/}
							{/*onKeyDown={this.props.toggleDrawer('profileFlag', false)}*/}
						
							{profileList}
						</div>
					</Drawer>
				</Toolbar>
			</AppBar>
		)
	}
}

export default AppHeader;