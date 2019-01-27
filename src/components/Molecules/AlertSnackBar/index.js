import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent';

export const AlertSnackBar = ({open, onClose, backColor, children}) => {
	
	return (
		<Snackbar
			anchorOrigin={{
				horizontal: "center",
				vertical: "top"
			}}
			open={open}
			autoHideDuration={1000}
			onClose={onClose}
		>
			
			<SnackbarContent
				style={{backgroundColor: backColor}}
				message={<span>{children}</span>}
			/>
		</Snackbar>
	)
}