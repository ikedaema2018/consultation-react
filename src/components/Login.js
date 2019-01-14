import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import PropTypes from 'prop-types';
import '../css/login.css'
import {Link} from "react-router-dom";
import PageTitle from './PageTitle.js'

export default class Login extends Component {
	
	render() {
		return (
			<div>
				<PageTitle title={"Log in"}></PageTitle>
				<Grid container spacing={16} >
					<Grid item xs={8} style={{paddingLeft: 50}}>
						<div style={{marginBottom: 20}}>
							<InputLabel>メールアドレス</InputLabel>
							{ this.props.message.email.length > 0 ? <p className="error-message">{ this.props.message.email[0]} </p> : "" }
							<TextField type={"email"} name={"email"} fullWidth={true} onChange={(e) => this.props.inputLoginForm(e.target)}  ></TextField>
						</div>
						<div style={{marginBottom: 20}}>
							<InputLabel>パスワード</InputLabel>
							{ this.props.message.email.length > 0 ? <p className="error-message">{ this.props.message.password[0] }</p> : ""}
							<TextField type={"password"} name={"password"} fullWidth={true} onChange={(e) => this.props.inputLoginForm(e.target)} ></TextField>
						</div>
						
						<Grid container justify={"flex-end"}>
							<Button raised={'true'} color={"secondary"} onClick={() => this.props.loginAction(this.props.data)} >送信</Button>
						</Grid>
					</Grid>
					
					<Modal open={this.props.loadFlag} disableBackdropClick={false} onBackdropClick={() => this.props.onModalOut()}>
						<div className={"login-modal-style"}>
							<div className={"login-modal-child"}>
								{ this.props.loginFlag ? <h3>ログインしました</h3> : <h3>ログインに失敗しました</h3> }
							</div>
						</div>
					</Modal>
				</Grid>
			</div>
	  )
	}
}

Login.propTypes = {
	data: PropTypes.object.isRequired,
	message: PropTypes.object.isRequired,
	loadFlag: PropTypes.bool.isRequired,
	loginFlag: PropTypes.bool.isRequired,
	inputLoginForm: PropTypes.func.isRequired,
	loginAction: PropTypes.func.isRequired,
}