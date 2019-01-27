import React, { Component } from 'react'
import PageTitle from '../components/PageTitle'
import { timeToInterval } from "../Utility/common";
import Button from '@material-ui/core/Button'
import {Snackbar, withStyles} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions';
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red';

import { AlertSnackBar } from './Molecules/AlertSnackBar'
import { DialogWithTextField } from "./Molecules/DialogWithTextField";


const styles = ({
	fixed: {
		position: "fixed",
		bottom: 50,
		right: 50
	}
})

class WorryPage extends Component {

	componentWillMount(): void {
		this.props.fetchComment(this.props.match.params.id)
	}
	
	WorryPanel = () => {
		return (
			<div>
				<h1>{this.props.worryData.worry.worry}</h1>
				{
					this.props.worryData.worryComments.map((comment) => (
						<div key={comment.id}>
							<h3>{comment.comment}</h3>
							{(() => {
								let comment_user = this.findUserFromUsers(this.props.worryData.worryCommentUsers, comment.user_id)
								return (
									<div>
										<p>{ comment_user ? comment_user.name : "不明なユーザー" }さんのコメント</p>
										<p>投稿日: {comment.created_at ? timeToInterval(comment.created_at) : "不明"}</p>
									</div>
								)
							})()}
						</div>
					))
				}
			</div>
		)
	}
	
	findUserFromUsers  = (users, user_id) => {
		for (let i = 0; i < users.length; i++) {
			if (users[i].id === user_id) {
				return users[i]
			}
			return null
		}
	}
	
	
	render() {
		return(
			<div>
				<PageTitle title={"悩みにコメントしよう"}/>
				{ this.props.flagList.loadCommentFlag ? <h2>コメントのロード中です</h2> : "" }
				{ this.props.worryData.worry !== {} ? <this.WorryPanel myprop={this.props.worryData} /> : "" }
				
				<Button
					variant={"contained"} color={"secondary"} className={this.props.classes.fixed}
					onClick={() => this.props.changeFlagList("openSendCommentViewFlag", true)}
				>
					comment
				</Button>
				
				<DialogWithTextField open={this.props.flagList.openSendCommentViewFlag}
				  onClose={() => this.props.changeFlagList("openSendCommentViewFlag", false)}
				  title={"コメントを入力してね"} onChange={(e) => this.props.changeCommentValue(e.target.value)} value={this.props.commentManagement.commentValue}
				  onClick={() => {}} buttonText={"submit"} message={this.props.commentManagement.commentMessage}
				/>
				
				
				{/*<Dialog*/}
				{/*	fullWidth maxWidth={"sm"}*/}
				{/*	open={this.props.flagList.openSendCommentViewFlag}*/}
				{/*	onClose={() => this.props.changeFlagList("openSendCommentViewFlag", false)}*/}
				{/*>*/}
				{/*	<DialogTitle>*/}
				{/*		コメントを入力してね！*/}
				{/*	</DialogTitle>*/}
				{/*	*/}
				{/*	<DialogContent>*/}
				{/*		{this.props.commentManagement.commentMessage.length > 0 ? <p>{this.props.commentManagement.commentMessage[0]}</p> : <p></p>}*/}
				{/*		<TextField*/}
				{/*			margin={"dense"} fullWidth rows={5} autoFocus={true} multiline={true}*/}
				{/*			onChange={(e) => this.props.changeCommentValue(e.target.value)} value={this.props.commentManagement.commentValue}*/}
				{/*		></TextField>*/}
				{/*		<DialogActions>*/}
				{/*		  <Button variant={"contained"} color={"secondary"} onClick={() => {}}>submit</Button>*/}
				{/*		</DialogActions>*/}
				{/*	</DialogContent>*/}
				{/*</Dialog>*/}
				
				<AlertSnackBar
					open={this.props.flagList.commentSubmitSuccessFlag}
					onClose={() => this.props.changeFlagList("commentSubmitSuccessFlag", false)}
					backColor={green[500]}
				>
					送信に成功しました!
				</AlertSnackBar>
				
				<AlertSnackBar
					open={this.props.flagList.connectServerFailureFlag}
					onClose={() => this.props.changeFlagList("connectServerFailureFlag", false)}
					backColor={red[500]}
				>
					サーバーへの送信に失敗しました。電波が悪いか、サーバーの調子がおかしい可能性があります
				</AlertSnackBar>
				
			</div>
		)
	}
}



export default withStyles(styles)(WorryPage)


