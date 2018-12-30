import React, {Component} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar"
import Typography from '@material-ui/core/Typography'

class AppHeader extends Component {
	render() {
		return(
			<AppBar position={"static"} color={"secondary"}>
				<Toolbar>
					<Typography variant={"title"} align={"center"} color={"inherit"}>Heart Up</Typography>
				</Toolbar>
			</AppBar>
		)
	}
}

export default AppHeader;