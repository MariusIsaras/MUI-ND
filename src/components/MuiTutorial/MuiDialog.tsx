import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { useState } from 'react'

const MuiDialog = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <h2>Tutorial 36 Dialog</h2>
    <Button onClick={()=> setOpen(true)}>Open dialog</Button>
    <Dialog 
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby='dialog-title'
    aria-describedby='dialog-description'
    >
        <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
        <DialogContent>
            <DialogContentText id='dialog-description'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus voluptatum laboriosam quia odit. Quia nesciunt eveniet beatae odio facilis, maiores qui optio exercitationem, dolorem reprehenderit voluptas minima earum, magnam quidem?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=> setOpen(false)}>Cancel</Button>
            <Button autoFocus onClick={()=> setOpen(false)}>Submit</Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default MuiDialog