import React, {Component} from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar"
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Link } from 'react-router-dom'

const profileInfos = [
	{
		id: 1,
		name: "ログイン",
		url: "/login"
	},
	{
		id: 2,
		name: "新規登録",
		url: "/register"
	}
]



class AppHeader extends Component {
	
	render() {
		return(
			<div>
				<AppBar position={"static"} color={"secondary"}>
					<Toolbar>
						<Typography variant={"title"} align={"center"} color={"inherit"} ><Link to={{pathname: '/'}} style={{textDecoration: "none", color: "inherit"}} classes={"underlineNone"} >Heart up</Link></Typography>
						
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
								
								<List>
									{
										/*ログインしていたら名前表示*/
										localStorage.getItem('auth_token') && localStorage.getItem('user_name')
											? <ListItem button={false} key={"unique"}><ListItemText primary={localStorage.getItem('user_name') + "さん"}  style={{paddingLeft: 20, paddingRight: 20}} ></ListItemText></ListItem> : <ListItem button={false}></ListItem>
									}
									{
										profileInfos.map((profileInfo) =>
											{
												return (
													<ListItem button={true} key={profileInfo.id.toString()} onClick={() => this.props.pageTransition(profileInfo.url)} >
														<ListItemText primary={profileInfo.name} style={{paddingLeft: 20, paddingRight: 20}} />
													</ListItem>
												)
											}
										)
									}
									
									<ListItem button={true} onClick={() => this.props.logoutAction()} >
										<ListItemText primary={"ログアウト"} style={{paddingLeft: 20, paddingRight: 20}} />
									</ListItem>
								
								</List>
							</div>
						</Drawer>
					</Toolbar>
				</AppBar>
				
				<Dialog aria-labelledby={"alert-dialog-title"} open={this.props.logoutFlag} onClose={() => this.props.toggleDrawer('logoutFlag', false)}>
				  <DialogTitle id="alert-dialog-title">{ "ログアウトしましたよ！" }</DialogTitle>
				</Dialog>
			</div>
		)
	}
}

AppHeader.propTypes = {
	toggleDrawer: PropTypes.func.isRequired,
	pageTransition: PropTypes.func.isRequired,
	profileFlag: PropTypes.bool.isRequired,
	logoutFlag: PropTypes.bool.isRequired
}

export default AppHeader;