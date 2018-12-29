import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../css/register-form.css'

class RegisterInput extends Component {

  constructor(props) {
  	super(props)

	  this.state = {
  		data: {name: '', email: '', password: '', password_confirmation: '', gender: '男', introduction: ''},
      message: {name: ["名前の入力は必須です"], email: ["メールアドレスの入力は必須です"],
			password: ["passwordの入力は必須です"], password_confirmation: ["１つ目と同じpasswordを入力してください"], introduction: []},
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
  	alert(`${this.state.data.name}さんのメールアドレスは${this.state.data.email}で性別は${this.state.data.gender}、自己紹介は${this.state.data.introduction}`)
    this.setState({
	    data: {name: '', email: '', password: '', password_confirmation: '', gender: '男', introduction: ''},
	    message: {name: ["名前の入力は必須です"], email: ["メールアドレスの入力は必須です"],
		    password: ["passwordの入力は必須です"], password_confirmation: ["１つ目と同じpasswordを入力してください"], introduction: []},
    })
	}


	render() {
  	

  	let name = {data: this.state.data.name, message: this.state.message.name, checkValue: this.checkValue}
  	let email = {data: this.state.data.email, message: this.state.message.email, checkValue: this.checkValue}
  	let password = {data: this.state.data.password, message: this.state.message.password, checkValue: this.checkValue}
  	let password_confirmation = {data: this.state.data.password_confirmation, message: this.state.message.password_confirmation, checkValue: this.checkValue}
    let gender = {data: this.state.data.gender, checkValue: this.checkValue}
    let introduction = {data: this.state.data.introduction, message: this.state.message.introduction, checkValue: this.checkValue}
		
  
		return(
			<ul>
				<NameInput  {...name}/>
				<EmailInput {...email} />
				<PasswordInput {...password} />
				<PasswordConfirmationInput {...password_confirmation} />
				<GenderInput {...gender} />
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
					<label>名前</label>
					{this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}
					<input type={"text"} name={"name"} onChange={this.props.checkValue} value={this.props.data}></input>
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
				  <label>メールアドレス</label>
				  {this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}
				  <input type={"text"} name={"email"} onChange={this.props.checkValue} value={this.props.data} />
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
				<label>パスワード</label>
				{this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}
				<input type={"text"} name={"password"} onChange={this.props.checkValue} value={this.props.data} />
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
				<label>パスワードの確認</label>
				{this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}
				<input type={"text"} name={"password_confirmation"} onChange={this.props.checkValue} value={this.props.data} />
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
					<label>性別</label>
					<label>男<input type={"radio"} name={"gender"} onChange={this.props.checkValue} checked={this.props.data === "男"} value={"男"} /></label>
					<label>女<input type={"radio"} name={"gender"} onChange={this.props.checkValue} checked={this.props.data === "女"} value={"女"} /></label>
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
				<label>自己紹介</label>
				{this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}
				<textarea name={"introduction"} onChange={this.props.checkValue} defaultValue={this.props.data}></textarea>
			</li>
		)
	}
}

IntroductionInput.propTypes = {
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
				<button onClick={this.props.sendData} disabled={this.checkError(this.props.message)} >送信</button>
			</li>
		)
	}
}

SendButton.propType = {
	sendData: PropTypes.func,
	message: PropTypes.object.array
}




export default RegisterInput;