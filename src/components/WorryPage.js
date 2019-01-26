import React, { Component } from 'react'
import PageTitle from '../components/PageTitle'

class WorryPage extends Component {

	componentWillMount(): void {
		console.log(this.props.worryData)
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
								console.log(this.props.worryData.worryCommentUsers)
								let comment_user = this.findUserFromUsers(this.props.worryData.worryCommentUsers, comment.user_id)
								console.log(comment_user)
								return (
									<p>{ comment_user ? comment_user.name : "不明なユーザーです" }</p>
								)
							})()}
						</div>
					))
				}
			</div>
		)
	}
	
	findUserFromUsers  = (users, user_id) => {
		// users.forEach((d) => {
		// 		// 	console.log(d.id === user_id)
		// 		// 	return d.id === user_id ? d : null
		// 		// })
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
			</div>
		)
	}
}



export default WorryPage


