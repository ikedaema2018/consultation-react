import React from 'react';
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import TextField from '@material-ui/core/TextField'

export const DialogWithTextField = ({open, onClose, title, onChange, value, onClick, message, buttonText}) => {
	return (
		<Dialog
			fullWidth maxWidth={"sm"} open={open} onClose={onClose}
		>
			<DialogTitle>
				{title}
			</DialogTitle>
			
			<DialogContent>
				{message.length > 0 ? <p>{message[0]}</p> : <p></p>}
				<TextField
					margin={"dense"} fullWidth rows={5} autoFocus={true} multiline={true}
					onChange={onChange} value={value}
				></TextField>
				<DialogActions>
					<Button variant={"contained"} color={"secondary"} onClick={onClick}>{buttonText}</Button>
				</DialogActions>
			</DialogContent>
		</Dialog>
	)
}