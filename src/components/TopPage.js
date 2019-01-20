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
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Grid from "@material-ui/core/Grid"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import '../css/top_page.css'
import { makeStyles } from '@material-ui/styles';
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';



const styles = ({
	fixed: {
		position: "fixed",
		bottom: 50,
		right: 50
	},
	success: {
		backgroundColor: "#008000"
	},
	error: {
		backgroundColor: red[500]
	},
	card: {
		margin: "2em 2em 2em 2em"
	}
})



class TopPage extends Component {
	
	componentWillMount(): void {
	  this.props.receiveWorryData()
	}
	
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<div>
				<PageTitle title={"みんなの悩みを投稿してね！"} />
				{this.props.worryData.worryLoadFlag ? <h1>データの取得中です。</h1> : ""}
				
				<Grid container={true} spacing={12} style={{backgroundColor: pink[50]}}>
					{this.props.worryData.worryDataArray.map(data => (
						<Grid xs={4} style={{height: "6em"}}>
							<Card className={this.props.classes.card}>
								<CardContent>
									<Typography>{data.worry}</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
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
						autoHideDuration={1000}
						onClose={() => this.props.changeFlag("sendWorrySuccess", false)}
						
					>
						
						<SnackbarContent
							style={{backgroundColor: green[500]}}
							message={<span>悩みの送信に成功しました</span>}
						/>
				  </Snackbar>
					<Snackbar
					  anchorOrigin={{
					  	horizontal: "center",
						  vertical: "top"
					  }}
					  open={this.props.formData.sendWorryFailure}
					  autoHideDuration={1000}
					  onClose={() => this.props.changeFlag("sendWorryFailure", false)}
					  >
						<SnackbarContent
							message={<span id={"message_id"}>悩みの送信に失敗しました。電波が悪いか、サーバーの調子がおかしい可能性があります</span>}
							className={this.props.classes.error}
						/>
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