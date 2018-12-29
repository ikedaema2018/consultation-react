import React, {Component} from 'react'
import PropTypes from 'prop-types'
import '../css/register-form.css'

class RegisterInput extends Component {

  constructor(props) {
  	super(props)

	  this.state = {
  		data: {name: ''},
      message: {name: ["名前の入力は必須です"]},
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
			  if(val.length === '') {
				  message.name.push("名前の入力は必須です")
			  }
			  break
		  default:
			  break
	  }
	  this.setState({data: data, message: message, status: status})
  }


	render() {
  	let name = {data: this.state.data.name, message: this.state.message.name, checkValue: this.checkValue}
		return(
			<ul>
				<NameInput checkValue={this.checkValue} {...name}/>
			</ul>
		)
	}
}

class NameInput extends Component {
		render(){
			console.log(this.props.message)
			console.log(this.props.data)
			return (
				<li>
					<label>名前</label>
					{this.props.message !== [] ? <p className={"error-message"}>{this.props.message}</p> : <p></p>}
					<input type={"text"} name={"name"} onChange={this.props.checkValue} value={this.props.name}></input>
				</li>
			)
		}
}
NameInput.propTypes= {
	checkValue: PropTypes.func,
	name: PropTypes.string
}

export default RegisterInput;