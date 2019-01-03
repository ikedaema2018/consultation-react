import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../css/register-form.css'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FilledInput from '@material-ui/core/FilledInput';
import axios from 'axios'
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


class RegisterInput extends Component {

  constructor(props) {
  	super(props)

	  this.state = {
  		data: {name: '', email: '', password: '', password_confirmation: '', gender: '男', age: '', introduction: ''},
      message: {name: ["名前の入力は必須です"], email: ["メールアドレスの入力は必須です"],
			password: ["passwordの入力は必須です"], password_confirmation: ["１つ目と同じpasswordを入力してください"], age: ['年齢を選択してください'], introduction: []},
	  }
		this.checkValue = this.checkValue.bind(this)
	  this.sendData = this.sendData.bind(this)
  }


  checkValue(event) {
  	let type = event.target.name
	  let val = event.target.value

	  var {data, message} = this.state
	  
	  switch (type) {
		  case "name":
		  	data.name = val
			  message.name = []

			  if(val.length > 10) {
				  message.name.push("名前は10文字以内で入力してください")
			  }
			  if(val.length === 0) {
				  message.name.push("名前の入力は必須です")
			  }
			  break
		  case "email":
		  	data.email = val
			  message.email = []

			  //呪文
			  var regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

			  if(val.length === 0) {
			  	message.email.push("メールアドレスの入力は必須です")
			  }
			  if(!regexp.test(val)) {
					message.email.push("正しいメールアドレスを入力してください")
			  }
			  break
		  case "password":

		  	data.password = val
			  message.password = []

			  if(val.length === 0) {
				  message.password.push("パスワードの入力は必須です")
			  }

			  if(val.length > 6) {
			  	message.password.push("パスワードは6文字以上にしてください")
			  }

			  if (!val.match(/[a-z]/) || !val.match(/[A-Z]/)) {
			  	message.password.push("大文字と小文字のアルファベット一文字以上づつ含んでください")
			  }
			  if(!val === data.password_confirmation) {
				  message.password_confirmation.push("１つ目と同じパスワードを入力してください")
			  }
			  break
			case "password_confirmation":
				
				data.password_confirmation = val
				message.password_confirmation = []
				
				if(val !== data.password) {
					message.password_confirmation.push("１つ目と同じパスワードを入力してください")
				}
				break
		  
			case "gender":
				data.gender = val
				break
		  
		  case "age":
		  	data.age = val
			  console.log(val)
			  message.age = []
			  if(!val) {
			  	message.age.push("年齢を選択してください")
			  }
			  break
			  
			case "introduction":
				data.introduction = val
				message.introduction = []
				
				if(val.length >= 100) {
					message.introduction.push("自己紹介は100文字以内で入力してください")
				}
			  break
		  
		  default:
			  break
	  }
	  
	  this.setState({data: data, message: message})
  }

	sendData() {
		
		let params = new URLSearchParams();
		params = {
			user: {}
		}
		
		
  	
  	let user = {
		  name: this.state.data.name,
		  email: this.state.data.email,
		  password: this.state.data.password,
		  password_confirmation: this.state.data.password_confirmation,
		  gender: this.state.data.gender,
		  age: this.state.data.age,
		  introduction: this.state.data.introduction
	  }
	  
	  for (let key in user) {
	  	params["user"][key] = user[key]
	  }
		
  	
		
    axios.post('http://localhost:3000/users', params)
	    .then((result) => {
		    this.setState({
			    data: {name: '', email: '', password: '', password_confirmation: '', gender: '男', age: '', introduction: ''},
			    message: {name: ["名前の入力は必須です"], email: ["メールアドレスの入力は必須です"],
				    password: ["passwordの入力は必須です"], password_confirmation: ["１つ目と同じpasswordを入力してください"], age: ["年齢を選択してください"], introduction: []},
		    })
	    })
	    .catch((error) => {
	    if (error.response) {
	    	if (error.response.data.error) {
	    		console.log(error.response.data.error)
	    		if (error.response.data.error === "RecordNotUnique") {
	    		  alert("ユーザー登録に失敗しました。すでに使用されているメールアドレスは使用できません")
				    let message = this.state.message
				    message.email.push("同じメールアドレスで登録することはできません")
				    this.setState({data: this.state.data, message: message})
			    }
		    }
	    }
	    alert("不明なエラーが発生しました。電波の状態を確かめてください")
    })
	}


