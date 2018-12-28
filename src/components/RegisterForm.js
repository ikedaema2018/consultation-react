import React, {Component} from 'react'
import PropTypes from 'prop-types'

class RegisterInput extends Component {

  constructor(props) {
  	super(props)

	  this.state = {
  		name: '', email: '', password: '', gender: '', age: ''
	  }
	  this.nameOnChange = this.nameOnChange.bind(this)
  }

  nameOnChange(e) {
  	this.setState({name: e.target.value})
  }


	render() {
		return(
			<ul>
				<NameInput nameOnChange={this.nameOnChange} name={this.state.name}/>
			</ul>
		)
	}
}

const NameInput = (props) => {
  	console.log(props.name)
	return (
		<li>
			<label>名前</label>
			<input type={"text"} name={"name"} onChange={props.nameOnChange} value={props.name}></input>
		</li>
	)
}
NameInput.propTypes= {
	nameOnChange: PropTypes.func,
	name: PropTypes.string
}

export default RegisterInput;