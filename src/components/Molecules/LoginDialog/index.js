import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'


export const LoginDialog  = ({open, onClose, title, loginAction}) => {
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>
				{title}
			</DialogTitle>
			<DialogActions>
				<Button variant={"contained"} color={"default"} onClick={onClose}>閉じる</Button>
				<div style={{flexGrow: 1}}></div>
				<Button variant={"contained"} color={"secondary"} onClick={loginAction}>ログイン</Button>
			</DialogActions>
		</Dialog>
	)
}