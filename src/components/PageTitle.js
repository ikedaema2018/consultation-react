import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types'
import '../css/register-title.css'

class PageTitle extends Component {
	render() {
		return (
			<div className={"register-title-block"}>
				<h1 className={"register-title"}>{this.props.title}</h1>
				<Divider light={true} variant={"middle"}></Divider>
			</div>
		)
	}
}

PageTitle.propTypes = {
	title: PropTypes.string.isRequired
}

export default PageTitle;