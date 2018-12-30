import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';
import '../css/register-title.css'

class RegisterTitle extends Component {
	render() {
		return (
			<div className={"register-title-block"}>
				<h1 className={"register-title"}>会員登録お願いします</h1>
				<Divider light={"true"} variant={"middle"}></Divider>
			</div>
		)
	}
}

export default RegisterTitle;