	render() {

  	let name = {data: this.state.data.name, message: this.state.message.name, checkValue: this.checkValue}
  	let email = {data: this.state.data.email, message: this.state.message.email, checkValue: this.checkValue}
  	let password = {data: this.state.data.password, message: this.state.message.password, checkValue: this.checkValue}
  	let password_confirmation = {data: this.state.data.password_confirmation, message: this.state.message.password_confirmation, checkValue: this.checkValue}
    let gender = {data: this.state.data.gender, checkValue: this.checkValue}
    let age = {data: this.state.data.age, message: this.state.message.age, checkValue: this.checkValue}
    let introduction = {data: this.state.data.introduction, message: this.state.message.introduction, checkValue: this.checkValue}
		
  
		return(
			<ul className={"register-ul"}>
				<NameInput  {...name}/>
				<EmailInput {...email} />
				<PasswordInput {...password} />
				<PasswordConfirmationInput {...password_confirmation} />
				<GenderInput {...gender} />
				<AgeInput {...age}/>
				<IntroductionInput {...introduction} />
				<SendButton sendData={this.sendData} message={this.state.message}/>
			</ul>
		)
	}
}

class NameInput extends Component {
		render(){
			return (
				<li>
					<InputLabel>名前</InputLabel>
					{this.props.message ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}
					<TextField type={"text"} name={"name"} onChange={this.props.checkValue} value={this.props.data}></TextField>
				</li>
			)
		}
}
NameInput.propTypes= {
	checkValue: PropTypes.func,
  data: PropTypes.string,
	message: PropTypes.array
}

class EmailInput extends Component {
  	render() {
  		return (
  			<li>
				  <InputLabel>メールアドレス</InputLabel>
				  {this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}
				  <TextField type={"text"} name={"email"} onChange={this.props.checkValue} value={this.props.data} />
			  </li>
		  )
	  }
}

EmailInput.propTypes = {
	checkValue: PropTypes.func,
	data: PropTypes.string,
	message: PropTypes.array
}

class PasswordInput extends Component {
	render() {
		return (
			<li>
				<InputLabel>パスワード</InputLabel>
				{this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}
				<TextField type={"text"} name={"password"} onChange={this.props.checkValue} value={this.props.data} />
			</li>
		)
	}
}

PasswordInput.propTypes = {
	checkValue: PropTypes.func,
	data: PropTypes.string,
	message: PropTypes.array
}

class PasswordConfirmationInput extends Component {
	render() {
		return (
			<li>
				<InputLabel>パスワードの確認</InputLabel>
				{this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}
				<TextField type={"text"} name={"password_confirmation"} onChange={this.props.checkValue} value={this.props.data} />
			</li>
		)
	}
}

PasswordConfirmationInput.propTypes = {
	checkValue: PropTypes.func,
	data: PropTypes.string,
	message: PropTypes.array
}

class GenderInput extends Component {
		render() {
			return (
				<li>
					<RadioGroup>
						<InputLabel>性別</InputLabel>
						<InputLabel><Radio name={"gender"} onChange={this.props.checkValue} checked={this.props.data === "男"} value={"男"} />男</InputLabel>
						<InputLabel><Radio name={"gender"} onChange={this.props.checkValue} checked={this.props.data === "女"} value={"女"} />女</InputLabel>
					</RadioGroup>
				</li>
			)
		}
}

GenderInput.propTypes = {
	checkValue: PropTypes.func,
	data: PropTypes.string
}

class IntroductionInput extends Component {
	render() {
		return (
			<li>
				<InputLabel>自己紹介</InputLabel>
				{this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}
				<FilledInput multiline={true} name={"introduction"} onChange={this.props.checkValue} value={this.props.data}></FilledInput>
			</li>
		)
	}
}



IntroductionInput.propTypes = {
	checkValue: PropTypes.func,
	data: PropTypes.string,
	message: PropTypes.array
}


class AgeInput extends Component {
	render() {
		return (
			<li>
				<InputLabel>年齢</InputLabel>
				{this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}
				<TextField type={"number"} name={"age"} onChange={this.props.checkValue} value={this.props.data} />
			</li>
		)
	}
}

AgeInput.propTypes = {
	checkValue: PropTypes.func,
	data: PropTypes.string,
	message: PropTypes.array
}


class SendButton extends Component {
	checkError = (mes) => {
		for (var key in mes) {
		  if (mes[key].length !== 0) {
		  	return true
		  }
		}
		return false
	}
	
	
	render() {
		return (
			<li>
				<Button raised={"true"} color={"secondary"} onClick={this.props.sendData} disabled={this.checkError(this.props.message)} >送信</Button>
			</li>
		)
	}
}

SendButton.propType = {
	sendData: PropTypes.func,
	message: PropTypes.object.array
}




export default RegisterInput;