import '../css/register-form.css'
// import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import FilledInput from '@material-ui/core/FilledInput';
import React from 'react'

export default function RegisterForm({inputRegisterInfo, data, message}) {
	return(
		<ul className={"register-ul"}>
			<li>
				<InputLabel>名前</InputLabel>
				{message.name ? <p className={"error-message"}>{message.name[0]}</p> : <p></p>}
				<TextField type={"text"} name={"name"} onChange={(e) => inputRegisterInfo(e.target)  }  ></TextField>
			</li>
			{/*<li>*/}
				{/*<InputLabel>メールアドレス</InputLabel>*/}
				{/*{this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}*/}
				{/*<TextField type={"text"} name={"email"} onChange={this.props.checkValue} value={this.props.data} />*/}
			{/*</li>*/}
			{/*<li>*/}
				{/*<InputLabel>パスワード</InputLabel>*/}
				{/*{this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}*/}
				{/*<TextField type={"text"} name={"password"} onChange={this.props.checkValue} value={this.props.data} />*/}
			{/*</li>*/}
			{/*<li>*/}
				{/*<InputLabel>パスワードの確認</InputLabel>*/}
				{/*{this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}*/}
				{/*<TextField type={"text"} name={"password_confirmation"} onChange={this.props.checkValue} value={this.props.data} />*/}
			{/*</li>*/}
			{/*<li>*/}
				{/*<RadioGroup>*/}
					{/*<InputLabel>性別</InputLabel>*/}
					{/*<InputLabel><Radio name={"gender"} onChange={this.props.checkValue} checked={this.props.data === "男"} value={"男"} />男</InputLabel>*/}
					{/*<InputLabel><Radio name={"gender"} onChange={this.props.checkValue} checked={this.props.data === "女"} value={"女"} />女</InputLabel>*/}
				{/*</RadioGroup>*/}
			{/*</li>*/}
			{/*<li>*/}
				{/*<InputLabel>自己紹介</InputLabel>*/}
				{/*{this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}*/}
				{/*<FilledInput multiline={true} name={"introduction"} onChange={this.props.checkValue} value={this.props.data}></FilledInput>*/}
			{/*</li>*/}
			{/*<li>*/}
				{/*<InputLabel>年齢</InputLabel>*/}
				{/*{this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}*/}
				{/*<TextField type={"number"} name={"age"} onChange={this.props.checkValue} value={this.props.data} />*/}
			{/*</li>*/}
			
			{/*<li>*/}
				{/*<Button raised={"true"} color={"secondary"} onClick={this.props.sendData} disabled={this.checkError(this.props.message)} >送信</Button>*/}
			{/*</li>*/}
		</ul>
	)
}