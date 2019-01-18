import React, { Component } from 'react'
import PageTitle from '../components/PageTitle.js'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import '../css/top_page.css'

const styles = () => ({
	fixed: {
		position: "fixed",
		bottom: 50,
		right: 50
	}
})



class TopPage extends Component {
	
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div>
				<PageTitle title={"みんなの悩みを投稿してね！"}/>
				<div>
					<Button
						variant={"contained"} color={"secondary"} className={this.props.classes.fixed}
						onClick={() => this.props.disPlayPostView()}>heart up
					</Button>
				</div>
				
				
				<div>
					<Dialog open={this.props.formData.heartUpViewFlag} onClose={() => this.props.changeFlag("heartUpViewFlag", false)}>
						<DialogTitle>なんでも相談しちゃおう</DialogTitle>
						<DialogContent>
							<DialogContentText>悩みを書いて「相談する」ボタンを押してね！</DialogContentText>
							<TextField
								margin={"dense"} fullWidth rows={"5"} autoFocus={true} multiline={true}
								onChange={(e) => this.props.changeInputWorryTitleValue(e.target)} value={this.props.formData.inputWorryTitleValue}  />
							<DialogActions>
								<Button variant={"contained"} color={"secondary"} onClick={() => this.props.inputWorryValueSubmit(this.props.formData.inputWorryTitleValue)} >相談する</Button>
							</DialogActions>
						</DialogContent>
					</Dialog>
					
					<Dialog open={this.props.formData.pleaseLoginFlag} onClose={() => this.props.changeFlag("pleaseLoginFlag", false)}>
						<DialogTitle>
							悩みを投稿する前にログインしてね！
						</DialogTitle>
						<DialogActions>
							<Button variant={"contained"} color={"default"} onClick={() => this.props.changeFlag("pleaseLoginFlag", false)}>閉じる</Button>
							<div style={{flexGrow: 1}}></div>
							<Button variant={"contained"} color={"secondary"} onClick={() => this.props.pageTransition('login')}>ログイン</Button>
						</DialogActions>
					</Dialog>
					<Snackbar
					anchorOrigin={{
						horizontal: "center",
						vertical: "top"
					}}
					open={this.props.formData.sendWorrySuccess}
					autoHideDuration={2000}
					onClose={() => this.props.changeFlag("sendWorrySuccess", false)}
					message={<span id="message-id">悩みの送信に成功したよ！</span>}>
				</Snackbar>
				</div>
			</div>
		)
	}
}

TopPage.propTypes = {
		classes: PropTypes.object.isRequired,
	formData: PropTypes.shape({
		inputWorryTitleValue: PropTypes.string.isRequired,
		heartUpViewFlag: PropTypes.bool.isRequired
	})
}

export default withStyles(styles)(TopPage);