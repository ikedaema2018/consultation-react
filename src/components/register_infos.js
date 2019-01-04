import '../css/register-form.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FilledInput from '@material-ui/core/FilledInput';
import React from 'react'

export default function RegisterForm({inputRegisterInfo, sendRegisterInfo, data, message, sendFlag}) {
	return(
		<ul className={"register-ul"}>
			<li>
				<InputLabel>名前</InputLabel>
				{message.name.length > 0 ? <p className={"error-message"}>{message.name[0]}</p> : <p></p>}
				<TextField type={"text"} name={"name"} onChange={(e) => inputRegisterInfo(e.target)  }  ></TextField>
			</li>
			<li>
				<InputLabel>メールアドレス</InputLabel>
				{message.email !== [] ? <p className={"error-message"}>{message.email[0]}</p> : <p></p>}
				<TextField type={"text"} name={"email"} onChange={(e) => inputRegisterInfo(e.target)} />
			</li>
			<li>
				<InputLabel>パスワード</InputLabel>
				{message.password !== [] ? <p className={"error-message"}>{message.password[0]}</p> : <p></p>}
				<TextField type={"text"} name={"password"} onChange={(e) => inputRegisterInfo(e.target)} />
			</li>
			<li>
				<InputLabel>パスワードの確認</InputLabel>
				{message.password_confirmation !== [] ? <p className={"error-message"}>{message.password_confirmation[0]}</p> : <p></p>}
				<TextField type={"text"} name={"password_confirmation"} onChange={(e) => inputRegisterInfo(e.target)} />
			</li>
			<li>
				<RadioGroup>
					<InputLabel>性別</InputLabel>
					<InputLabel><Radio name={"gender"} onChange={(e) => inputRegisterInfo(e.target)} checked={data.gender === "男"} value={"男"} />男</InputLabel>
					<InputLabel><Radio name={"gender"} onChange={(e) => inputRegisterInfo(e.target)} checked={data.gender === "女"} value={"女"} />女</InputLabel>
				</RadioGroup>
			</li>
			<li>
				<InputLabel>自己紹介</InputLabel>
				{message.introduction !== [] ? <p className={"error-message"}>{message.introduction[0]}</p> : <p></p>}
				<FilledInput multiline={true} name={"introduction"} onChange={(e) => inputRegisterInfo(e.target)}></FilledInput>
			</li>
			<li>
				<InputLabel>年齢</InputLabel>
				{message.age !== [] ? <p className={"error-message"}>{message.age[0]}</p> : <p></p>}
				<TextField type={"number"} name={"age"} onChange={(e) => inputRegisterInfo(e.target)} />
			</li>
			
			<li>
				<Button raised={"true"} color={"secondary"} onClick={() => sendRegisterInfo()} disabled={sendFlag} >送信</Button>
			</li>
		</ul>
	)
}