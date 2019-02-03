import React, { Component } from 'react'
import PageTitle from '../components/PageTitle.js'
import Button from '@material-ui/core/Button'
import Grid from "@material-ui/core/Grid"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import '../css/top_page.css'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import NativeSelect from '@material-ui/core/NativeSelect';

import { AlertSnackBar } from './Molecules/AlertSnackBar/index.js'
import { DialogWithTextField } from "./Molecules/DialogWithTextField";
import { LoginDialog } from './Molecules/LoginDialog'
import { timeToInterval } from "../Utility/common";



const styles = ({
	fixed: {
		position: "fixed",
		bottom: 50,
		right: 50
	},
	card: {
		// margin: "2em 2em 2em 2em",
		// height: "9em"
	},
	typography: {
		overflow: "hidden"
	},
	cardContent: {
		height: "4em",
		overflow: "hidden"
	},
	cardButton: {
		color: "#fff",
		backgroundColor: pink[200]
	}
})

const sortDataEnum = {
	NEW: "new",
	OLD: "old"
}



class TopPage extends Component {
	
	componentWillMount(): void {
		this.props.receiveWorryData()
		this.props.fetchDataEveryMinute()
	}
	
	
	componentWillUnmount(): void {
		this.props.resetState()
	}
	
	// UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
	// 	console.log(nextProps)
	// }
	
	constructor(props) {
		super(props)
	}
	
	
	render() {
		return (
			<div>
				<Grid container={true}>
					<Grid item sm={8}>
						<PageTitle title={"みんなの悩みを投稿してね！"} />
					</Grid>
					<Grid style={{position: "relative"}} item sm={4}>
						<NativeSelect
							style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", minWidth: "12em"}}
							inputProps={{
								name: 'sort',
								id: 'sort-simple'
							}}
							onChange={(e) => this.props.changeSort(e.target)}
						>
							<option value={sortDataEnum.NEW}>投稿新しい順</option>
							<option value={sortDataEnum.OLD}>投稿古い順</option>
						</NativeSelect>
					</Grid>
				</Grid>
				
				
				{this.props.worryData.worryLoadFlag ? <h1>データの取得中です。</h1> : ""}
				
				<div style={{paddingLeft: "1em", paddingRight: "1em", backgroundColor: pink[50], minHeight: "100vh"}}>
					<Grid container={true} spacing={32}>
						{this.props.worryData.worryDataArray.map(data => (
							<Grid key={data.id} item={true} xs={3}>
								<Card className={this.props.classes.card}>
									<CardContent className={this.props.classes.cardContent}>
										<Typography className={this.props.classes.typography}>
											{
												data.worry.length >= 100 ? data.worry.substr(0, 80) + "..." : data.worry
											}
										</Typography>
									</CardContent>
									<div　style={{display: "flex"}}>
										<CardContent>
											<Typography variant={"body1"} style={{fontSize: "10px"}}>{data.name}の投稿です</Typography>
											<Typography variant={"body2"} style={{fontSize: "8px"}}>{timeToInterval(data.created_at)}</Typography>
										</CardContent>
										
										<div style={{flexGrow: "1"}}></div>
										
										<CardActions>
											<Button variant={"contained"} size={"small"} className={this.props.classes.cardButton} onClick={() => this.props.pageTransition("/worry/" + data.id)}>みる</Button>
										</CardActions>
									</div>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
				
				<div>
					<Button
						variant={"contained"} color={"secondary"} className={this.props.classes.fixed}
						onClick={() => this.props.disPlayPostView()}>heart up
					</Button>
				</div>
				
				
				<div>
					<DialogWithTextField open={this.props.formData.heartUpViewFlag}
					                     onClose={() => this.props.changeFlag("heartUpViewFlag", false)}
					                     title={"なんでも相談しちゃおう"} onChange={(e) => this.props.changeInputWorryTitleValue(e.target)} value={this.props.formData.inputWorryTitleValue}
					                     onClick={() => this.props.inputWorryValueSubmit(this.props.formData.inputWorryTitleValue)} buttonText={"相談する"} message={[]}
					                     
					/>
					
					<LoginDialog
						open={this.props.formData.pleaseLoginFlag} onClose={() => this.props.changeFlag("pleaseLoginFlag", false)}
						title={"悩みを投稿する前にログインしてね"} dialogClose={() => this.props.changeFlag("pleaseLoginFlag", false)}
						loginAction={() => this.props.pageTransition('login')}
					></LoginDialog>
					
					
					<AlertSnackBar open={this.props.formData.sendWorrySuccess}
					  onClose={() => this.props.changeFlag("sendWorrySuccess", false)}
					  backColor={green[500]}
					>
					  投稿に成功しました
					</AlertSnackBar>
					
					<AlertSnackBar open={this.props.formData.sendWorryFailure}
					  onClose={() => this.props.changeFlag("sendWorryFailure", false)}
					  backColor={red[500]}
					>
						悩みの送信に失敗しました。電波が悪いか、サーバーの調子がおかしい可能性があります
					</AlertSnackBar>
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