import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../css/register-form.css'

class RegisterInput extends Component {

  constructor(props) {
  	super(props)

	  this.state = {
  		data: {name: '', email: ''},
      message: {name: ["名前の入力は必須です"], email: ["メールアドレスの入力は必須です"], password: ["passwordの入力は必須です"]},
	  }
		this.checkValue = this.checkValue.bind(this)
  }


  checkValue(event) {
  	let type = event.target.name
	  let val = event.target.value

	  var {data, message, status} = this.state

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
			  break

		  default:
			  break
	  }
	  this.setState({data: data, message: message, status: status})
  }




	render() {

  	let name = {data: this.state.data.name, message: this.state.message.name, checkValue: this.checkValue}
  	let email = {data: this.state.data.email, message: this.state.message.email, checkValue: this.checkValue}
  	let password = {data: this.state.data.password, message: this.state.message.password, checkValue: this.checkValue}


		return(
			<ul>
				<NameInput  {...name}/>
				<EmailInput {...email} />
				<PasswordInput {...password} />
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
					<input type={"text"} name={"name"} onChange={this.props.checkValue} value={this.props.name}></input>
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
				  <input type={"text"} name={"email"} onChange={this.props.checkValue} value={this.props.email} />
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
		console.log(this.props.message)
		return (
			<li>
				<label>パスワード</label>
				{this.props.message !== [] ? <p className={"error-message"}>{this.props.message[0]}</p> : <p></p>}
				<input type={"text"} name={"password"} onChange={this.props.checkValue} value={this.props.password} />
			</li>
		)
	}
}

PasswordInput.propTypes = {
	checkValue: PropTypes.func,
	data: PropTypes.string,
	message: PropTypes.array
}

export default RegisterInput;