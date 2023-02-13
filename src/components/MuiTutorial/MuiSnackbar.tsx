import React from 'react'
import { Snackbar, Button, Alert, AlertProps } from '@mui/material'
import { useState, forwardRef } from 'react'

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />
    }
)

const MuiSnackbar = () => {
    const [open, setOpen] = useState(false)
    const handleClose= (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false)
    }
  return (
    <>
    <h2>Tutorial 35 Snackbar</h2>
         <Button onClick={()=> setOpen(true)}>Submit</Button>
         {/* <Snackbar message='Submitted successfully'
         autoHideDuration={4000}
         open={open}
         onClose={handleClose}
         anchorOrigin={{
        vertical:'bottom',
        horizontal:'center'
        }}
         ></Snackbar> */}
         <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <SnackbarAlert onClose={handleClose} severity='success'>
                Form submited successfully!
            </SnackbarAlert>
         </Snackbar>
    </>
  )
}

export default MuiSnackbar