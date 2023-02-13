import React from 'react'
import { Alert, Stack, AlertTitle, Button } from '@mui/material'
import CheckIcon from'@mui/icons-material/Check'


const MuiAlert = () => {
  return (
    <Stack spacing={2}>
        <h2>Tutorial 34 Alert</h2>
        <Alert severity='error'>This is error alert</Alert>
        <Alert severity='warning'>This is warning alert</Alert>
        <Alert severity='info'>This is info alert</Alert>
        <Alert severity='success'>This is success alert</Alert>

        <Alert variant='outlined' severity='error'>This is error alert</Alert>
        <Alert variant='outlined' severity='warning'>This is warning alert</Alert>
        <Alert variant='outlined' severity='info'>This is info alert</Alert>
        <Alert variant='outlined' severity='success'>This is success alert</Alert>

        <Alert variant='filled' severity='error' onClose={()=> alert('Close alert')}>
            <AlertTitle>Error</AlertTitle>
            This is error alert</Alert>
        <Alert variant='filled' severity='warning'>
        <AlertTitle>Warning</AlertTitle>
            This is warning alert</Alert>
        <Alert variant='filled' severity='info'>
        <AlertTitle>Info</AlertTitle>
            This is info alert</Alert>
        <Alert variant='filled' severity='success' icon={<CheckIcon fontSize='inherit'/>} 
        action={<Button color='inherit' size='small'>UNDO</Button>}>
        <AlertTitle>Success</AlertTitle>
            This is success alert</Alert>
    </Stack >
  )
}

export default MuiAlert