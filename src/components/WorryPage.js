import React, { Component } from 'react'
import PageTitle from '../components/PageTitle'
import { timeToInterval } from "../Utility/common";
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';

import { AlertSnackBar } from './Molecules/AlertSnackBar'
import { DialogWithTextField } from "./Molecules/DialogWithTextField";
import {LoginDialog} from "./Molecules/LoginDialog";


const styles = ({
	fixed: {
		position: "fixed",
		bottom: 50,
		right: 50
	},
	mainCard: {
		margin: "auto",
		marginBottom: "3vh"
	}
})

class WorryPage extends Component {

	componentWillMount(): void {
		this.props.fetchComment(this.props.match.params.id)
	}
	
	componentWillUnmount(): void {
		this.props.resetState()
	}
	
	WorryPanel = () => {
		return (
			<div style={{marginRight: "1em"}}>
						<Card className={this.props.classes.mainCard}>
							<CardContent style={{minHeight: "20vh"}}>
								<Typography>{this.props.worryData.worry.worry}</Typography>
							</CardContent>
							<div style={{display: "flex", padding: "1em"}}>
								<p style={{fontSize: 5}}>{this.props.worryData.worryUser.name}さんの投稿です</p>
								<div style={{flexGrow: 1}}></div>
								<p style={{fontSize: 5}}>{this.props.worryData.worry.created_at}</p>
							</div>
						</Card>
						
						{
							this.props.worryData.worryComments.map((comment) => (
								<Paper key={comment.id} square >
									<Typography style={{padding: "1em"}}>{comment.comment}</Typography>
									{(() => {
										let comment_user = this.findUserFromUsers(this.props.worryData.worryCommentUsers, comment.user_id)
										return (
											<div style={{display: "flex", padding: "0.3em"}}>
												<p style={{fontSize: 4}}>{ comment_user ? comment_user.name : "不明なユーザー" }さんのコメント</p>
												<div style={{flexGrow: 1}}></div>
												<p style={{fontSize: 4}}>投稿日: {comment.created_at ? timeToInterval(comment.created_at) : "不明"}</p>
											</div>
										)
									})()}
								</Paper>
							))
						}
			</div>
		)
	}
	
	
	render() {
		return(
			<div style={{backgroundColor: pink[50], minHeight: "100vh", paddingTop: "2%"}}>
				
				{ this.props.flagList.loadCommentFlag ? <h2>コメントのロード中です</h2> : "" }
				
				<Grid container={true} style={{height: "88vh"}}>
					<Grid item lg={3} sm={0} style={{height: "100%"}}>
						<Card style={{marginRight: "1em", marginLeft: "1em", height: "100%"}}>
							工事中です
						</Card>
					</Grid>
					<Grid item lg={9} sm={12}>
						{ this.props.worryData.worry !== {} ? <this.WorryPanel myprop={this.props.worryData} /> : "" }
					</Grid>
				</Grid>
				
				
				
				
				
				
				
				
				
				
				
			
				<Button
					variant={"contained"} color={"secondary"} className={this.props.classes.fixed}
					onClick={() => this.props.commentViewDisplay()}
				>
					comment
				</Button>
				
				<DialogWithTextField open={this.props.flagList.openSendCommentViewFlag}
				  onClose={() => this.props.changeFlagList("openSendCommentViewFlag", false)}
				  title={"コメントを入力してね"} onChange={(e) => this.props.changeCommentValue(e.target.value)} value={this.props.commentManagement.commentValue}
				  onClick={() => this.props.submitComment(this.props.commentManagement.commentValue, this.props.match.params.id)} buttonText={"submit"} message={this.props.commentManagement.commentMessage}
				/>
				
				<LoginDialog open={this.props.flagList.pleaseLoginFlag}
				  onClose={() => this.props.changeFlag("pleaseLoginFlag", false)} title={"ログインしてください"}
					loginAction={() => this.props.pageTransition("/login")}
				/>
				
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
	
	findUserFromUsers  = (users, user_id) => {
		for (let i = 0; i < users.length; i++) {
			if (users[i].id === user_id) {
				return users[i]
			}
			return null
		}
	}
}



export default withStyles(styles)(WorryPage)


