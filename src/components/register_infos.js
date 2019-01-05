import '../css/register-form.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FilledInput from '@material-ui/core/FilledInput';
import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal';
import { Link } from 'react-router-dom'

export default class RegisterForm extends Component {

	render(){
		
		return(
			<div>
				<ul className={"register-ul"}>
					<li>
						<InputLabel>名前</InputLabel>
						{this.props.message.name.length > 0 ? <p className={"error-message"}>{this.props.message.name[0]}</p> : <p></p>}
						<TextField type={"text"} name={"name"} onChange={(e) => this.props.inputRegisterInfo(e.target)  }  ></TextField>
					</li>
					<li>
						<InputLabel>メールアドレス</InputLabel>
						{this.props.message.email !== [] ? <p className={"error-message"}>{this.props.message.email[0]}</p> : <p></p>}
						<TextField type={"text"} name={"email"} onChange={(e) => this.props.inputRegisterInfo(e.target)} />
					</li>
					<li>
						<InputLabel>パスワード</InputLabel>
						{this.props.message.password !== [] ? <p className={"error-message"}>{this.props.message.password[0]}</p> : <p></p>}
						<TextField type={"text"} name={"password"} onChange={(e) => this.props.inputRegisterInfo(e.target)} />
					</li>
					<li>
						<InputLabel>パスワードの確認</InputLabel>
						{this.props.message.password_confirmation !== [] ? <p className={"error-message"}>{this.props.message.password_confirmation[0]}</p> : <p></p>}
						<TextField type={"text"} name={"password_confirmation"} onChange={(e) => this.props.inputRegisterInfo(e.target)} />
					</li>
					<li>
						<RadioGroup>
							<InputLabel>性別</InputLabel>
							<InputLabel><Radio name={"gender"} onChange={(e) => this.props.inputRegisterInfo(e.target)} checked={this.props.data.gender === "男"} value={"男"} />男</InputLabel>
							<InputLabel><Radio name={"gender"} onChange={(e) => this.props.inputRegisterInfo(e.target)} checked={this.props.data.gender === "女"} value={"女"} />女</InputLabel>
						</RadioGroup>
					</li>
					<li>
						<InputLabel>自己紹介</InputLabel>
						{this.props.message.introduction !== [] ? <p className={"error-message"}>{this.props.message.introduction[0]}</p> : <p></p>}
						<FilledInput multiline={true} name={"introduction"} onChange={(e) => this.props.inputRegisterInfo(e.target)}></FilledInput>
					</li>
					<li>
						<InputLabel>年齢</InputLabel>
						{this.props.message.age !== [] ? <p className={"error-message"}>{this.props.message.age[0]}</p> : <p></p>}
						<TextField type={"number"} name={"age"} onChange={(e) => this.props.inputRegisterInfo(e.target)} />
					</li>
					
					<li>
						<Button raised={"true"} color={"secondary"} onClick={() => this.props.sendRegisterInfo()} disabled={!this.props.sendFlag} >送信</Button>
					</li>
				</ul>
				
				<Modal open>
					<div className={"register-modal-style"}>
						<div className={"register-modal-child"}>
							<h2>新規登録ありがとうございます！</h2>
						</div>
					</div>
				</Modal>
			</div>
		)
	}
	
}